import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";
export const alt = "Linestory Studio — Architecture & Interiors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social share card, generated at build. Colors mirror the woven logo.
export default async function OgImage() {
  const mark = `data:image/png;base64,${(
    await readFile(path.join(process.cwd(), "public", "logo-mark.png"))
  ).toString("base64")}`;
  const cream = "#f5f2ea";
  const ink = "#141414";
  const turq = "#1f97a6";

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
        {/* real woven mark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark} width={120} height={120} alt="" style={{ marginBottom: 32 }} />

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
          Architects &amp; Interior Designers · Nagpur
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#5f5c52", marginTop: 12 }}>
          Every line tells a story.
        </div>
      </div>
    ),
    size
  );
}
