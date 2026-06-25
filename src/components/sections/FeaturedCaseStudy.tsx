"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { brands, siteConfig } from "@/lib/data";

export default function FeaturedCaseStudy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const client = brands[0]; // DivyaMatrika

  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hi, I saw the ${client.name} campaign and want to discuss similar work for my brand.`
  )}`;

  return (
    <section
      id="case-study"
      style={{
        background: "var(--bg-primary)",
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Header */}
        <div ref={ref}>
          <motion.p
            className="text-eyebrow-accent"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: "1.2rem" }}
          >
            Case Study — {client.name}
          </motion.p>
          <motion.h2
            className="heading-xl"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              maxWidth: "620px",
              marginBottom: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            How we built{" "}
            <em style={{ fontWeight: 300 }}>DivyaMatrika&apos;s</em>
            <br />
            visual identity.
          </motion.h2>
        </div>

        {/* Main layout — image + details */}
        <div className="cs-main-layout">
          {/* Left — Hero image */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", overflow: "hidden" }}
            className="img-hover-container cs-hero-img"
          >
            <Image
              src={client.heroImage}
              alt={`${client.name} — Campaign Photography`}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 55%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
              }}
            >
              <p className="text-eyebrow-light" style={{ marginBottom: "0.5rem" }}>
                {client.location} · {client.category}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                  fontWeight: 400,
                  color: "var(--text-light)",
                  lineHeight: 1.1,
                }}
              >
                {client.name}
              </p>
            </div>
          </motion.div>

          {/* Right — Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "var(--bg-primary)",
              padding: "clamp(2.5rem, 5vw, 4rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "2rem",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              {[
                { label: "Client", value: client.name + " · " + client.location },
                {
                  label: "Delivered",
                  value: client.servicesDelivered.join(" · "),
                },
                { label: "What Changed", value: client.outcome },
              ].map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    marginBottom: "2rem",
                    paddingBottom: "2rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <p className="text-eyebrow-accent" style={{ marginBottom: "0.7rem" }}>
                    {row.label}
                  </p>
                  <p className="text-body">{row.value}</p>
                </div>
              ))}

              {/* Quote */}
              <div style={{ paddingTop: "0.5rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    color: "var(--text-primary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{client.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div className="accent-line" />
                  <p className="text-eyebrow-accent">{client.quoteAuthor}</p>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href={`/work/brands/${client.slug}`} className="btn-primary">
                View Full Campaign
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Start Similar Work
              </a>
            </div>
          </motion.div>
        </div>

        {/* Gallery strip — seamless */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0.5rem",
            marginTop: "0.5rem",
          }}
          className="cs-gallery"
        >
          {client.galleryImages.slice(0, 4).map((img, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
              }}
              className="img-hover-container"
            >
              <Image
                src={img}
                alt={`${client.name} campaign photography ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .cs-main-layout {
          display: grid;
          grid-template-columns: 0.55fr 0.45fr;
          gap: 0.5rem;
          min-height: 600px;
        }
        .cs-hero-img {
          min-height: 500px;
        }
        @media (max-width: 768px) {
          .cs-main-layout { grid-template-columns: 1fr !important; }
          .cs-hero-img { min-height: 65vw !important; aspect-ratio: 4/5; }
          .cs-gallery { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
