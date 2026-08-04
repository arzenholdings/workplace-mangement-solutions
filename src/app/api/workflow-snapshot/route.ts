import { NextResponse } from "next/server";

type SnapshotPayload = {
  firstName?: unknown;
  lastName?: unknown;
  businessName?: unknown;
  email?: unknown;
  phone?: unknown;
  industry?: unknown;
  city?: unknown;
  state?: unknown;
  serviceArea?: unknown;
  teamSize?: unknown;
  leadSources?: unknown;
  currentCrm?: unknown;
  responseTime?: unknown;
  bottleneck?: unknown;
  goal?: unknown;
  timeline?: unknown;
  additionalNotes?: unknown;
  consent?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

const requiredTextFields = [
  "firstName",
  "lastName",
  "businessName",
  "email",
  "phone",
  "industry",
  "city",
  "state",
  "serviceArea",
  "teamSize",
  "leadSources",
  "currentCrm",
  "responseTime",
  "bottleneck",
  "goal",
  "timeline",
] as const;

const recentSubmissions = new Map<string, number>();
const ghlBaseUrl = "https://services.leadconnectorhq.com";

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function ghlRequest(path: string, token: string, init: RequestInit) {
  const response = await fetch(`${ghlBaseUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HighLevel request failed with status ${response.status}`);
  }

  return response.json() as Promise<Record<string, unknown>>;
}

export async function POST(request: Request) {
  let payload: SnapshotPayload;
  try {
    payload = (await request.json()) as SnapshotPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (clean(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0;
  if (!startedAt || Date.now() - startedAt < 2500) {
    return NextResponse.json(
      { ok: false, message: "Please take a moment to review your answers and try again." },
      { status: 429 },
    );
  }

  const values = Object.fromEntries(
    requiredTextFields.map((field) => [field, clean(payload[field])]),
  ) as Record<(typeof requiredTextFields)[number], string>;

  if (requiredTextFields.some((field) => !values[field]) || payload.consent !== true) {
    return NextResponse.json(
      { ok: false, message: "Please complete every required field and confirm consent." },
      { status: 400 },
    );
  }

  if (!isEmail(values.email)) {
    return NextResponse.json({ ok: false, message: "Enter a valid email address." }, { status: 400 });
  }

  const duplicateKey = values.email.toLowerCase();
  const lastSubmission = recentSubmissions.get(duplicateKey) ?? 0;
  if (Date.now() - lastSubmission < 5 * 60 * 1000) {
    return NextResponse.json(
      { ok: false, message: "We already received this Workflow Snapshot. Check your inbox for the next step." },
      { status: 409 },
    );
  }

  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "The Workflow Snapshot is temporarily unavailable. Please email sales@workplacemgtsolutions.com.",
      },
      { status: 503 },
    );
  }

  let customFieldMap: Record<string, string> = {};
  try {
    customFieldMap = JSON.parse(process.env.GHL_CUSTOM_FIELD_MAP || "{}") as Record<string, string>;
  } catch {
    customFieldMap = {};
  }

  const customFieldValues: Record<string, string> = {
    industry: values.industry,
    serviceArea: values.serviceArea,
    teamSize: values.teamSize,
    leadSources: values.leadSources,
    currentCrm: values.currentCrm,
    responseTime: values.responseTime,
    bottleneck: values.bottleneck,
    goal: values.goal,
    timeline: values.timeline,
    additionalNotes: clean(payload.additionalNotes),
    consent: "Yes",
  };
  const customFields = Object.entries(customFieldValues)
    .filter(([key, value]) => Boolean(customFieldMap[key] && value))
    .map(([key, value]) => ({ id: customFieldMap[key], field_value: value }));

  try {
    const contactResult = await ghlRequest("/contacts/upsert", token, {
      method: "POST",
      body: JSON.stringify({
        locationId,
        firstName: values.firstName,
        lastName: values.lastName,
        name: `${values.firstName} ${values.lastName}`,
        companyName: values.businessName,
        email: values.email,
        phone: values.phone,
        city: values.city,
        state: values.state,
        source: "WMS Website Workflow Snapshot",
        tags: ["workflow-snapshot", "website-lead"],
        customFields,
      }),
    });

    const contact = contactResult.contact as { id?: string } | undefined;
    if (!contact?.id) throw new Error("HighLevel contact response did not include an ID");

    const noteBody = [
      "WMS Workflow Snapshot",
      `Business: ${values.businessName}`,
      `Industry or trade: ${values.industry}`,
      `Service area: ${values.serviceArea}`,
      `Team size: ${values.teamSize}`,
      `Current lead sources: ${values.leadSources}`,
      `Current CRM: ${values.currentCrm}`,
      `Average response time: ${values.responseTime}`,
      `Biggest workflow bottleneck: ${values.bottleneck}`,
      `Primary business goal: ${values.goal}`,
      `Desired timeline: ${values.timeline}`,
      `Additional notes: ${clean(payload.additionalNotes) || "None provided"}`,
      "Email and phone contact consent: Yes",
      "Source: WMS Website Workflow Snapshot",
    ].join("\n");

    await ghlRequest(`/contacts/${contact.id}/notes`, token, {
      method: "POST",
      body: JSON.stringify({ body: noteBody }),
    });

    const pipelineId = process.env.GHL_PIPELINE_ID;
    const pipelineStageId = process.env.GHL_PIPELINE_STAGE_ID;
    if (pipelineId && pipelineStageId) {
      await ghlRequest("/opportunities/", token, {
        method: "POST",
        body: JSON.stringify({
          locationId,
          pipelineId,
          pipelineStageId,
          contactId: contact.id,
          name: `${values.businessName} | Workflow Snapshot`,
          status: "open",
          source: "WMS Website Workflow Snapshot",
        }),
      });
    }

    const workflowId = process.env.GHL_WORKFLOW_ID;
    if (workflowId) {
      await ghlRequest(`/contacts/${contact.id}/workflow/${workflowId}`, token, {
        method: "POST",
        body: JSON.stringify({ eventStartTime: new Date().toISOString() }),
      });
    }

    recentSubmissions.set(duplicateKey, Date.now());
    return NextResponse.json({
      ok: true,
      calendarUrl: process.env.GHL_CALENDAR_URL || "",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not send your Workflow Snapshot. Please try again or email sales@workplacemgtsolutions.com.",
      },
      { status: 502 },
    );
  }
}

