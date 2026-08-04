type WmsBrandLogoProps = {
  footer?: boolean;
  priority?: boolean;
};

export function WmsBrandLogo({ footer = false }: WmsBrandLogoProps) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5" aria-label="Workplace Management Solutions">
      <span
        aria-hidden="true"
        className={
          footer
            ? "bg-gradient-to-r from-[#198cff] via-[#52bdff] to-white bg-clip-text font-[750] tracking-[-0.09em] text-transparent text-[2rem] leading-none"
            : "bg-gradient-to-r from-[#198cff] via-[#52bdff] to-white bg-clip-text font-[750] tracking-[-0.09em] text-transparent text-[1.85rem] leading-none"
        }
      >
        WMS
      </span>
      <span className="min-w-0 border-l border-white/15 pl-2.5 uppercase leading-none">
        <span className="block whitespace-nowrap text-[0.66rem] font-semibold tracking-[0.18em] text-white">
          Workplace
        </span>
        <span className="mt-1 block whitespace-nowrap text-[0.48rem] font-medium tracking-[0.16em] text-[#73e4fa]">
          Management Solutions
        </span>
      </span>
    </span>
  );
}
