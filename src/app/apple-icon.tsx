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
          background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
          borderRadius: "32px",
          border: "4px solid #d4af37",
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car body outline */}
          <path
            d="M7 13H5C4.44772 13 4 13.4477 4 14V16C4 16.5523 4.44772 17 5 17H6"
            stroke="#d4af37"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M18 17H19C19.5523 17 20 16.5523 20 16V14C20 13.4477 19.5523 13 19 13H17"
            stroke="#d4af37"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M5 13L7 8H17L19 13"
            stroke="#d4af37"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M5 13H19V16C19 16.5523 18.5523 17 18 17H6C5.44772 17 5 16.5523 5 16V13Z"
            stroke="#d4af37"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Wheels */}
          <circle cx="8" cy="17" r="1.5" stroke="#d4af37" strokeWidth="1.2" fill="none" />
          <circle cx="16" cy="17" r="1.5" stroke="#d4af37" strokeWidth="1.2" fill="none" />
          {/* Window */}
          <path
            d="M8 10L9.5 8H14.5L16 10H8Z"
            stroke="#d4af37"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
