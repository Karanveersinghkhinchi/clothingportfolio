"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/data";

const capabilities = [
  {
    category: "Film Production",
    items: [
      "Campaign Film Direction",
      "Fashion Film Cinematography",
      "Creative Direction",
      "Concept Development",
      "Moodboard & Visual Brief",
      "Colour Grade & Post Production",
      "Music & Sound Design",
    ],
  },
  {
    category: "Photography",
    items: [
      "Editorial Campaign Photography",
      "Catalogue Shoot Systems",
      "Model Direction",
      "Lifestyle & Campaign Stills",
      "Detail & Texture Photography",
      "Look Direction & Styling",
      "Retouching & Colour Correction",
    ],
  },
  {
    category: "Creative Direction",
    items: [
      "Visual Brand Identity",
      "Collection Moodboarding",
      "Casting & Model Selection",
      "Location Scouting",
      "Prop & Set Styling",
      "Fashion Styling Coordination",
      "Campaign Concept Creation",
    ],
  },
  {
    category: "Content Systems",
    items: [
      "Social Media Content Systems",
      "Instagram Reel Production",
      "WhatsApp Catalogue Systems",
      "Buyer Deck Design",
      "Lookbook Design",
      "Website Imagery",
      "Format-Ready Asset Delivery",
    ],
  },
];

function CapabilityCard({ cap, index }: { cap: typeof capabilities[0]; index: number }) {
  const ref = useRef(null);
  const capInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={capInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: "clamp(2.5rem, 5vw, 4.5rem)",
        borderRight: index % 2 === 0 ? "1px solid var(--border-dark)" : "none",
        borderBottom: index < capabilities.length - 2 ? "1px solid var(--border-dark)" : "none",
      }}
    >
      <p className="text-eyebrow-light" style={{ marginBottom: "2rem", color: "rgba(248,247,244,0.35)" }}>{cap.category}</p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {cap.items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid rgba(248,247,244,0.04)",
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
              color: "rgba(248,247,244,0.6)",
              fontWeight: 400,
            }}
          >
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function CapabilitiesPage() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to discuss a production project for my clothing brand.")}`;

  return (
    <div style={{ background: "var(--film-black)", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          paddingTop: "clamp(7rem, 12vw, 11rem)",
          paddingBottom: "clamp(5rem, 9vw, 8rem)",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div className="container" ref={headerRef}>
          <motion.p
            className="text-eyebrow-light"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "1.25rem", color: "rgba(248,247,244,0.35)" }}
          >
            Production Capabilities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 300,
              lineHeight: 0.93,
              letterSpacing: "-0.025em",
              color: "var(--text-light)",
              maxWidth: "760px",
              marginBottom: "2.5rem",
            }}
          >
            Full production.<br />
            <em style={{ fontWeight: 300, opacity: 0.5 }}>
              One studio.
            </em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
              color: "rgba(248,247,244,0.38)",
              maxWidth: "520px",
              lineHeight: 1.85,
            }}
          >
            Concept to delivery. Creative direction to final cut. We handle the
            entire production pipeline so your collection is presented the way
            it deserves to be.
          </motion.p>
        </div>
      </div>

      {/* Capabilities grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderBottom: "1px solid var(--border-dark)",
        }}
        className="cap-grid"
      >
        {capabilities.map((cap, i) => (
          <CapabilityCard key={cap.category} cap={cap} index={i} />
        ))}
      </div>

      {/* What's included callout */}
      <div
        className="container"
        style={{
          padding: "clamp(4rem, 8vw, 7rem) var(--container-padding)",
          borderBottom: "1px solid rgba(247,244,238,0.06)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(3rem, 6vw, 8rem)",
            alignItems: "center",
          }}
          className="included-grid"
        >
          <div>
            <p className="label-light" style={{ marginBottom: "1.25rem" }}>Every Engagement Includes</p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--paper-ivory)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                marginBottom: "1.5rem",
              }}
            >
              The thinking before<br />
              the <span style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>shooting.</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                color: "rgba(247,244,238,0.4)",
                lineHeight: 1.8,
              }}
            >
              We don&apos;t arrive on shoot day with a blank slate. Every project begins 
              with a proper creative brief — moodboard, visual direction, talent plan, 
              and a specific idea about what we&apos;re making and why.
            </p>
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              "Creative Brief & Moodboard",
              "Visual Direction Document",
              "Shoot Day Preparation",
              "On-Site Direction",
              "Post Production & Delivery",
              "Format-Ready Asset Pack",
            ].map((item, i) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  padding: "1.25rem 0",
                  borderBottom: i < 5 ? "1px solid rgba(247,244,238,0.06)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "var(--accent)",
                    opacity: 0.4,
                    minWidth: "2rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.88rem, 1vw, 0.95rem)",
                    color: "rgba(248,247,244,0.55)",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          padding: "clamp(5rem, 10vw, 9rem) 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p className="text-eyebrow-light" style={{ marginBottom: "1.5rem", color: "rgba(248,247,244,0.35)" }}>Start Production</p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "var(--text-light)",
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              marginBottom: "2.5rem",
              maxWidth: "500px",
              margin: "0 auto 2.5rem",
            }}
          >
            Ready to produce<br />
            <em style={{ fontWeight: 300, opacity: 0.45 }}>something real?</em>
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Discuss Your Project</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Direct</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .cap-grid { grid-template-columns: 1fr !important; }
          .cap-grid > div { border-right: none !important; border-bottom: 1px solid rgba(247,244,238,0.06) !important; }
          .included-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
