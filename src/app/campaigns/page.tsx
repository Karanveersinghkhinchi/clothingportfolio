"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { campaigns, cloudinaryPlayerUrl, siteConfig, photos } from "@/lib/data";

function CampaignFeature({ campaign, index }: { campaign: typeof campaigns[0]; index: number }) {
  const [showVideo, setShowVideo] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const playerUrl = cloudinaryPlayerUrl(campaign.videoId, { muted: false, controls: true, autoplay: true });
  const isReverse = index % 2 !== 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: isReverse ? "0.45fr 0.55fr" : "0.55fr 0.45fr",
        minHeight: "clamp(500px, 70vh, 800px)",
        borderBottom: "1px solid var(--border-light)",
        overflow: "hidden",
      }}
      className="campaign-feature"
    >
      {/* Visual side */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          order: isReverse ? 2 : 1,
          cursor: "pointer",
        }}
        onClick={() => setShowVideo(!showVideo)}
      >
        {showVideo ? (
          <iframe
            src={playerUrl}
            allow="autoplay; fullscreen"
            allowFullScreen
            title={campaign.title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        ) : (
          <>
            <Image
              src={campaign.coverPhoto}
              alt={campaign.title}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center 20%", transition: "transform 0.9s ease" }}
              className="campaign-img"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(8,8,8,0.2) 0%, transparent 60%)",
              }}
            />
            {/* Play button */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "1.5px solid rgba(247,244,238,0.5)",
                background: "rgba(8,8,8,0.3)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s ease",
              }}
            >
              <svg fill="var(--paper-ivory)" height="28" viewBox="0 0 24 24" width="28">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </>
        )}
      </div>

      {/* Text side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(2.5rem, 5vw, 5rem)",
          background: index % 2 === 0 ? "var(--paper-ivory)" : "var(--bg-secondary)",
          order: isReverse ? 1 : 2,
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
            <p className="label" style={{ marginBottom: 0 }}>{campaign.type}</p>
            <p style={{
              fontFamily: "var(--font-heading)",
              fontSize: "4rem",
              fontWeight: 400,
              color: "var(--accent-gold)",
              opacity: 0.2,
              lineHeight: 1,
            }}>
              {String(index + 1).padStart(2, "0")}
            </p>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              color: "var(--ink-black)",
              marginBottom: "1rem",
            }}
          >
            {campaign.title}
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-tertiary)",
            marginBottom: "1.5rem",
          }}>
            {campaign.subtitle}
          </p>

          <p className="text-body" style={{ maxWidth: "380px", marginBottom: "2rem" }}>
            {campaign.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2.5rem" }}>
            {campaign.services.map((s) => (
              <span
                key={s}
                style={{
                  padding: "0.3rem 0.8rem",
                  border: "1px solid var(--border-medium)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-tertiary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ width: "32px", height: "1px", background: "var(--accent-gold)", marginBottom: "0.5rem" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--text-tertiary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {campaign.client} · {campaign.location} · {campaign.year}
          </p>
          <button
            onClick={() => setShowVideo(!showVideo)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-black)",
              padding: 0,
              marginTop: "0.5rem",
            }}
          >
            {showVideo ? "Hide Film" : "Watch Film"}
            <svg fill="none" height="12" viewBox="0 0 16 16" width="12">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function CampaignsPage() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to discuss a campaign for my clothing brand.")}`;

  return (
    <div style={{ background: "var(--paper-ivory)" }}>
      {/* Header */}
      <div
        style={{
          paddingTop: "clamp(7rem, 12vw, 11rem)",
          paddingBottom: "clamp(4rem, 7vw, 6rem)",
          background: "var(--film-black)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background editorial photo */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
          <Image src={photos.editorial1} alt="" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.95) 40%, rgba(8,8,8,0.6) 100%)" }} />
        <div className="container" ref={headerRef} style={{ position: "relative", zIndex: 1 }}>
          <motion.p
            className="label-light"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "1.25rem" }}
          >
            Campaign Universe
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
              color: "var(--paper-ivory)",
              maxWidth: "700px",
              marginBottom: "2rem",
            }}
          >
            Not shoots.<br />
            <span style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>Campaigns.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
              color: "rgba(247,244,238,0.45)",
              maxWidth: "480px",
              lineHeight: 1.75,
            }}
          >
            Each collection becomes a world. A narrative. A film and an editorial 
            that makes the garment feel like something worth wanting.
          </motion.p>
        </div>
      </div>

      {/* Campaign features */}
      <div>
        {campaigns.map((campaign, i) => (
          <CampaignFeature key={campaign.id} campaign={campaign} index={i} />
        ))}
      </div>

      {/* Commission CTA */}
      <div
        style={{
          background: "var(--film-black)",
          padding: "clamp(5rem, 10vw, 9rem) 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p className="label-light" style={{ marginBottom: "1.5rem" }}>Commission a Campaign</p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 400,
              color: "var(--paper-ivory)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Your collection is next.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Start a Campaign</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Direct</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .campaign-feature { grid-template-columns: 1fr !important; }
          .campaign-feature > div { order: initial !important; }
        }
        .campaign-img:hover { transform: scale(1.03); }
      `}</style>
    </div>
  );
}
