"use client";

import { motion } from "framer-motion";

const proofMetrics = [
  ["50+", "Clothing shoots delivered"],
  ["10+", "Catalogue sets produced"],
  ["5+", "Brand campaigns created"],
  ["3", "Retail content systems executed"],
];

export default function ProofStrip() {
  return (
    <section style={{ background: "var(--ink-black)", padding: "clamp(3rem, 6vw, 5rem) 0", color: "var(--paper-ivory)" }}>
      <div className="container">
        <div style={{ display: "grid", gap: "2.5rem", alignItems: "center" }} className="proof-layout">
          <h2 className="heading-lg" style={{ color: "var(--paper-ivory)" }}>
            Not just better-looking content. Better commercial clarity.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {proofMetrics.map(([number, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1, color: "var(--warm-sand)" }}>
                  {number}
                </p>
                <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.55)" }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <p style={{ marginTop: "2rem", maxWidth: "700px", fontSize: "0.88rem", fontWeight: 500, lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>
          Built for brands, manufacturers, wholesalers, boutiques, and stores that need visuals with business intent.
        </p>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .proof-layout { grid-template-columns: 0.95fr 1.05fr !important; }
        }
      `}</style>
    </section>
  );
}
