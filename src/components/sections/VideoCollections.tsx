"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { campaigns, cloudinaryPlayerUrl } from "@/lib/data";

/* ── Single campaign film card ── */
function CampaignCard({
  campaign,
  index,
  featured = false,
}: {
  campaign: (typeof campaigns)[0];
  index: number;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, scale: 1.03 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 1.2,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        background: "var(--film-deep)",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Link href="/campaigns" style={{ display: "block", textDecoration: "none" }}>
        {/* Cover image */}
        <div
          style={{
            position: "relative",
            aspectRatio: featured ? "9/14" : "9/14",
            overflow: "hidden",
          }}
        >
          <Image
            src={campaign.coverPhoto}
            alt={campaign.title}
            fill
            sizes={featured ? "50vw" : "(max-width: 768px) 100vw, 25vw"}
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: isHovered ? "scale(1.04)" : "scale(1)",
            }}
          />

          {/* Grain overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
              backgroundSize: "256px 256px",
              opacity: 0.25,
              mixBlendMode: "overlay",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Bottom gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 45%, transparent 70%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Play button */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              border: `1px solid ${isHovered ? "rgba(198,169,122,0.8)" : "rgba(248,247,244,0.3)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3,
              transition: "border-color 0.5s ease, transform 0.5s ease",
              transform: `translate(-50%, -50%) scale(${isHovered ? 1.1 : 1})`,
            }}
          >
            <svg fill={isHovered ? "rgba(198,169,122,0.9)" : "rgba(248,247,244,0.6)"} height="14" viewBox="0 0 24 24" width="14" style={{ transition: "fill 0.4s ease", marginLeft: "2px" }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          {/* Campaign info overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1.5rem",
              zIndex: 3,
              transform: isHovered ? "translateY(-4px)" : "translateY(0)",
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <p className="text-eyebrow-light" style={{ marginBottom: "0.5rem" }}>
              {campaign.type}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                fontWeight: 400,
                color: "var(--text-light)",
                lineHeight: 1.05,
                marginBottom: "0.4rem",
              }}
            >
              {campaign.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                fontWeight: 400,
                color: "rgba(248,247,244,0.38)",
                letterSpacing: "0.1em",
              }}
            >
              {campaign.client}&nbsp;·&nbsp;{campaign.location}&nbsp;·&nbsp;{campaign.year}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function VideoCollections() {
  const sectionRef = useRef(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const mensCampaigns = campaigns.filter((c) => c.tags.includes("Men's"));
  const womensCampaigns = campaigns.filter((c) => c.tags.includes("Women's"));
  const featuredMens = mensCampaigns[0];
  const restMens = mensCampaigns.slice(1);

  return (
    <section
      style={{
        background: "var(--film-black)",
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* ── Section header ── */}
        <div ref={sectionRef} style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <motion.p
            className="text-eyebrow-light"
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: "1.25rem", color: "rgba(248,247,244,0.35)" }}
          >
            Campaign Films
          </motion.p>
          <motion.h2
            className="heading-xl-light"
            initial={{ opacity: 0, y: 32 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: "540px" }}
          >
            Campaigns shot
            <br />
            <em style={{ fontWeight: 300, opacity: 0.55 }}>like cinema.</em>
          </motion.h2>
        </div>

        {/* ── Men's — Featured + secondary ── */}
        <div style={{ marginBottom: "clamp(3.5rem, 6vw, 6rem)" }}>
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid var(--border-dark)",
            }}
          >
            <p className="text-eyebrow-light" style={{ color: "rgba(248,247,244,0.3)" }}>
              Men&apos;s Collection · DivyaMatrika
            </p>
            <Link
              href="/films"
              className="btn-link"
              style={{ color: "var(--accent)" }}
            >
              View All Films →
            </Link>
          </div>

          {/* Featured + secondary grid */}
          <div className="films-mens-grid">
            {/* Featured large */}
            {featuredMens && (
              <CampaignCard campaign={featuredMens} index={0} featured />
            )}
            {/* Secondary stacked */}
            <div className="films-mens-secondary">
              {restMens.map((c, i) => (
                <CampaignCard key={c.id} campaign={c} index={i + 1} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Women's Collection ── */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid var(--border-dark)",
            }}
          >
            <p className="text-eyebrow-light" style={{ color: "rgba(248,247,244,0.3)" }}>
              Women&apos;s Collection · Shri Radhe Boutique
            </p>
          </div>

          <div className="films-womens-grid">
            {womensCampaigns.map((campaign, i) => (
              <CampaignCard key={campaign.id} campaign={campaign} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "clamp(3rem, 5vw, 5rem)",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-dark)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(248,247,244,0.3)",
            }}
          >
            5 Campaign Films · 3 Brand Clients · 2026
          </p>
          <Link href="/films" className="btn-ghost">
            Full Film Archive
            <svg fill="none" height="12" viewBox="0 0 16 16" width="12">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .films-mens-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          align-items: start;
        }
        .films-mens-secondary {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .films-womens-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }
        @media (max-width: 768px) {
          .films-mens-grid { grid-template-columns: 1fr !important; }
          .films-womens-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
