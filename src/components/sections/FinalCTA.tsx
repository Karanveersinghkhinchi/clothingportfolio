"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/data";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hi 3DOTCREATIVES, I saw your portfolio and want to discuss a campaign for my clothing brand."
  )}`;

  return (
    <section
      style={{
        background: "var(--film-black)",
        paddingTop: "clamp(7rem, 14vw, 13rem)",
        paddingBottom: "clamp(7rem, 14vw, 13rem)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle horizontal rule top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "var(--border-dark)",
        }}
      />

      <div
        ref={ref}
        className="container"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <motion.p
          className="text-eyebrow-light"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "2rem", color: "rgba(248,247,244,0.3)" }}
        >
          Begin a Project
        </motion.p>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3.5rem, 9vw, 9.5rem)",
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: "-0.025em",
            color: "var(--text-light)",
            marginBottom: "2rem",
            maxWidth: "760px",
            margin: "0 auto 2rem",
          }}
        >
          Your collection
          <br />
          <em style={{ opacity: 0.45 }}>deserves cinema.</em>
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
            color: "rgba(248,247,244,0.38)",
            maxWidth: "400px",
            margin: "0 auto 4rem",
            lineHeight: 1.85,
          }}
        >
          Tell us about your brand. We&apos;ll respond within 24 hours
          with a tailored creative approach.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.38 }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Link href="/contact" className="btn-primary">
            Begin a Project
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

          {/* WhatsApp as text link */}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
            style={{ color: "rgba(248,247,244,0.5)" }}
          >
            WhatsApp →
          </a>
        </motion.div>

        {/* Studio credits bottom */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.62rem",
            color: "rgba(248,247,244,0.15)",
            marginTop: "5rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Jaipur  ·  Rajasthan  ·  India
        </motion.p>
      </div>
    </section>
  );
}
