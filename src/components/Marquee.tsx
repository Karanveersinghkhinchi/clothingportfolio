"use client";

import { marqueeItems } from "@/lib/data";

const items = [...marqueeItems, ...marqueeItems];

export default function MarqueeStrip() {
  return (
    <div
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "1.25rem 0",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          width: "max-content",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "0.02em",
                color: "var(--text-secondary)",
                whiteSpace: "nowrap",
                paddingRight: "2rem",
              }}
            >
              {item}
            </span>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "var(--accent)",
                opacity: 0.4,
                flexShrink: 0,
                lineHeight: 1,
                paddingRight: "2rem",
              }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
