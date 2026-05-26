import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt =
  "Workplace Management Solutions AI operations consulting preview";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 22% 16%, rgba(45,212,191,0.42), transparent 30%), radial-gradient(circle at 76% 24%, rgba(129,140,248,0.34), transparent 28%), linear-gradient(135deg, #05070d 0%, #07111f 54%, #020617 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#cffafe",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 18,
              border: "1px solid rgba(207,250,254,0.42)",
              background: "rgba(255,255,255,0.1)",
            }}
          />
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#a5f3fc",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            AI operations ecosystem
          </div>
          <div
            style={{
              marginTop: 28,
              maxWidth: 940,
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: 0,
            }}
          >
            Your business systems, moving as one intelligent field.
          </div>
          <div
            style={{
              marginTop: 28,
              maxWidth: 820,
              color: "#cbd5e1",
              fontSize: 30,
              lineHeight: 1.35,
            }}
          >
            AI automation, reporting, integrations, workflow design, and
            infrastructure modernization.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
