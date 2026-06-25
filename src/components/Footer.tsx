"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";

const navigation = {
  studio: [
    { name: "Fashion Films", href: "/films" },
    { name: "Campaign Universe", href: "/campaigns" },
    { name: "Visual Language", href: "/visual-language" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Founder", href: "/founder" },
  ],
  work: [
    { name: "DivyaMatrika", href: "/work/brands/divyamatrika" },
    { name: "Shri Radhe Boutique", href: "/work/wholesalers/shri-radhe-boutique" },
    { name: "Charvi Fashion", href: "/work/wholesalers/charvi-fashion" },
    { name: "All Campaigns", href: "/work" },
  ],
  services: [
    "Campaign Films",
    "Editorial Photography",
    "Creative Direction",
    "Catalogue Systems",
    "Social Content",
    "Visual Commerce",
  ],
};

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.88rem",
        fontWeight: 400,
        color: "rgba(248,247,244,0.42)",
        textDecoration: "none",
        display: "inline-block",
        position: "relative",
        transition: "color 0.35s ease",
      }}
      className="footer-link link-underline"
      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(248,247,244,0.85)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,247,244,0.42)")}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hi, I want to discuss a campaign for my clothing brand."
  )}`;

  return (
    <footer style={{ background: "var(--film-black)", color: "var(--text-light)" }}>

      {/* Top — logo + tagline + CTA */}
      <div
        style={{
          borderBottom: "1px solid var(--border-dark)",
          paddingTop: "clamp(5rem, 10vw, 9rem)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* Logo + tagline */}
          <div style={{ maxWidth: "540px" }}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 400,
                  color: "var(--text-light)",
                  letterSpacing: "0.04em",
                }}
              >
                3DOTCREATIVES
              </span>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(248,247,244,0.22)",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
              }}
            >
              &ldquo;We create desire before purchase.&rdquo;
            </p>
          </div>

          {/* CTA */}
          <div>
            <p className="text-eyebrow-light" style={{ color: "rgba(248,247,244,0.25)", marginBottom: "1.25rem" }}>
              Start a Campaign
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link href="/contact" className="btn-primary">
                Work With Us
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
                style={{ color: "rgba(248,247,244,0.4)" }}
              >
                WhatsApp Direct →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation grid */}
      <div style={{ borderBottom: "1px solid var(--border-dark)" }}>
        <div
          className="container footer-nav-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {/* Studio */}
          <div
            style={{
              padding: "clamp(2.5rem, 4vw, 3.5rem)",
              borderRight: "1px solid var(--border-dark)",
            }}
          >
            <p className="text-eyebrow-light" style={{ color: "rgba(248,247,244,0.2)", marginBottom: "1.75rem" }}>
              Studio
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {navigation.studio.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Work */}
          <div
            style={{
              padding: "clamp(2.5rem, 4vw, 3.5rem)",
              borderRight: "1px solid var(--border-dark)",
            }}
          >
            <p className="text-eyebrow-light" style={{ color: "rgba(248,247,244,0.2)", marginBottom: "1.75rem" }}>
              Work
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {navigation.work.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Services + Contact */}
          <div style={{ padding: "clamp(2.5rem, 4vw, 3.5rem)" }}>
            <p className="text-eyebrow-light" style={{ color: "rgba(248,247,244,0.2)", marginBottom: "1.75rem" }}>
              What We Do
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "3rem" }}>
              {navigation.services.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    fontWeight: 400,
                    color: "rgba(248,247,244,0.3)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div>
              <p className="text-eyebrow-light" style={{ color: "rgba(248,247,244,0.2)", marginBottom: "0.75rem" }}>
                Contact
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  color: "rgba(248,247,244,0.42)",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "0.5rem",
                  transition: "color 0.35s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(248,247,244,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,247,244,0.42)")}
              >
                {siteConfig.email}
              </a>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "rgba(248,247,244,0.22)",
                }}
              >
                {siteConfig.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="container"
        style={{
          padding: "1.5rem var(--container-padding)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            color: "rgba(248,247,244,0.18)",
            letterSpacing: "0.08em",
          }}
        >
          © {new Date().getFullYear()} 3DOTCREATIVES · Fashion Production Studio
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            color: "rgba(248,247,244,0.12)",
            letterSpacing: "0.08em",
          }}
        >
          {siteConfig.location}
        </p>
      </div>

      <style jsx global>{`
        .footer-nav-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 768px) {
          .footer-nav-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-nav-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border-dark) !important;
          }
          footer .container:first-child > div:first-child {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
