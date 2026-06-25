"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { process } from "@/lib/data";

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      style={{
        background: "var(--bg-primary)",
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "clamp(4rem, 8vw, 10rem)",
            alignItems: "start",
          }}
          className="process-layout"
        >
          {/* Left — Sticky header */}
          <div style={{ position: "sticky", top: "8rem" }}>
            <motion.p
              className="text-eyebrow-accent"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              style={{ marginBottom: "1.5rem" }}
            >
              The Method
            </motion.p>
            <motion.h2
              className="heading-lg"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginBottom: "2rem" }}
            >
              From Concept
              <br />
              to{" "}
              <em style={{ fontWeight: 300 }}>Campaign.</em>
            </motion.h2>
            <motion.p
              className="text-body"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ marginBottom: "2.5rem" }}
            >
              Every engagement is a production. We don&apos;t just arrive on shoot day.
              We think, plan, and build a creative brief that makes the actual shoot
              ten times more efficient.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link href="/capabilities" className="btn-secondary">
                Our Full Capabilities
              </Link>
            </motion.div>
          </div>

          {/* Right — Steps with vertical timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical timeline line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "2rem",
                bottom: "2rem",
                width: "1px",
                background: "var(--border)",
              }}
            />

            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "5rem 1fr",
                  gap: "2rem",
                  paddingTop: i === 0 ? 0 : "3rem",
                  paddingBottom: i < process.length - 1 ? "3rem" : 0,
                  borderBottom:
                    i < process.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "start",
                  paddingLeft: "2rem",
                }}
              >
                {/* Step number — huge, barely visible */}
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "8rem",
                    fontWeight: 300,
                    color: "var(--accent)",
                    opacity: 0.12,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    userSelect: "none",
                  }}
                >
                  {step.step}
                </span>

                <div style={{ paddingTop: "0.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-body">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .process-layout {
            grid-template-columns: 1fr !important;
          }
          .process-layout > div:first-child {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
