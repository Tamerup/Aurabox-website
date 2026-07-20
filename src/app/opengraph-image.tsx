import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Aurabox — Feel The Luxury";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120% 100% at 50% 20%, #161310 0%, #000000 70%)",
        }}
      >
        <span
          style={{
            fontSize: 22,
            letterSpacing: 14,
            color: "#F2F2F2",
            fontFamily: "Georgia, serif",
          }}
        >
          AURABOX
        </span>
        <span
          style={{
            marginTop: 36,
            fontSize: 92,
            fontStyle: "italic",
            color: "#FFFFFF",
            fontFamily: "Georgia, serif",
          }}
        >
          Feel The Luxury.
        </span>
        <span
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#D4AF37",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          Luxury. Exactly when it matters.
        </span>
      </div>
    ),
    { ...size },
  );
}
