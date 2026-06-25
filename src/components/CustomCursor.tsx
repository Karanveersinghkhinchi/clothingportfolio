"use client";

import { useEffect, useState, useRef } from "react";

type CursorMode = "default" | "link" | "image";

export default function CustomCursor() {
  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });
  const [renderPos, setRenderPos] = useState({ x: -100, y: -100 });
  const [renderTrail, setRenderTrail] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [hidden, setHidden] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Detect touch device — hide cursor on touch
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const moveMouse = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animateTrail = () => {
      // Lerp the trail toward cursor with 0.1 lag (cinematic)
      trailRef.current.x += (posRef.current.x - trailRef.current.x) * 0.1;
      trailRef.current.y += (posRef.current.y - trailRef.current.y) * 0.1;
      setRenderPos({ ...posRef.current });
      setRenderTrail({ ...trailRef.current });
      rafRef.current = requestAnimationFrame(animateTrail);
    };

    const detectMode = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isImg =
        target.tagName === "IMG" ||
        target.tagName === "VIDEO" ||
        target.closest(".gallery-item-link") !== null ||
        target.closest(".img-hover-container") !== null ||
        target.closest(".cs-hero-img") !== null ||
        target.closest(".editorial-img-side") !== null;

      const isLink =
        !isImg &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null);

      if (isImg) setMode("image");
      else if (isLink) setMode("link");
      else setMode("default");
    };

    const handleLeave = () => setHidden(true);
    const handleEnter = () => setHidden(false);

    window.addEventListener("mousemove", moveMouse, { passive: true });
    document.addEventListener("mousemove", detectMode, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    rafRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mousemove", detectMode);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouch) return null;

  // Dot size: normal = 8px, link = thin bar (20px wide, 2px tall), image = hidden (ring shows text)
  const dotSize = mode === "link" ? { w: 20, h: 2 } : { w: 8, h: 8 };
  const dotRadius = mode === "link" ? 0 : "50%";

  // Ring size: default = 40px, image = 80px, link = 40px
  const ringSize = mode === "image" ? 80 : 40;

  return (
    <>
      {/* Small dot / bar — follows cursor exactly */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          width: `${dotSize.w}px`,
          height: `${dotSize.h}px`,
          borderRadius: dotRadius as string,
          background:
            mode === "image"
              ? "transparent"
              : mode === "link"
              ? "var(--accent)"
              : "var(--text-primary)",
          transform: `translate(${renderPos.x - dotSize.w / 2}px, ${renderPos.y - dotSize.h / 2}px)`,
          transition:
            "background 0.3s ease, width 0.35s cubic-bezier(0.22, 1, 0.36, 1), height 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.35s ease",
          opacity: hidden ? 0 : 1,
          mixBlendMode: mode === "link" ? "normal" : "difference",
        }}
      />

      {/* Large ring — lags behind with cinematic lerp */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99998,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          borderRadius: "50%",
          border: `1px solid ${
            mode === "image"
              ? "rgba(198,169,122,0.9)"
              : mode === "link"
              ? "var(--accent)"
              : "rgba(16,16,16,0.35)"
          }`,
          background:
            mode === "image" ? "rgba(8,8,8,0.6)" : "transparent",
          transform: `translate(${renderTrail.x - ringSize / 2}px, ${renderTrail.y - ringSize / 2}px)`,
          transition:
            "width 0.5s cubic-bezier(0.22, 1, 0.36, 1), height 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease, background 0.4s ease",
          opacity: hidden ? 0 : mode === "image" ? 1 : 0.85,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: mode === "image" ? "blur(2px)" : "none",
        }}
      >
        {/* VIEW label — only visible on image hover */}
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.55rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(198,169,122,0.95)",
            opacity: mode === "image" ? 1 : 0,
            transition: "opacity 0.3s ease",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          VIEW
        </span>
      </div>

      <style jsx global>{`
        * { cursor: none !important; }
        @media (hover: none) {
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  );
}
