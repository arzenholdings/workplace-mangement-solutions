import Script from "next/script";

const SURVEY_URL =
  "https://api.leadconnectorhq.com/widget/survey/bXm8ImcmR1hRAcfp5iv3";

export function WorkflowSnapshotForm() {
  return (
    <section
      aria-labelledby="workflow-snapshot-form-title"
      className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-cyan-950/25 backdrop-blur-xl sm:p-4"
    >
      <h2 id="workflow-snapshot-form-title" className="sr-only">
        WMS Workflow Snapshot
      </h2>
      <div className="overflow-hidden rounded-[1.5rem] bg-white">
        <iframe
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
      <p className="px-4 pb-3 pt-5 text-center text-xs leading-5 text-slate-400">
        Your answers are sent securely to Workplace Management Solutions for review.
      </p>
    </section>
  );
}
