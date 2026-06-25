"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { photos, siteConfig } from "@/lib/data";

const principles = [
  {
    number: "01",
    title: "Movement",
    body: "Clothing lives in motion. Every campaign we direct considers how a garment moves before we consider how it looks. The camera follows the fabric, not the other way around.",
    image: photos.editorial1,
  },
  {
    number: "02",
    title: "Texture",
    body: "Pure linen. Handwoven cotton. Silk. We light for texture — always. A flat image erases the craft. A textured image makes the hand want to touch the screen.",
    image: photos.editorial2,
  },
  {
    number: "03",
    title: "Emotion",
    body: "Every garment carries an intention — heritage, desire, simplicity, power. Our campaigns find that intention and make it visible in a single frame.",
    image: photos.editorial3,
  },
  {
    number: "04",
    title: "Visual Commerce",
    body: "Beauty must convert. We think about the viewer's next action in every shot. Does this make them want it? Does this make it easy to buy? Both questions matter equally.",
    image: photos.editorial4,
  },
];

export default function VisualLanguagePage() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to discuss visual direction for my brand.")}`;

  return (
    <div style={{ background: "var(--paper-ivory)" }}>
      {/* Header */}
      <div
        style={{
          paddingTop: "clamp(7rem, 12vw, 11rem)",
          paddingBottom: "clamp(4rem, 7vw, 6rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" ref={headerRef}>
          <motion.p
            className="label"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "1.25rem" }}
          >
            Visual Language
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 400,
              lineHeight: 0.93,
              letterSpacing: "-0.02em",
              color: "var(--ink-black)",
              maxWidth: "780px",
              marginBottom: "2rem",
            }}
          >
            What makes<br />3DOTCREATIVES<br />
            <span style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>different.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              color: "var(--text-secondary)",
              maxWidth: "520px",
              lineHeight: 1.8,
            }}
          >
            Luxury brands hire taste, not just technical ability. This page explains 
            the visual intelligence we bring to every clothing campaign we produce.
          </motion.p>
        </div>
      </div>

      {/* Principles */}
      {principles.map((principle, i) => {
        const ref = useRef(null);
        const pInView = useInView(ref, { once: true, margin: "-60px" });
        const isRight = i % 2 !== 0;

        return (
          <motion.div
            key={principle.number}
            ref={ref}
            initial={{ opacity: 0, y: 48 }}
            animate={pInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderBottom: "1px solid var(--border-light)",
              minHeight: "clamp(400px, 55vw, 650px)",
              overflow: "hidden",
            }}
            className="principle-row"
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                order: isRight ? 2 : 1,
                overflow: "hidden",
              }}
              className="img-hover-container"
            >
              <Image
                src={principle.image}
                alt={`${principle.title} — visual principle`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
              {/* Principle number overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "2rem",
                  fontFamily: "var(--font-heading)",
                  fontSize: "6rem",
                  fontWeight: 400,
                  color: "rgba(247,244,238,0.08)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                }}
              >
                {principle.number}
              </div>
            </div>

            {/* Text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "clamp(3rem, 6vw, 7rem)",
                background: i % 2 === 0 ? "var(--paper-ivory)" : "var(--bg-secondary)",
                order: isRight ? 1 : 2,
              }}
            >
              <p className="label" style={{ marginBottom: "1rem" }}>Principle {principle.number}</p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 400,
                  lineHeight: 1.0,
                  color: "var(--ink-black)",
                  marginBottom: "2rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {principle.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                  maxWidth: "400px",
                }}
              >
                {principle.body}
              </p>
            </div>
          </motion.div>
        );
      })}

      {/* Closing CTA */}
      <div
        style={{
          padding: "clamp(5rem, 10vw, 9rem) 0",
          textAlign: "center",
          background: "var(--film-black)",
        }}
      >
        <div className="container">
          <p className="label-light" style={{ marginBottom: "1.5rem" }}>Bring This to Your Brand</p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 400,
              color: "var(--paper-ivory)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
              maxWidth: "500px",
              margin: "0 auto 2.5rem",
            }}
          >
            Taste is the<br />
            <span style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>difference.</span>
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Start a Campaign</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Direct</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .principle-row { grid-template-columns: 1fr !important; }
          .principle-row > div { order: initial !important; }
        }
      `}</style>
    </div>
  );
}
