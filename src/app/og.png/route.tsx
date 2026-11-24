import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

// Social preview image, written to /og.png at build time.
export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f4f0e8", color: "#17150f", padding: 80 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 32, background: "#17150f", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 24, height: 24, borderRadius: 12, background: "#c2410c" }} />
          </div>
          <div style={{ fontSize: 28, color: "#5f594d" }}>{`${site.role}, ${site.location}`}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, letterSpacing: -4, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 40, marginTop: 28, color: "#5f594d", maxWidth: 950 }}>{site.headline}</div>
        </div>
      </div>
    ),
    size,
  );
}
