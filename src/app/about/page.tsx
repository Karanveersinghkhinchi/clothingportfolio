"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { title: "Fashion-First Thinking", description: "Every frame is designed around how fashion businesses communicate and sell." },
  { title: "Commercial Creativity", description: "We blend aesthetic excellence with commercial intent in every project." },
  { title: "System-Level Approach", description: "We build visual ecosystems that serve brands across every platform." },
  { title: "Understanding the Market", description: "We know how clothing gets sold — from boutiques to wholesale distributors." },
];

const process = [
  { step: "01", title: "Discovery", description: "Understanding your brand, market, and customers." },
  { step: "02", title: "Creative Direction", description: "Defining visual language, mood, and output strategy." },
  { step: "03", title: "Production", description: "Shoots, reels, catalogues — executed with precision." },
  { step: "04", title: "Delivery & Growth", description: "Platform-ready assets with ongoing growth support." },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <section className="container section-padding" style={{ paddingBottom: "2rem" }}>
        <ScrollReveal>
          <p className="label" style={{ marginBottom: "1rem" }}>About Us</p>
          <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>
            We create fashion-first content systems for clothing businesses
          </h1>
          <p className="text-body" style={{ fontSize: "1.1rem", maxWidth: "700px" }}>
            3dotcreatives is a specialized creative agency focused on fashion and clothing. We build complete visual identities that communicate quality, build trust, and drive sales.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <ScrollReveal>
            <p className="label" style={{ marginBottom: "1rem" }}>Our Values</p>
            <h2 className="heading-lg" style={{ marginBottom: "3rem" }}>What makes us different</h2>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card" style={{ padding: "2rem", height: "100%" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.8rem" }}>{v.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-padding">
        <ScrollReveal>
          <p className="label" style={{ marginBottom: "1rem" }}>Our Process</p>
          <h2 className="heading-lg" style={{ marginBottom: "3rem" }}>How we work</h2>
        </ScrollReveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
          {process.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 800, color: "var(--accent-gold)", opacity: 0.3, lineHeight: 1, display: "block", marginBottom: "0.5rem" }}>{p.step}</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--bg-dark)", padding: "var(--section-padding) 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600, color: "var(--text-light)", lineHeight: 1.3, marginBottom: "2rem", fontStyle: "italic" }}>
              We don&apos;t just make your brand look good — we make it look like it belongs on a bigger stage.
            </h2>
            <Link href="/contact" className="btn-primary" style={{ background: "var(--accent-gold)" }}>Work With Us</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
