"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    city: "",
    whatsapp: "",
    type: "",
    need: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hi 3DOTCREATIVES, I want to discuss a project.`,
      ``,
      `Name: ${form.name}`,
      `Brand / Store: ${form.brand}`,
      `City: ${form.city}`,
      `WhatsApp: ${form.whatsapp}`,
      `Business Type: ${form.type || "Not specified"}`,
      ``,
      `Project Details:`,
      form.need || "Not specified",
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const fields = [
    { key: "name", label: "Your Name", placeholder: "e.g. Amit Sharma", type: "text" },
    { key: "brand", label: "Brand / Store Name", placeholder: "Your brand name", type: "text" },
    { key: "city", label: "City", placeholder: "e.g. Jaipur, Mumbai, Surat", type: "text" },
    { key: "whatsapp", label: "WhatsApp Number", placeholder: "+91 XXXXX XXXXX", type: "tel" },
  ];

  const inputStyle = {
    width: "100%",
    padding: "1rem 1.2rem",
    border: "1px solid var(--border-medium)",
    borderRadius: 0,
    background: "transparent",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    color: "var(--ink-black)",
    outline: "none",
    transition: "border-color 0.3s ease",
  } as const;

  return (
    <div style={{ background: "var(--paper-ivory)", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          paddingTop: "clamp(7rem, 12vw, 11rem)",
          paddingBottom: "clamp(3rem, 5vw, 5rem)",
          background: "var(--film-black)",
          borderBottom: "1px solid rgba(247,244,238,0.06)",
        }}
      >
        <div className="container">
          <motion.p
            className="label-light"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "1.25rem" }}
          >
            Start a Campaign
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 400,
              lineHeight: 0.93,
              letterSpacing: "-0.02em",
              color: "var(--paper-ivory)",
              maxWidth: "700px",
            }}
          >
            Let&apos;s build your brand<br />
            <span style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>properly.</span>
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: "clamp(4rem, 8vw, 7rem)", paddingBottom: "clamp(5rem, 10vw, 9rem)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "clamp(3rem, 7vw, 9rem)",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — Info */}
          <div>
            <p className="label" style={{ marginBottom: "1.25rem" }}>Get In Touch</p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 400,
                color: "var(--ink-black)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "1.5rem",
              }}
            >
              Tell us about your collection. We&apos;ll respond with a creative approach.
            </h2>
            <p className="text-body" style={{ marginBottom: "3rem" }}>
              We work with clothing brands, boutiques, and wholesalers across India.
              Every inquiry receives a personal response within 24 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { label: "Email", value: siteConfig.email },
                { label: "Location", value: siteConfig.location },
                { label: "Response Time", value: "Within 24 hours" },
              ].map((info, i) => (
                <div
                  key={info.label}
                  style={{
                    padding: "1.5rem 0",
                    borderBottom: i < 2 ? "1px solid var(--border-light)" : "none",
                  }}
                >
                  <p className="label" style={{ marginBottom: "0.25rem", fontSize: "0.6rem" }}>{info.label}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 500, color: "var(--ink-black)" }}>
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi 3DOTCREATIVES, I want to discuss a campaign.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Direct WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "3rem",
                  background: "var(--bg-secondary)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    color: "var(--ink-black)",
                    marginBottom: "1rem",
                  }}
                >
                  Message sent via WhatsApp.
                </p>
                <p className="text-body" style={{ marginBottom: "2rem" }}>
                  We&apos;ll review your details and respond within 24 hours with a tailored creative approach.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ display: "inline-flex" }}
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {fields.map((field, i) => (
                  <div
                    key={field.key}
                    style={{
                      paddingBottom: "1.5rem",
                      marginBottom: "1.5rem",
                      borderBottom: "1px solid var(--border-light)",
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--accent-gold)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-medium)")}
                    />
                  </div>
                ))}

                <div style={{ paddingBottom: "1.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-light)" }}>
                  <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent-gold)", marginBottom: "0.75rem" }}>
                    Type of Business
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-medium)")}
                  >
                    <option value="">Select type...</option>
                    <option value="Clothing Brand">Clothing Brand</option>
                    <option value="Boutique">Boutique</option>
                    <option value="Wholesaler">Wholesaler</option>
                    <option value="Designer">Designer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent-gold)", marginBottom: "0.75rem" }}>
                    What do you need?
                  </label>
                  <textarea
                    placeholder="Tell us about your collection, your goals, and what kind of content you're looking for..."
                    value={form.need}
                    onChange={(e) => setForm({ ...form, need: e.target.value })}
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-medium)")}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Send via WhatsApp
                  <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    color: "var(--text-tertiary)",
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  All form fields are included in your WhatsApp message.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
