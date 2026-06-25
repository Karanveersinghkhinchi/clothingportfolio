import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, cloudinaryPlayerUrl, siteConfig } from "@/lib/data";
import BrandPageClient from "./BrandPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) notFound();

  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hi 3DOTCREATIVES, I saw the ${brand.name} campaign work and want to discuss something similar for my brand.`
  )}`;

  const playerUrl = brand.primaryVideo
    ? cloudinaryPlayerUrl(brand.primaryVideo, { muted: false, controls: true })
    : null;

  return (
    <div style={{ background: "var(--bg-primary)" }}>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(65vh, 80vw, 90vh)",
          overflow: "hidden",
          background: "var(--film-black)",
        }}
      >
        <Image
          src={brand.heroImage}
          alt={`${brand.name} — Campaign Photography`}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 15%" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.45) 0%, rgba(8,8,8,0.15) 40%, var(--bg-primary) 100%)",
          }}
        />
        {/* Hero text — rendered client-side for animation */}
        <BrandPageClient name={brand.name} category={brand.category} location={brand.location} />
      </div>

      {/* Content */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(4rem, 7vw, 6rem)",
          paddingBottom: "clamp(5rem, 10vw, 9rem)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "clamp(3rem, 6vw, 8rem)",
            alignItems: "start",
            marginBottom: "clamp(4rem, 7vw, 6rem)",
          }}
          className="brand-content-grid"
        >
          {/* Left sidebar */}
          <div style={{ position: "sticky", top: "8rem" }}>
            <p
              className="text-eyebrow-accent"
              style={{ marginBottom: "1.25rem" }}
            >
              Campaign Details
            </p>

            {[
              { label: "Client", value: brand.name },
              { label: "Location", value: brand.location },
              { label: "Category", value: brand.category },
            ].map((info) => (
              <div
                key={info.label}
                style={{
                  paddingBottom: "1.25rem",
                  marginBottom: "1rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-eyebrow"
                  style={{ marginBottom: "0.3rem", opacity: 0.6 }}
                >
                  {info.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                  }}
                >
                  {info.value}
                </p>
              </div>
            ))}

            <p
              className="text-eyebrow-accent"
              style={{ marginBottom: "1rem", marginTop: "0.5rem" }}
            >
              Delivered
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                marginBottom: "2.5rem",
              }}
            >
              {brand.servicesDelivered.map((s) => (
                <li
                  key={s}
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
                >
                  <span
                    style={{
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start Similar Work
              </a>
              <Link href="/campaigns" className="btn-secondary">
                View All Campaigns
              </Link>
            </div>
          </div>

          {/* Right — narrative */}
          <div>
            <p
              className="text-eyebrow-accent"
              style={{ marginBottom: "1.25rem" }}
            >
              About the Brand
            </p>
            <p
              className="text-body"
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
                lineHeight: 1.9,
                marginBottom: "3rem",
              }}
            >
              {brand.about}
            </p>

            {brand.quote && (
              <div
                style={{
                  marginBottom: "3rem",
                  padding: "2.5rem 0",
                  borderTop: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "var(--text-primary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{brand.quote}&rdquo;
                </p>
                <p className="text-eyebrow-accent">— {brand.quoteAuthor}</p>
              </div>
            )}

            <p
              className="text-eyebrow-accent"
              style={{ marginBottom: "1.25rem" }}
            >
              Campaign Outcome
            </p>
            <p className="text-body" style={{ marginBottom: 0 }}>
              {brand.outcome}
            </p>
          </div>
        </div>

        {/* Film section */}
        {playerUrl && (
          <div style={{ marginBottom: "clamp(4rem, 7vw, 6rem)" }}>
            <p
              className="text-eyebrow-accent"
              style={{ marginBottom: "1.5rem" }}
            >
              Campaign Film
            </p>
            <div
              style={{
                position: "relative",
                paddingTop: "56.25%",
                background: "var(--film-black)",
                overflow: "hidden",
              }}
            >
              <iframe
                src={playerUrl}
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                title={`${brand.name} Campaign Film`}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Gallery */}
        {brand.galleryImages && brand.galleryImages.length > 0 && (
          <div>
            <p
              className="text-eyebrow-accent"
              style={{ marginBottom: "1.5rem" }}
            >
              Campaign Photography
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2px",
              }}
              className="brand-gallery"
            >
              {brand.galleryImages.map((img, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    aspectRatio: i === 0 ? "2/3" : "3/4",
                    overflow: "hidden",
                    gridColumn: i === 0 ? "span 2" : "span 1",
                    gridRow: i === 0 ? "span 2" : "span 1",
                  }}
                  className="img-hover-container"
                >
                  <Image
                    src={img}
                    alt={`${brand.name} campaign ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
