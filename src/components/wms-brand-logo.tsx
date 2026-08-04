import Image from "next/image";

type WmsBrandLogoProps = {
  footer?: boolean;
  priority?: boolean;
};

export function WmsBrandLogo({ footer = false, priority = false }: WmsBrandLogoProps) {
  return (
    <span
      className={
        footer
          ? "relative block h-[62px] w-[148px] shrink-0 overflow-hidden"
          : "relative block h-[54px] w-[126px] shrink-0 overflow-hidden"
      }
    >
      <Image
        src="/wms-approved-logo.png"
        alt="Workplace Management Solutions"
        width={350}
        height={180}
        priority={priority}
        sizes={footer ? "220px" : "190px"}
        className={
          footer
            ? "absolute -left-px -top-[26px] h-auto w-[220px] max-w-none"
            : "absolute -left-px -top-[22px] h-auto w-[190px] max-w-none"
        }
      />
    </span>
  );
}
