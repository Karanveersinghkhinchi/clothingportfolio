"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    title: "For Brands",
    body: "Campaigns, lookbooks, drop creatives, product storytelling, and reels designed to make your brand feel sharper, more memorable, and more premium.",
    cta: "See Brand Work",
    href: "/work?filter=brands",
    accent: "var(--accent-gold)",
  },
  {
    title: "For Wholesalers",
    body: "Catalogue-led visual systems built for volume, consistency, clean presentation, and faster selling across retailers, dealers, and WhatsApp-driven buyers.",
    cta: "See Catalogue Work",
    href: "/work?filter=wholesalers",
    accent: "var(--accent-olive)",
  },
  {
    title: "Case Studies",
    body: "Real projects where stronger visuals, better positioning, and consistent content helped businesses improve perception, content quality, and market response.",
    cta: "See Results",
    href: "/#case-study",
    accent: "var(--accent-plum)",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 16 16" width="14">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

export default function CategoryRouter() {
  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ maxWidth: "720px" }}>
          <h2 className="heading-lg">Built for three different clothing businesses.</h2>
          <p className="text-body" style={{ marginTop: "1.25rem", maxWidth: "600px" }}>
            Not every clothing client needs the same kind of content. We build different visual systems for brands, wholesalers, and retail growth.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1rem", marginTop: "2.5rem" }} className="category-grid">
          {categories.map((card, i) => (
            <motion.div
              key={card.title}
              className="glass-card"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "300px" }}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div>
                <div style={{ height: "3px", width: "48px", background: card.accent, marginBottom: "2rem", borderRadius: "2px" }} />
                <h3 className="heading-md" style={{ marginBottom: "1.25rem" }}>{card.title}</h3>
                <p className="text-body">{card.body}</p>
              </div>
              <Link href={card.href} style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", fontWeight: 600, color: "var(--ink-black)", textDecoration: "none", transition: "color 0.3s ease" }}>
                {card.cta} <ArrowIcon />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .category-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
