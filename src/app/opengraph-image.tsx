import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Linestory Studio — Architecture & Interiors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social share card, generated at build. Colors mirror the woven logo.
export default function OgImage() {
  const cream = "#f5f2ea";
  const ink = "#141414";
  const turq = "#1f97a6";
  const gold = "#f2b705";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: cream,
          color: ink,
        }}
      >
        {/* woven mark: two crossed bars */}
        <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
          <div style={{ width: 70, height: 18, borderRadius: 9, background: turq }} />
          <div style={{ width: 70, height: 18, borderRadius: 9, background: gold }} />
          <div style={{ width: 70, height: 18, borderRadius: 9, background: turq }} />
        </div>

        <div style={{ display: "flex", fontSize: 128, fontWeight: 700, letterSpacing: -2 }}>
          LINESTORY
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            letterSpacing: 20,
            color: turq,
            marginTop: 4,
          }}
        >
          STUDIO
        </div>

        <div style={{ display: "flex", width: 340, height: 4, background: turq, marginTop: 40 }} />

        <div style={{ display: "flex", fontSize: 34, color: "#3a3a38", marginTop: 32 }}>
          Architecture · Interiors · Master Planning
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#5f5c52", marginTop: 12 }}>
          Every line tells a story.
        </div>
      </div>
    ),
    size
  );
}
