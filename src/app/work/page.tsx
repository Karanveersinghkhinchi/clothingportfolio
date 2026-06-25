"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { brands, wholesalers, siteConfig } from "@/lib/data";

const allClients = [
  ...brands.map((b) => ({ ...b, type: "brand" as const })),
  ...wholesalers.map((w) => ({ ...w, type: "wholesaler" as const })),
];

/* ── Single client row ── */
function ClientRow({
  client,
  index,
}: {
  client: (typeof allClients)[0];
  index: number;
}) {
  const ref = useRef(null);
  const clientInView = useInView(ref, { once: true, margin: "-60px" });
  const isReverse = index % 2 !== 0;
  const href =
    client.type === "brand"
      ? `/work/brands/${client.slug}`
      : `/work/wholesalers/${client.slug}`;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={clientInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: isReverse ? "0.45fr 0.55fr" : "0.55fr 0.45fr",
        minHeight: "clamp(450px, 55vw, 600px)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
      className="work-row"
    >
      {/* Image */}
      <Link
        href={href}
        style={{
          position: "relative",
          overflow: "hidden",
          order: isReverse ? 2 : 1,
          display: "block",
        }}
        className="img-hover-container"
      >
        <Image
          src={client.heroImage}
          alt={client.name}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(8,8,8,0.75) 0%, transparent 60%)",
          }}
        />
        <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
          <p
            className="text-eyebrow-light"
            style={{ marginBottom: "0.4rem" }}
          >
            {client.category}
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.6rem",
              fontWeight: 400,
              color: "var(--text-light)",
            }}
          >
            {client.name}
          </p>
        </div>
      </Link>

      {/* Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(2.5rem, 5vw, 4.5rem)",
          background: index % 2 === 0 ? "var(--bg-primary)" : "var(--bg-secondary)",
          order: isReverse ? 1 : 2,
        }}
      >
        <div>
          <p className="text-eyebrow-accent" style={{ marginBottom: "0.75rem" }}>
            {client.type === "brand" ? "Brand Campaign" : "Wholesale Client"}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              marginBottom: "0.5rem",
            }}
          >
            {client.name}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              color: "var(--text-tertiary)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.75rem",
            }}
          >
            {client.location}
          </p>

          <p className="text-body" style={{ marginBottom: "2rem" }}>
            {"about" in client ? client.about : "overview" in client ? client.overview : ""}
          </p>

          {/* Services */}
          <div
            style={{
              padding: "1.25rem",
              background: "var(--accent-dim)",
              borderLeft: "2px solid var(--accent)",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              {"servicesDelivered" in client
                ? (client.servicesDelivered as string[]).join(" · ")
                : "workType" in client
                ? client.workType
                : ""}
            </p>
          </div>
        </div>

        <Link href={href} className="btn-secondary" style={{ width: "fit-content" }}>
          View Campaign
          <svg fill="none" height="12" viewBox="0 0 16 16" width="12">
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
    </motion.article>
  );
}

/* ── Inner component using useSearchParams ── */
function WorkPageInner() {
  const params = useSearchParams();
  const filter = params.get("filter");
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  const filtered =
    filter === "brands"
      ? allClients.filter((c) => c.type === "brand")
      : filter === "wholesalers"
      ? allClients.filter((c) => c.type === "wholesaler")
      : allClients;

  return (
    <div style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <div
        style={{
          paddingTop: "clamp(7rem, 12vw, 11rem)",
          paddingBottom: "clamp(4rem, 7vw, 6rem)",
          background: "var(--film-black)",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >
        <div className="container" ref={headerRef}>
          <motion.p
            className="text-eyebrow-light"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "1.25rem", color: "rgba(248,247,244,0.35)" }}
          >
            Client Work
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
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                fontWeight: 300,
                lineHeight: 0.93,
                letterSpacing: "-0.025em",
                color: "var(--text-light)",
                maxWidth: "700px",
              }}
            >
              Campaigns we&apos;ve
              <br />
              <em style={{ fontWeight: 300, opacity: 0.5 }}>built.</em>
            </motion.h1>

            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: "flex", gap: "0.5rem" }}
            >
              {[
                { label: "All", value: null },
                { label: "Brands", value: "brands" },
                { label: "Wholesale", value: "wholesalers" },
              ].map((f) => (
                <Link
                  key={f.label}
                  href={f.value ? `/work?filter=${f.value}` : "/work"}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    padding: "0.6rem 1.2rem",
                    border: "1px solid",
                    borderColor:
                      filter === f.value || (!filter && !f.value)
                        ? "var(--accent)"
                        : "rgba(248,247,244,0.15)",
                    color:
                      filter === f.value || (!filter && !f.value)
                        ? "var(--accent)"
                        : "rgba(248,247,244,0.4)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {f.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Client rows */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(4rem, 7vw, 6rem)",
          paddingBottom: "clamp(5rem, 10vw, 9rem)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {filtered.map((client, i) => (
            <ClientRow key={client.slug} client={client} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          background: "var(--film-black)",
          padding: "clamp(5rem, 10vw, 9rem) 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p
            className="text-eyebrow-light"
            style={{ marginBottom: "1.5rem", color: "rgba(248,247,244,0.35)" }}
          >
            Your Brand
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "var(--text-light)",
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              marginBottom: "2.5rem",
              maxWidth: "500px",
              margin: "0 auto 2.5rem",
            }}
          >
            Your campaign
            <br />
            <em style={{ fontWeight: 300, opacity: 0.45 }}>could be here.</em>
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              Start Your Campaign
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to discuss a campaign for my brand.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .work-row { grid-template-columns: 1fr !important; }
          .work-row > a,
          .work-row > div { order: initial !important; }
        }
      `}</style>
    </div>
  );
}

/* ── Page export wrapped in Suspense ── */
export default function WorkPage() {
  return (
    <Suspense fallback={<div style={{ background: "var(--bg-primary)", minHeight: "100vh" }} />}>
      <WorkPageInner />
    </Suspense>
  );
}
