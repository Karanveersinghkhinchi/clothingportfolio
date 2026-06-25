"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cloudinaryVideos, cloudinaryPlayerUrl } from "@/lib/data";

const heroVideoUrl = cloudinaryPlayerUrl(cloudinaryVideos.hero, {
  autoplay: true,
  loop: true,
  muted: true,
  controls: false,
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "600px",
        overflow: "hidden",
        background: "#080808",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* ── Cinematic Video Background ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <iframe
          src={heroVideoUrl}
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          title="3DOTCREATIVES — Fashion Production Studio"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            pointerEvents: "none",
            transform: "scale(1.08)",
            transformOrigin: "center center",
          }}
        />
      </motion.div>

      {/* ── Gradient overlays ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.5) 0%, transparent 30%, transparent 50%, rgba(8,8,8,0.7) 80%, rgba(8,8,8,0.97) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── Grain overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
          opacity: 0.3,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* ── Editorial Text Overlay ── */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 3,
          paddingBottom: "clamp(3rem, 7vw, 6rem)",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-eyebrow-light"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "1.5rem", color: "rgba(248,247,244,0.4)" }}
        >
          Fashion Production Studio&nbsp;&nbsp;·&nbsp;&nbsp;Est. 2026
        </motion.p>

        {/* Main headline */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3.5rem, 9vw, 10rem)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.025em",
              color: "var(--text-light)",
              marginBottom: "2rem",
            }}
          >
            We Create Desire
            <br />
            <em style={{ fontWeight: 300, opacity: 0.6 }}>Before Purchase.</em>
          </motion.h1>
        </div>

        {/* Sub copy + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              color: "rgba(248,247,244,0.45)",
              maxWidth: "380px",
              lineHeight: 1.8,
              fontWeight: 400,
            }}
          >
            Campaign films. Editorial photography. Visual commerce systems
            for clothing brands that want to be felt, not just seen.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/films" className="btn-primary">
              Watch Our Films
              <svg fill="none" height="12" viewBox="0 0 16 16" width="12">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                />
              </svg>
            </Link>
            <Link href="/work" className="btn-ghost">
              Selected Work
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator — right side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="hero-scroll-indicator"
          style={{
            position: "absolute",
            right: "var(--container-padding)",
            bottom: "clamp(3rem, 7vw, 6rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "60px",
              background:
                "linear-gradient(to bottom, transparent, rgba(198,169,122,0.7), transparent)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(248,247,244,0.28)",
              writingMode: "vertical-rl",
              marginTop: "0.25rem",
            }}
          >
            Scroll
          </span>
        </motion.div>
      </div>

      {/* Bottom film-credit bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          borderTop: "1px solid rgba(248,247,244,0.06)",
          padding: "0.75rem var(--container-padding)",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          overflowX: "auto",
        }}
      >
        {["Campaign Films", "Editorial Photography", "Creative Direction", "Visual Commerce"].map(
          (item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(248,247,244,0.2)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
          )
        )}
      </motion.div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .hero-scroll-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
}
