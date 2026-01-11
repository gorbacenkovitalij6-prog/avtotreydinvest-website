import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "6px",
          border: "2px solid #d4af37",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 13L7 8H17L19 13H5Z"
            stroke="#d4af37"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 13V17H19V13"
            stroke="#d4af37"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="8" cy="17" r="2" stroke="#d4af37" stroke-width="2" />
          <circle cx="16" cy="17" r="2" stroke="#d4af37" stroke-width="2" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
