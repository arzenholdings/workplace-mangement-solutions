export default function Loading() {
  return (
    <main
      aria-label="Loading Workplace Management Solutions"
      className="min-h-screen bg-[#06090b] text-white"
    >
      <section className="wms-grid-bg relative flex min-h-screen items-center overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
        <div className="wms-hero-glow" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-[1180px] gap-12 lg:grid-cols-2">
          <div>
            <div className="h-4 w-52 rounded-full bg-[#39d5f6]/10" />
            <div className="mt-8 h-16 max-w-xl rounded-lg bg-white/[0.07] sm:h-24" />
            <div className="mt-3 h-16 max-w-lg rounded-lg bg-white/[0.07] sm:h-24" />
            <div className="mt-8 h-24 max-w-xl rounded-lg bg-white/[0.04]" />
            <div className="mt-8 h-12 w-56 max-w-full rounded-full bg-[#39d5f6]/15" />
          </div>
          <div className="h-[460px] rounded-xl border border-[#1a292f] bg-[#0d1418]" />
        </div>
      </section>
    </main>
  );
}
