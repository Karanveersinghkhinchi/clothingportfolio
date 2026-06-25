"use client";

import { motion } from "framer-motion";

const deliverables = [
  ["01", "Campaign Shoots", "Built for launches, drops, seasonal edits, and brand storytelling."],
  ["02", "Catalogue Systems", "Front, back, detail, variant, model, mannequin, and clean layout-ready outputs."],
  ["03", "Product Storytelling", "Visuals that make garments feel more desirable, wearable, and worth remembering."],
  ["04", "Reels & Social Assets", "Short-form content designed for attention, recall, and repeat viewing."],
  ["05", "Store Growth Content", "Content systems for boutiques and local stores that need stronger perception and more consistency."],
  ["06", "Case Study Presentation", "Before-after thinking, content direction, and business-facing storytelling that proves impact."],
];

export default function Deliverables() {
  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ maxWidth: "600px" }}>
          <h2 className="heading-lg">More than product shoots.</h2>
        </div>

        <div style={{ display: "grid", gap: "0.75rem", marginTop: "2.5rem" }} className="deliverables-grid">
          {deliverables.map(([number, title, body], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              style={{
                padding: "1.5rem",
                border: "1px solid var(--border-light)",
                background: "rgba(255,255,255,0.35)",
                borderRadius: "var(--radius-md)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default",
              }}
              whileHover={{ y: -3, borderColor: "rgba(183,139,74,0.3)" }}
            >
              <p className="label" style={{ marginBottom: "1rem" }}>{number}</p>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink-black)", marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "var(--text-secondary)" }}>{body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 640px) {
          .deliverables-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .deliverables-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
