"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/lib/data";
import { useState } from "react";

export default function ServicesPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div style={{ paddingTop: "8rem" }}>
      {/* Hero */}
      <section className="container" style={{ marginBottom: "4rem" }}>
        <ScrollReveal>
          <p className="label" style={{ marginBottom: "1rem" }}>What We Offer</p>
          <h1 className="heading-xl" style={{ marginBottom: "1rem", maxWidth: "800px" }}>
            Creative systems for clothing brands and fashion sellers
          </h1>
          <p className="text-body" style={{ maxWidth: "600px" }}>
            Every service is designed around one principle: helping clothing businesses look premium, get discovered, and sell more effectively.
          </p>
        </ScrollReveal>
      </section>

      {/* Services Grid */}
      <section className="container section-padding" style={{ paddingTop: 0 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.05}>
              <motion.div
                onHoverStart={() => setHoveredIdx(i)}
                onHoverEnd={() => setHoveredIdx(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: "2rem",
                  alignItems: "center",
                  padding: "2rem 2.5rem",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border-light)",
                  background: hoveredIdx === i ? "rgba(196,162,101,0.03)" : "transparent",
                  borderColor: hoveredIdx === i ? "var(--accent-gold-light)" : "var(--border-light)",
                  cursor: "pointer",
                  transition: "all 0.4s var(--ease-out-expo)",
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color:
                      hoveredIdx === i
                        ? "var(--accent-gold)"
                        : "var(--text-tertiary)",
                    transition: "color 0.3s ease",
                    width: "40px",
                  }}
                >
                  0{i + 1}
                </span>

                {/* Content */}
                <div>
                  <h3
                    className="heading-sm"
                    style={{
                      marginBottom: "0.3rem",
                      color:
                        hoveredIdx === i
                          ? "var(--accent-gold)"
                          : "var(--text-primary)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      maxWidth: "600px",
                    }}
                  >
                    {hoveredIdx === i ? service.description : service.shortDesc}
                  </p>
                </div>

                {/* Icon */}
                <motion.span
                  animate={{ scale: hoveredIdx === i ? 1.3 : 1, rotate: hoveredIdx === i ? 10 : 0 }}
                  style={{ fontSize: "2rem" }}
                >
                  {service.icon}
                </motion.span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: auto 1fr auto"] {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--bg-dark)",
          padding: "var(--section-padding) 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text-light)",
                marginBottom: "1rem",
              }}
            >
              Ready to elevate your clothing brand?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
              Let us build a visual system that makes your fashion business stand out and sell better.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ background: "var(--accent-gold)" }}>
                Start Your Project
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener"
                className="btn-whatsapp"
              >
                Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
