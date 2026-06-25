"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { photos } from "@/lib/data";

const spreads = [
  {
    id: "spread-1",
    image: photos.editorial1,
    imageAlt: "DivyaMatrika — Heritage craft men's fashion campaign",
    eyebrow: "Campaign · 2026",
    headline: "Heritage craft.\nModern desire.",
    body: "Every garment has a story worth a film. This is how we tell it — through light, texture, movement, and the silence between frames.",
    imagePosition: "left" as const,
  },
  {
    id: "spread-2",
    image: photos.editorial2,
    imageAlt: "DivyaMatrika — Handcrafted linen editorial",
    eyebrow: "Editorial · Jaipur",
    headline: "Pure linen.\nPure cinema.",
    body: "We don't shoot clothing. We reveal the intention behind each piece — the craft, the culture, and the weeks that went into its making.",
    imagePosition: "right" as const,
  },
  {
    id: "spread-3",
    image: photos.editorial4,
    imageAlt: "Shri Radhe Boutique — Women's ethnic wear campaign",
    eyebrow: "Campaign · Nathdwara",
    headline: "Devotion\nin every drape.",
    body: "Indian ethnic wear at its finest — shot with the reverence and visual intelligence it has always deserved, but rarely received.",
    imagePosition: "left" as const,
  },
];

function EditorialRow({
  spread,
  index,
}: {
  spread: (typeof spreads)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isRight = spread.imagePosition === "right";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "82vh",
        overflow: "hidden",
        borderBottom: "1px solid var(--border)",
      }}
      className={`editorial-row editorial-row-${index}`}
    >
      {/* Image side */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          order: isRight ? 2 : 1,
          minHeight: "60vmin",
        }}
        className="editorial-img-side img-hover-container"
      >
        <Image
          src={spread.image}
          alt={spread.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
          priority={index === 0}
        />
      </div>

      {/* Text side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(3rem, 7vw, 8rem)",
          background:
            index % 2 === 0 ? "var(--bg-primary)" : "var(--bg-secondary)",
          order: isRight ? 1 : 2,
        }}
      >
        <p
          className="text-eyebrow-accent"
          style={{ marginBottom: "2rem" }}
        >
          {spread.eyebrow}
        </p>

        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 400,
            lineHeight: 0.97,
            letterSpacing: "-0.015em",
            color: "var(--text-primary)",
            marginBottom: "2.5rem",
            whiteSpace: "pre-line",
          }}
        >
          {spread.headline}
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
            lineHeight: 1.9,
            color: "var(--text-secondary)",
            maxWidth: "360px",
            marginBottom: "3rem",
          }}
        >
          {spread.body}
        </p>

        <div style={{ marginBottom: "2rem" }}>
          <div className="accent-line" />
        </div>

        <Link
          href="/campaigns"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            position: "relative",
            maxWidth: "fit-content",
          }}
          className="link-underline"
        >
          View Campaign
          <svg fill="none" height="10" viewBox="0 0 16 16" width="10">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function EditorialSpread() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ overflow: "hidden", background: "var(--bg-primary)" }}>
      {/* Section header */}
      <div
        ref={ref}
        className="container"
        style={{
          paddingTop: "clamp(5rem, 10vw, 9rem)",
          paddingBottom: "clamp(3rem, 5vw, 5rem)",
        }}
      >
        <motion.p
          className="text-eyebrow-accent"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "1.2rem" }}
        >
          Editorial Photography
        </motion.p>
        <motion.h2
          className="heading-xl"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: "600px" }}
        >
          Photography that earns{" "}
          <em style={{ fontWeight: 300 }}>placement.</em>
        </motion.h2>
      </div>

      {/* Editorial spread rows */}
      {spreads.map((spread, i) => (
        <EditorialRow key={spread.id} spread={spread} index={i} />
      ))}

      {/* Hero full-bleed closing image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(55vh, 70vw, 88vh)",
          overflow: "hidden",
        }}
      >
        <Image
          src={photos.hero}
          alt="3DOTCREATIVES — Fashion campaign photography"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />

        {/* Grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            backgroundSize: "256px 256px",
            opacity: 0.28,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.18) 45%, transparent 70%)",
            zIndex: 2,
          }}
        />

        {/* Text overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(2.5rem, 6vw, 5rem)",
            left: "var(--container-padding)",
            right: "var(--container-padding)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            zIndex: 3,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              fontWeight: 300,
              color: "var(--text-light)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              maxWidth: "500px",
            }}
          >
            Not content.
            <br />
            <em>Cinema.</em>
          </p>
          <Link href="/capabilities" className="btn-ghost">
            Our Capabilities
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .editorial-row {
            grid-template-columns: 1fr !important;
          }
          .editorial-img-side {
            order: 1 !important;
            min-height: 55vmax !important;
          }
          .editorial-row > div:last-child {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
