"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Films", href: "/films" },
  { name: "Work", href: "/work" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Founder", href: "/founder" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "1rem 0" : "1.5rem 0",
          background: scrolled ? "rgba(248, 247, 244, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.35rem",
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: scrolled ? "var(--text-primary)" : "var(--text-light)",
                transition: "color 0.5s ease",
              }}
            >
              3DOTCREATIVES
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                light={!scrolled}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right — CTA + Mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <Link
              href="/contact"
              className="nav-desktop"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: scrolled ? "var(--text-primary)" : "var(--text-light)",
                padding: "0.65rem 1.4rem",
                border: `1px solid ${scrolled ? "var(--border)" : "rgba(248,247,244,0.28)"}`,
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = scrolled ? "var(--border)" : "rgba(248,247,244,0.28)";
                e.currentTarget.style.color = scrolled ? "var(--text-primary)" : "var(--text-light)";
              }}
            >
              Begin a Project
            </Link>

            {/* Hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "7px",
                zIndex: 1100,
              }}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: scrolled || isOpen ? "var(--text-primary)" : "var(--text-light)",
                  transition: "background 0.4s ease",
                }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "block",
                  width: "14px",
                  height: "1px",
                  background: scrolled || isOpen ? "var(--text-primary)" : "var(--text-light)",
                  transition: "background 0.4s ease",
                  transformOrigin: "left",
                }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: scrolled || isOpen ? "var(--text-primary)" : "var(--text-light)",
                  transition: "background 0.4s ease",
                }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1050,
              background: "var(--bg-primary)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "clamp(2rem, 6vw, 5rem)",
            }}
          >
            {/* Close area top-right */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "var(--container-padding)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-tertiary)",
                }}
              >
                Close
              </span>
            </div>

            <nav>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    paddingTop: i === 0 ? 0 : "0.3rem",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(3rem, 8vw, 5.5rem)",
                      fontWeight: 300,
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      lineHeight: 1.15,
                      display: "block",
                      paddingBottom: "0.3rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                marginTop: "3rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <span className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>
                Begin a project
              </span>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
                style={{ maxWidth: "fit-content" }}
              >
                Work With Us
              </Link>
            </motion.div>

            {/* Bottom studio info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "var(--container-padding)",
              }}
            >
              <p className="text-eyebrow">
                Rajasthan, India · Fashion Production Studio
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .nav-desktop { display: flex; align-items: center; gap: 2.5rem; }
        .nav-hamburger { display: none !important; }

        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

/* ── Animated underline nav link ── */
function NavLink({
  href,
  children,
  light,
}: {
  href: string;
  children: React.ReactNode;
  light: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.78rem",
        fontWeight: 400,
        letterSpacing: "0.08em",
        color: light ? "rgba(248,247,244,0.8)" : "var(--text-secondary)",
        textDecoration: "none",
        position: "relative",
        paddingBottom: "2px",
        transition: "color 0.4s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = light ? "var(--text-light)" : "var(--text-primary)";
        const line = e.currentTarget.querySelector(".nav-line") as HTMLElement;
        if (line) line.style.width = "100%";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = light ? "rgba(248,247,244,0.8)" : "var(--text-secondary)";
        const line = e.currentTarget.querySelector(".nav-line") as HTMLElement;
        if (line) line.style.width = "0%";
      }}
    >
      {children}
      <span
        className="nav-line"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "0%",
          height: "1px",
          background: light ? "var(--text-light)" : "var(--text-primary)",
          transition: "width 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </Link>
  );
}
