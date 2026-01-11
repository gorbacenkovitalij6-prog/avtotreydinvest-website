import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: "32px",
          border: "6px solid #d4af37",
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 13L7 8H17L19 13H5Z"
            stroke="#d4af37"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 13V17H19V13"
            stroke="#d4af37"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="8" cy="17" r="2" stroke="#d4af37" stroke-width="1.5" />
          <circle cx="16" cy="17" r="2" stroke="#d4af37" stroke-width="1.5" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
