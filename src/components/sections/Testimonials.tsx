"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      style={{
        background: "var(--film-black)",
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Header */}
        <div ref={ref} style={{ marginBottom: "clamp(3.5rem, 6vw, 6rem)" }}>
          <motion.p
            className="text-eyebrow-light"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: "1.25rem", color: "rgba(248,247,244,0.35)" }}
          >
            Client Voices
          </motion.p>
          <motion.h2
            className="heading-xl-light"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: "480px" }}
          >
            Brands that trusted{" "}
            <em style={{ fontWeight: 300, opacity: 0.55 }}>the process.</em>
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid var(--border-dark)",
          }}
          className="testimonials-grid"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                padding: "clamp(2.5rem, 5vw, 4rem)",
                borderRight:
                  i < testimonials.length - 1
                    ? "1px solid var(--border-dark)"
                    : "none",
                borderBottom: "1px solid var(--border-dark)",
                display: "flex",
                flexDirection: "column",
                gap: "2.5rem",
              }}
            >
              {/* Opening quote glyph */}
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "6rem",
                  fontWeight: 300,
                  color: "var(--accent)",
                  opacity: 0.15,
                  lineHeight: 0.7,
                  userSelect: "none",
                }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "rgba(248,247,244,0.82)",
                  flex: 1,
                }}
              >
                {testimonial.quote}
              </p>

              {/* Attribution */}
              <div>
                <div className="accent-line" style={{ marginBottom: "1rem" }} />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-light)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {testimonial.author}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(248,247,244,0.3)",
                  }}
                >
                  {testimonial.location} · {testimonial.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
          className="stats-row"
        >
          {[
            { n: "5", label: "Campaign Films" },
            { n: "3", label: "Brand Partners" },
            { n: "50+", label: "Visual Assets" },
            { n: "3", label: "Cities" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.1 }}
              style={{
                padding: "clamp(2rem, 4vw, 3rem)",
                borderRight:
                  i < 3 ? "1px solid var(--border-dark)" : "none",
                borderTop: "1px solid var(--border-dark)",
                borderBottom: "1px solid var(--border-dark)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                  fontWeight: 300,
                  color: "var(--text-light)",
                  lineHeight: 1,
                  marginBottom: "0.6rem",
                }}
              >
                {stat.n}
              </p>
              <p className="text-eyebrow-light" style={{ color: "rgba(248,247,244,0.3)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonials-grid > div {
            border-right: none !important;
          }
          .stats-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-row > div:nth-child(even) {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
