"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

type SnapshotData = {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  city: string;
  state: string;
  serviceArea: string;
  teamSize: string;
  leadSources: string;
  currentCrm: string;
  responseTime: string;
  bottleneck: string;
  goal: string;
  timeline: string;
  additionalNotes: string;
  consent: boolean;
  website: string;
};

const initialData: SnapshotData = {
  firstName: "",
  lastName: "",
  businessName: "",
  email: "",
  phone: "",
  industry: "",
  city: "",
  state: "",
  serviceArea: "",
  teamSize: "",
  leadSources: "",
  currentCrm: "",
  responseTime: "",
  bottleneck: "",
  goal: "",
  timeline: "",
  additionalNotes: "",
  consent: false,
  website: "",
};

const steps = [
  { title: "You and your business", fields: ["firstName", "lastName", "businessName", "email", "phone"] },
  { title: "Your market and team", fields: ["industry", "city", "state", "serviceArea", "teamSize"] },
  { title: "Your lead workflow", fields: ["leadSources", "currentCrm", "responseTime", "bottleneck"] },
  { title: "Your next priority", fields: ["goal", "timeline", "consent"] },
] as const;

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  autoComplete,
  required = true,
}: {
  label: string;
  name: keyof SnapshotData;
  value: string;
  onChange: (name: keyof SnapshotData, value: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(event) => onChange(name, event.target.value)}
        className="min-h-12 rounded-xl border border-white/15 bg-slate-950/70 px-4 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-100/60 focus:ring-2 focus:ring-cyan-100/15"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  options,
  onChange,
}: {
  label: string;
  name: keyof SnapshotData;
  value: string;
  options: string[];
  onChange: (name: keyof SnapshotData, value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <select
        name={name}
        value={value}
        required
        onChange={(event) => onChange(name, event.target.value)}
        className="min-h-12 rounded-xl border border-white/15 bg-slate-950 px-4 text-base text-white outline-none transition focus:border-cyan-100/60 focus:ring-2 focus:ring-cyan-100/15"
      >
        <option value="">Choose one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function WorkflowSnapshotForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [complete, setComplete] = useState(false);
  const [calendarUrl, setCalendarUrl] = useState("");
  const [startedAt] = useState(() => Date.now());
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const update = (name: keyof SnapshotData, value: string | boolean) => {
    setData((current) => ({ ...current, [name]: value }));
    setError("");
  };

  const validateStep = () => {
    const missing = steps[step].fields.some((field) => {
      const value = data[field];
      return typeof value === "boolean" ? !value : !value.trim();
    });
    if (missing) {
      setError("Please complete every required field before continuing.");
      return false;
    }
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const submit = async () => {
    if (!validateStep()) return;
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/workflow-snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, startedAt }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        calendarUrl?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "We could not send your Workflow Snapshot. Please try again.");
      }

      setCalendarUrl(result.calendarUrl || "");
      setComplete(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not send your Workflow Snapshot. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (complete) {
    return (
      <section
        aria-live="polite"
        className="rounded-[2rem] border border-cyan-100/25 bg-cyan-100/[0.06] p-7 sm:p-10"
      >
        <CheckCircle2 className="h-10 w-10 text-cyan-100" />
        <h2 className="mt-7 text-3xl font-semibold text-white">Your Workflow Snapshot is on its way.</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          We received your information and will review the systems, handoffs, and bottlenecks you
          identified.
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">
          Check your inbox for confirmation and the next step.
        </p>
        {calendarUrl && (
          <a
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-100 px-6 text-sm font-semibold text-slate-950 transition hover:bg-white"
            href={calendarUrl}
          >
            Schedule a Discovery Call
          </a>
        )}
      </section>
    );
  }

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/25 backdrop-blur-xl sm:p-8">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-100">
            Step {step + 1} of {steps.length}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{steps[step].title}</h2>
        </div>
        <span className="text-sm text-slate-400">{Math.round(progress)}%</span>
      </div>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-teal-300 transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <form
        className="mt-8"
        onSubmit={(event) => {
          event.preventDefault();
          if (step === steps.length - 1) void submit();
          else next();
        }}
      >
        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label>
            Website
            <input
              tabIndex={-1}
              autoComplete="off"
              name="website"
              value={data.website}
              onChange={(event) => update("website", event.target.value)}
            />
          </label>
        </div>

        {step === 0 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First name" name="firstName" value={data.firstName} onChange={update} autoComplete="given-name" />
            <Field label="Last name" name="lastName" value={data.lastName} onChange={update} autoComplete="family-name" />
            <div className="sm:col-span-2">
              <Field label="Business name" name="businessName" value={data.businessName} onChange={update} autoComplete="organization" />
            </div>
            <Field label="Email" name="email" type="email" value={data.email} onChange={update} autoComplete="email" />
            <Field label="Mobile phone" name="phone" type="tel" value={data.phone} onChange={update} autoComplete="tel" />
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Industry or trade" name="industry" value={data.industry} onChange={update} />
            <SelectField
              label="Team size"
              name="teamSize"
              value={data.teamSize}
              onChange={update}
              options={["1", "2 to 5", "6 to 15", "16 to 30", "31 or more"]}
            />
            <Field label="City" name="city" value={data.city} onChange={update} autoComplete="address-level2" />
            <Field label="State" name="state" value={data.state} onChange={update} autoComplete="address-level1" />
            <div className="sm:col-span-2">
              <Field label="Service area" name="serviceArea" value={data.serviceArea} onChange={update} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-5">
            <Field label="Current lead sources" name="leadSources" value={data.leadSources} onChange={update} />
            <Field label="Current CRM" name="currentCrm" value={data.currentCrm} onChange={update} />
            <SelectField
              label="Average response time"
              name="responseTime"
              value={data.responseTime}
              onChange={update}
              options={["Under 5 minutes", "5 to 30 minutes", "30 to 60 minutes", "Same day", "Next day or longer", "Not sure"]}
            />
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Biggest workflow bottleneck
              <textarea
                name="bottleneck"
                value={data.bottleneck}
                required
                rows={5}
                onChange={(event) => update("bottleneck", event.target.value)}
                className="rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-base leading-7 text-white outline-none transition focus:border-cyan-100/60 focus:ring-2 focus:ring-cyan-100/15"
              />
            </label>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Primary business goal
              <textarea
                name="goal"
                value={data.goal}
                required
                rows={4}
                onChange={(event) => update("goal", event.target.value)}
                className="rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-base leading-7 text-white outline-none transition focus:border-cyan-100/60 focus:ring-2 focus:ring-cyan-100/15"
              />
            </label>
            <SelectField
              label="Desired timeline"
              name="timeline"
              value={data.timeline}
              onChange={update}
              options={["Immediately", "Within 30 days", "Within 90 days", "This year", "Exploring options"]}
            />
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Additional notes
              <textarea
                name="additionalNotes"
                value={data.additionalNotes}
                rows={3}
                onChange={(event) => update("additionalNotes", event.target.value)}
                className="rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-base leading-7 text-white outline-none transition focus:border-cyan-100/60 focus:ring-2 focus:ring-cyan-100/15"
              />
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
              <input
                type="checkbox"
                name="consent"
                checked={data.consent}
                required
                onChange={(event) => update("consent", event.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 accent-cyan-200"
              />
              <span>
                I agree that WMS may contact me by email and phone about this request. Message and
                data rates may apply. Consent is not a condition of purchase. I can opt out at any
                time.
              </span>
            </label>
          </div>
        )}

        {error && (
          <p role="alert" className="mt-5 rounded-xl border border-rose-300/20 bg-rose-300/10 px-4 py-3 text-sm text-rose-100">
            {error}
          </p>
        )}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            disabled={step === 0 || submitting}
            onClick={() => setStep((current) => Math.max(current - 1, 0))}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-100 px-6 text-sm font-semibold text-slate-950 transition hover:bg-white disabled:cursor-wait disabled:opacity-70"
          >
            {submitting ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Sending
              </>
            ) : step === steps.length - 1 ? (
              "Send My Workflow Snapshot"
            ) : (
              <>
                Continue
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}

