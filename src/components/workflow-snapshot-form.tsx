"use client";

import Script from "next/script";
import { CalendarClock, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SURVEY_URL =
  "https://api.leadconnectorhq.com/widget/survey/bXm8ImcmR1hRAcfp5iv3";
const CALENDAR_URL =
  "https://api.leadconnectorhq.com/widget/booking/zVlJ35hynNnHFRvege1F";

const HIGHLEVEL_ORIGINS = new Set([
  "https://api.leadconnectorhq.com",
  "https://link.msgsndr.com",
]);

export function WorkflowSnapshotForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleHighLevelMessage = (event: MessageEvent<unknown>) => {
      if (!HIGHLEVEL_ORIGINS.has(event.origin)) return;
      if (event.source !== iframeRef.current?.contentWindow) return;
      if (!Array.isArray(event.data) || event.data[0] !== "set-sticky-contacts") return;

      setSubmitted(true);
    };

    window.addEventListener("message", handleHighLevelMessage);
    return () => window.removeEventListener("message", handleHighLevelMessage);
  }, []);

  return (
    <div className="grid gap-6">
      <section
        aria-labelledby="workflow-snapshot-form-title"
        className="min-w-0 overflow-hidden rounded-xl border border-[#1a292f] bg-[#0d1418] p-2 shadow-2xl shadow-black/30 sm:p-4"
      >
        <h2 id="workflow-snapshot-form-title" className="sr-only">
          WMS Workflow Snapshot
        </h2>
        <div className="min-w-0 overflow-hidden rounded-lg bg-white">
          <iframe
            ref={iframeRef}
            id="bXm8ImcmR1hRAcfp5iv3"
            src={SURVEY_URL}
            title="WMS Workflow Snapshot"
            className="block min-h-[980px] w-full border-0 bg-white sm:min-h-[900px]"
            scrolling="no"
          />
        </div>
        <Script
          id="wms-workflow-snapshot-embed"
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="afterInteractive"
        />
        <p className="px-4 pb-3 pt-5 text-center text-xs leading-5 text-[#718087]">
          Your answers are sent securely to Workplace Management Solutions for review.
        </p>
      </section>

      {submitted && (
        <section
          aria-live="polite"
          className="rounded-xl border border-[#27414b] bg-[#102028] p-7 shadow-2xl shadow-black/20 sm:p-9"
        >
          <CheckCircle2 className="h-10 w-10 text-[#73e4fa]" aria-hidden="true" />
          <h2 className="wms-card-title mt-6 text-3xl">
            Your Workflow Snapshot is on its way.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#dce3e6] sm:text-lg sm:leading-8">
            We received your information and will review the systems, handoffs, and bottlenecks you
            identified.
          </p>
          <p className="mt-3 text-base leading-7 text-[#dce3e6] sm:text-lg sm:leading-8">
            Check your inbox for confirmation and the next step.
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="wms-button mt-8 w-full sm:w-auto"
          >
            <CalendarClock className="h-4 w-4" aria-hidden="true" />
            Schedule a 15-Minute Discovery Call
          </a>
          <p className="mt-4 text-sm leading-6 text-[#718087]">
            Scheduling is optional. You can book now or return when the timing works for you.
          </p>
        </section>
      )}
    </div>
  );
}
