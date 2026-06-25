"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { photos, siteConfig, whyUs } from "@/lib/data";

export default function FounderPage() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi Karanveer, I read your story and want to discuss my brand with you.")}`;

  return (
    <div style={{ background: "var(--paper-ivory)" }}>
      {/* Hero — full bleed photo */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(60vh, 80vw, 90vh)",
          overflow: "hidden",
          background: "var(--film-black)",
        }}
      >
        <Image
          src={photos.team}
          alt="Karanveer Singh Khinchi — Founder & Creative Director, 3DOTCREATIVES"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(247,244,238,1) 100%)",
          }}
        />
        {/* Name overlay */}
        <div
          style={{
            position: "absolute",
            top: "clamp(6rem, 10vw, 9rem)",
            left: "var(--container-padding)",
          }}
        >
          <motion.p
            className="label-light"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ marginBottom: "0.5rem" }}
          >
            Founder & Creative Director
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 400,
              color: "var(--paper-ivory)",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            Karanveer<br />Singh Khinchi
          </motion.h1>
        </div>
      </div>

      {/* Story */}
      <div ref={headerRef} className="container" style={{ paddingTop: "clamp(4rem, 7vw, 6rem)", paddingBottom: "clamp(5rem, 10vw, 9rem)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "clamp(3rem, 6vw, 8rem)",
            alignItems: "start",
          }}
          className="founder-story-grid"
        >
          {/* Left — sticky info */}
          <div style={{ position: "sticky", top: "8rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="label" style={{ marginBottom: "1.25rem" }}>3DOTCREATIVES</p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 400,
                  color: "var(--ink-black)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  marginBottom: "2rem",
                }}
              >
                Fashion deserves<br />
                <span style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>cinema-level</span><br />
                thinking.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                {[
                  { label: "Based In", value: "Rajasthan, India" },
                  { label: "Speciality", value: "Fashion Campaign Production" },
                  { label: "Serving", value: "Clothing Brands Across India" },
                ].map((info) => (
                  <div key={info.label} style={{ paddingBottom: "1rem", borderBottom: "1px solid var(--border-light)" }}>
                    <p className="label" style={{ marginBottom: "0.25rem", fontSize: "0.62rem" }}>{info.label}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 500, color: "var(--ink-black)" }}>
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Talk to Karanveer
              </a>
            </motion.div>
          </div>

          {/* Right — full founder letter */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              {
                heading: "Why I started 3DOTCREATIVES",
                body: `I grew up watching Indian clothing brands struggle with something that seemed simple: looking as good as they actually were.\n\nThe fabric was extraordinary. The craftsmanship was genuine. The designs had real personality. But the photography made everything look like an afterthought — flat light, rushed compositions, catalogue frames that gave buyers no reason to feel anything.\n\nI kept thinking: these brands deserve better than this. So I started building it.`,
              },
              {
                heading: "Why fashion content is broken",
                body: `Most clothing photography in India is transactional. A brand books a photographer for a day, shoots 200 looks, picks the 40 that look cleanest, and posts them.\n\nThere's no visual brief. No narrative. No decision about what mood or feeling the collection is supposed to create. No consideration of how a buyer or customer is supposed to feel when they see it.\n\nThe result is content that informs without inspiring. And in fashion, if content doesn't inspire, it doesn't sell.`,
              },
              {
                heading: "What we believe",
                body: `We believe clothing brands deserve campaign-level creative thinking, not just technical execution.\n\nEvery collection has a story. Every garment has an intention. Our job is to find those stories, build a visual language around them, and produce content that makes a buyer, a retailer, or an end customer feel something before they think anything.\n\nThat feeling — that moment of desire before any rational thought — is what moves product. It's what we build.`,
              },
              {
                heading: "An invitation",
                body: `If your brand has real craft behind it — if your garments are genuinely worth wanting — you deserve content that shows it properly.\n\nLet's talk about your next collection. I personally respond to every inquiry within 24 hours.\n\n— Karanveer Singh Khinchi`,
              },
            ].map((section, i) => (
              <div
                key={section.heading}
                style={{
                  marginBottom: "3.5rem",
                  paddingBottom: "3.5rem",
                  borderBottom: i < 3 ? "1px solid var(--border-light)" : "none",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                    fontWeight: 400,
                    color: "var(--ink-black)",
                    lineHeight: 1.2,
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {section.heading}
                </h3>
                {section.body.split("\n\n").map((para, pi) => (
                  <p
                    key={pi}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                      lineHeight: 1.85,
                      color: "var(--text-secondary)",
                      marginBottom: pi < section.body.split("\n\n").length - 1 ? "1.25rem" : 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}

            {/* Why Us */}
            <div>
              <p className="label" style={{ marginBottom: "1.5rem" }}>How We Work</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {whyUs.map((item) => (
                  <div key={item.title} style={{ paddingBottom: "1.5rem", borderBottom: "1px solid var(--border-light)" }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "var(--ink-black)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-body">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .founder-story-grid { grid-template-columns: 1fr !important; }
          .founder-story-grid > div:first-child { position: relative !important; top: 0 !important; }
        }
      `}</style>
    </div>
  );
}
