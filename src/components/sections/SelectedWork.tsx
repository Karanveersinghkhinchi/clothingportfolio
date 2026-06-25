"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { photos, campaigns } from "@/lib/data";

// Editorial gallery items — using real campaign photos
const galleryItems = [
  {
    id: "1",
    photo: photos.editorial1,
    alt: "DivyaMatrika — Heritage Collection",
    title: "Heritage Collection",
    client: "DivyaMatrika",
    year: "2026",
    href: "/campaigns",
    aspect: "portrait" as const,
  },
  {
    id: "2",
    photo: photos.hero,
    alt: "3DOTCREATIVES — Campaign Photography",
    title: "Editorial Campaign",
    client: "3DOTCREATIVES",
    year: "2026",
    href: "/work",
    aspect: "tall" as const,
  },
  {
    id: "3",
    photo: photos.editorial2,
    alt: "DivyaMatrika — Pure Linen Editorial",
    title: "Mandala Magic",
    client: "DivyaMatrika",
    year: "2026",
    href: "/campaigns",
    aspect: "portrait" as const,
  },
  {
    id: "4",
    photo: photos.editorial4,
    alt: "Shri Radhe Boutique — Women's Collection",
    title: "Radhey Collection",
    client: "Shri Radhe Boutique",
    year: "2026",
    href: "/campaigns",
    aspect: "portrait" as const,
  },
  {
    id: "5",
    photo: photos.editorial3,
    alt: "Campaign Photography",
    title: "The White Edit",
    client: "Shri Radhe Boutique",
    year: "2026",
    href: "/campaigns",
    aspect: "portrait" as const,
  },
];

function GalleryImage({
  item,
  index,
  size = "normal",
}: {
  item: (typeof galleryItems)[0];
  index: number;
  size?: "normal" | "large";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ position: "relative" }}
    >
      <Link
        href={item.href}
        style={{
          display: "block",
          position: "relative",
          overflow: "hidden",
          aspectRatio: size === "large" ? "3/4" : "2/3",
          background: "var(--bg-secondary)",
        }}
        className="gallery-item-link"
      >
        <Image
          src={item.photo}
          alt={item.alt}
          fill
          sizes={size === "large" ? "50vw" : "(max-width: 768px) 50vw, 25vw"}
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            transition: "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          className="gallery-item-img"
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(8,8,8,0.75) 0%, transparent 55%)",
            opacity: 0,
            transition: "opacity 0.6s ease",
          }}
          className="gallery-item-overlay"
        />

        {/* Caption — slides up on hover */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "1.5rem",
            transform: "translateY(100%)",
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          className="gallery-item-caption"
        >
          <p className="text-eyebrow-light" style={{ marginBottom: "0.4rem" }}>
            {item.client} · {item.year}
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
              fontWeight: 400,
              color: "var(--text-light)",
              lineHeight: 1.1,
            }}
          >
            {item.title}
          </p>
        </div>

        {/* Index number */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "rgba(248,247,244,0.0)",
              transition: "color 0.4s ease",
            }}
            className="gallery-item-num"
          >
            0{index + 1}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function SelectedWork() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      style={{
        background: "var(--bg-primary)",
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Header row */}
        <div
          ref={headerRef}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <motion.p
              className="text-eyebrow-accent"
              initial={{ opacity: 0, y: 12 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              style={{ marginBottom: "1.2rem" }}
            >
              Selected Works
            </motion.p>
            <motion.h2
              className="heading-xl"
              initial={{ opacity: 0, y: 32 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ maxWidth: "560px" }}
            >
              Campaigns built
              <br />
              <em style={{ fontWeight: 300 }}>to be remembered.</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Link
              href="/work"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                position: "relative",
              }}
              className="link-underline"
            >
              View All Work
              <svg fill="none" height="10" viewBox="0 0 16 16" width="10">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Editorial gallery grid */}
        <div className="gallery-grid">
          {/* Left column — large featured */}
          <div className="gallery-col-left">
            <GalleryImage item={galleryItems[0]} index={0} size="large" />
          </div>

          {/* Center column — two stacked */}
          <div className="gallery-col-center">
            <GalleryImage item={galleryItems[1]} index={1} />
            <GalleryImage item={galleryItems[2]} index={2} />
          </div>

          {/* Right column — two stacked */}
          <div className="gallery-col-right">
            <GalleryImage item={galleryItems[3]} index={3} />
            <GalleryImage item={galleryItems[4]} index={4} />
          </div>
        </div>

        {/* Bottom — campaign count */}
        <div
          style={{
            marginTop: "clamp(3rem, 5vw, 5rem)",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p className="text-eyebrow" style={{ opacity: 0.6 }}>
            {campaigns.length} campaigns completed · 3 cities · 2026
          </p>
          <Link href="/contact" className="btn-secondary">
            Begin a Project
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 0.75rem;
          align-items: start;
        }
        .gallery-col-center,
        .gallery-col-right {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .gallery-col-left {
          /* aligned to top */
        }
        .gallery-item-link:hover .gallery-item-img {
          transform: scale(1.05);
        }
        .gallery-item-link:hover .gallery-item-overlay {
          opacity: 1 !important;
        }
        .gallery-item-link:hover .gallery-item-caption {
          transform: translateY(0) !important;
        }
        .gallery-item-link:hover .gallery-item-num {
          color: rgba(248,247,244,0.55) !important;
        }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-col-left {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 560px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-col-left,
          .gallery-col-center,
          .gallery-col-right {
            grid-column: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
