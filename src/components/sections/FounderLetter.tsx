"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { photos } from "@/lib/data";

export default function FounderLetter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "var(--bg-primary)",
        overflow: "hidden",
      }}
    >
      {/* Full-bleed team photo — taller, fades to bg-primary */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(50vh, 65vw, 78vh)",
          overflow: "hidden",
        }}
      >
        <Image
          src={photos.team}
          alt="3DOTCREATIVES — The team behind the campaigns"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 35%",
            transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          className="founder-photo"
        />
        {/* Grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            backgroundSize: "256px 256px",
            opacity: 0.2,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        {/* Fade to background */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background:
              "linear-gradient(to bottom, transparent, var(--bg-primary))",
            zIndex: 2,
          }}
        />
      </div>

      {/* Founder letter */}
      <div
        ref={ref}
        className="container"
        style={{
          paddingTop: "clamp(2rem, 4vw, 4rem)",
          paddingBottom: "clamp(5rem, 10vw, 9rem)",
          maxWidth: "820px",
        }}
      >
        <motion.p
          className="text-eyebrow-accent"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "2.5rem" }}
        >
          A Note From The Founder
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main quote */}
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
              marginBottom: "3.5rem",
            }}
          >
            &ldquo;Most clothing content is forgettable within three seconds.
            We build the kind that lingers for three weeks.&rdquo;
          </h2>

          {/* Two-column text */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3.5rem",
              marginBottom: "3.5rem",
            }}
            className="founder-text-grid"
          >
            <div>
              <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                I started 3DOTCREATIVES because I saw a gap — Indian clothing
                brands with genuinely exceptional products, presented through
                content that made them look ordinary.
              </p>
              <p className="text-body">
                The photography was functional. The reels were generic. The
                catalogues looked like scans. And the brands — brands with
                real craft, real heritage, real stories — were invisible.
              </p>
            </div>
            <div>
              <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                We don&apos;t do that. We approach every collection as a creative
                director approaches a campaign — with a brief, a narrative,
                a visual language, and a production process built around
                one question: what makes this garment feel like desire?
              </p>
              <p className="text-body">
                If you&apos;re reading this, your brand probably deserves better
                content than it&apos;s currently getting. Let&apos;s talk.
              </p>
            </div>
          </div>

          {/* Signature + link */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.7rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--text-primary)",
                  marginBottom: "0.35rem",
                }}
              >
                Karanveer Singh Khinchi
              </p>
              <p className="text-eyebrow-accent">
                Founder &amp; Creative Director · 3DOTCREATIVES
              </p>
            </div>
            <Link href="/founder" className="btn-secondary">
              Full Story
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .founder-photo:hover {
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          .founder-text-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
