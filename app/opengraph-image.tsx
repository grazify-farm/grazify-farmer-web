import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE.appName} — ${SITE.appTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:    "100%",
          height:   "100%",
          display:  "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding:  "72px 80px",
          background:
            "linear-gradient(135deg, #EAF8F0 0%, #F4FCF7 50%, #ffffff 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(37, 211, 102, 0.18)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -160,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(2, 150, 0, 0.10)",
            filter: "blur(40px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              boxShadow: "0 8px 32px rgba(37, 211, 102, 0.35)",
            }}
          >
            🌾
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: "#202020", letterSpacing: -1 }}>
              {SITE.appName}
            </span>
            <span style={{ fontSize: 18, color: "#6D6D6D", marginTop: 2 }}>
              {SITE.attribution}{"  "}·{"  "}{SITE.appTagline}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <h1
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#202020",
              lineHeight: 1.08,
              margin: 0,
              maxWidth: 960,
              letterSpacing: -2,
            }}
          >
            Your farming{" "}
            <span style={{ color: "#25D366" }}>community</span>, in one app
          </h1>
          <p
            style={{
              fontSize: 28,
              color: "#505050",
              margin: 0,
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            Connect with farmers, share knowledge, scan crops, and stay updated with farmer-focused news.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          {[
            "🌐 13+ Indian languages",
            "🔬 AI Crop Scan",
            "👥 Farmer Community",
            "📰 Farm News",
          ].map((pill) => (
            <span
              key={pill}
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "1.5px solid #D0D0D0",
                color: "#202020",
                fontSize: 20,
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: 9999,
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
