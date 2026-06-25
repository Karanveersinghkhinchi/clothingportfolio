"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { campaigns, cloudinaryPlayerUrl, siteConfig } from "@/lib/data";
import type { Metadata } from "next";

function FilmCard({ campaign, index }: { campaign: typeof campaigns[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const playerUrl = cloudinaryPlayerUrl(campaign.videoId, {
    muted: false,
    controls: true,
    autoplay: true,
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "relative",
        background: "#0a0a0a",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onClick={() => setPlaying(true)}
    >
      {/* Cover image (static) */}
      <AnimatePresence>
        {!playing && (
          <motion.div
            key="cover"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ position: "relative", aspectRatio: "9/16" }}
          >
            <Image
              src={campaign.coverPhoto}
              alt={campaign.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            {/* Gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
              }}
            />
            {/* Play button */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                border: "1.5px solid rgba(247,244,238,0.4)",
                background: "rgba(8,8,8,0.4)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s ease",
              }}
              className="play-btn"
            >
              <svg fill="rgba(247,244,238,0.9)" height="24" viewBox="0 0 24 24" width="24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            {/* Text overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "2rem 1.75rem",
              }}
            >
              <p className="label-light" style={{ marginBottom: "0.6rem" }}>
                {campaign.type}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 400,
                  color: "var(--paper-ivory)",
                  lineHeight: 1.05,
                  marginBottom: "0.5rem",
                }}
              >
                {campaign.title}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(247,244,238,0.45)", letterSpacing: "0.04em" }}>
                {campaign.client} · {campaign.location} · {campaign.year}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video player (shown after click) */}
      {playing && (
        <div style={{ position: "relative", aspectRatio: "9/16" }}>
          <iframe
            src={playerUrl}
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            title={campaign.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setPlaying(false); }}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "rgba(8,8,8,0.7)",
              border: "1px solid rgba(247,244,238,0.2)",
              color: "var(--paper-ivory)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              fontSize: "1.1rem",
            }}
          >
            ×
          </button>
        </div>
      )}
    </motion.article>
  );
}

export default function FilmsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to discuss a fashion film for my brand.")}`;

  return (
    <div style={{ background: "var(--film-black)", minHeight: "100vh" }}>
      {/* Page header */}
      <div
        style={{
          paddingTop: "clamp(7rem, 12vw, 11rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          background: "var(--film-black)",
          borderBottom: "1px solid rgba(247,244,238,0.06)",
        }}
      >
        <div className="container" ref={headerRef}>
          <motion.p
            className="label-light"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "1.25rem" }}
          >
            Fashion Films
          </motion.p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                fontWeight: 400,
                lineHeight: 0.93,
                letterSpacing: "-0.02em",
                color: "var(--paper-ivory)",
                maxWidth: "700px",
              }}
            >
              Garments deserve<br />
              <span style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>cinema.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                color: "rgba(247,244,238,0.4)",
                maxWidth: "320px",
                lineHeight: 1.75,
              }}
            >
              Every film is built around a narrative. The garment is the hero. 
              The brand is the world it lives in.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Films grid */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(5rem, 10vw, 9rem)",
        }}
      >
        {/* Men's section */}
        <div style={{ marginBottom: "5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(247,244,238,0.25)",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid rgba(247,244,238,0.06)",
              marginBottom: "2rem",
            }}
          >
            Men&apos;s Collection — DivyaMatrika · Jaipur
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "rgba(247,244,238,0.04)",
            }}
            className="films-grid-desktop"
          >
            {campaigns.filter((c) => c.tags.includes("Men's")).map((c, i) => (
              <FilmCard key={c.id} campaign={c} index={i} />
            ))}
          </div>
        </div>

        {/* Women's section */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(247,244,238,0.25)",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid rgba(247,244,238,0.06)",
              marginBottom: "2rem",
            }}
          >
            Women&apos;s Collection — Shri Radhe Boutique · Nathdwara
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1px",
              background: "rgba(247,244,238,0.04)",
              maxWidth: "900px",
            }}
            className="films-grid-womens"
          >
            {campaigns.filter((c) => c.tags.includes("Women's")).map((c, i) => (
              <FilmCard key={c.id} campaign={c} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "6rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            borderTop: "1px solid rgba(247,244,238,0.06)",
            borderBottom: "1px solid rgba(247,244,238,0.06)",
          }}
          className="films-cta-row"
        >
          <div
            style={{
              padding: "clamp(2.5rem, 5vw, 4rem)",
              borderRight: "1px solid rgba(247,244,238,0.06)",
            }}
          >
            <p className="label-light" style={{ marginBottom: "1rem" }}>Commission a Film</p>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 400,
                color: "var(--paper-ivory)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Your next collection deserves its own film.
            </p>
            <Link href="/contact" className="btn-primary">
              Discuss Your Film
            </Link>
          </div>
          <div
            style={{
              padding: "clamp(2.5rem, 5vw, 4rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                color: "rgba(247,244,238,0.4)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              We produce campaign films from concept to final cut. Moodboarding, 
              casting, location scouting, direction, cinematography, colour grade 
              — everything your brand needs to be felt, not just seen.
            </p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ width: "fit-content" }}>
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .films-grid-desktop { grid-template-columns: 1fr !important; }
          .films-grid-womens { grid-template-columns: 1fr !important; }
          .films-cta-row { grid-template-columns: 1fr !important; }
          .films-cta-row > div { border-right: none !important; }
        }
        .play-btn:hover {
          border-color: rgba(183,139,74,0.8) !important;
          background: rgba(183,139,74,0.15) !important;
        }
      `}</style>
    </div>
  );
}
