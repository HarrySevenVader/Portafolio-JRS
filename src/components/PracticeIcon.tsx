import type { Practice } from "../data/portfolio";

export function PracticeIcon({ type }: { type: Practice["icon"] }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {type === "web" && (
        <>
          <rect x="3" y="5" width="26" height="22" rx="2" />
          <path d="M3 11h26M11 16l-4 4 4 4m10-8 4 4-4 4m-3-9-4 10" />
          <path d="M7 8h.01M10 8h.01M13 8h.01" />
        </>
      )}
      {type === "mobile" && (
        <>
          <rect x="8" y="2" width="16" height="28" rx="3" />
          <path d="M8 7h16M8 24h16M14 5h4" />
          <circle cx="16" cy="27" r=".6" />
        </>
      )}
      {type === "data" && (
        <>
          <ellipse cx="16" cy="7" rx="11" ry="4" />
          <path d="M5 7v18c0 2.2 4.9 4 11 4s11-1.8 11-4V7M5 13c0 2.2 4.9 4 11 4s11-1.8 11-4M5 19c0 2.2 4.9 4 11 4s11-1.8 11-4" />
        </>
      )}
    </svg>
  );
}
