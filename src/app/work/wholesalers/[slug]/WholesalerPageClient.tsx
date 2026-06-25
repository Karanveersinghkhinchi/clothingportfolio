"use client";

import { motion } from "framer-motion";

interface Props {
  name: string;
  category: string;
  location: string;
}

export default function WholesalerPageClient({ name, category, location }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "clamp(5rem, 9vw, 8rem)",
        left: "var(--container-padding)",
      }}
    >
      <motion.p
        className="text-eyebrow-light"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: "0.75rem", color: "rgba(248,247,244,0.45)" }}
      >
        {category} · {location}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
          fontWeight: 300,
          color: "var(--text-light)",
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          maxWidth: "700px",
        }}
      >
        {name}
      </motion.h1>
    </div>
  );
}
