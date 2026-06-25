import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { wholesalers, cloudinaryPlayerUrl, siteConfig } from "@/lib/data";
import WholesalerPageClient from "./WholesalerPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function WholesalerPage({ params }: Props) {
  const { slug } = await params;
  const client = wholesalers.find((w) => w.slug === slug);
  if (!client) notFound();

  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hi 3DOTCREATIVES, I saw the ${client.name} campaign work and want to discuss similar content for my brand.`
  )}`;

  const playerUrl = client.primaryVideo
    ? cloudinaryPlayerUrl(client.primaryVideo, { muted: false, controls: true })
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
          src={client.heroImage}
          alt={`${client.name} — Campaign Photography`}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
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
        <WholesalerPageClient
          name={client.name}
          category={client.category}
          location={client.location}
        />
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
          className="ws-content-grid"
        >
          {/* Left sidebar */}
          <div style={{ position: "sticky", top: "8rem" }}>
            <p
              className="text-eyebrow-accent"
              style={{ marginBottom: "1.25rem" }}
            >
              Project Details
            </p>

            {[
              { label: "Client", value: client.name },
              { label: "Location", value: client.location },
              { label: "Category", value: client.category },
              { label: "Work Type", value: client.workType },
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginTop: "1.5rem",
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
                View All Work
              </Link>
            </div>
          </div>

          {/* Right — narrative */}
          <div>
            <p
              className="text-eyebrow-accent"
              style={{ marginBottom: "1.25rem" }}
            >
              Project Overview
            </p>
            <p
              className="text-body"
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
              }}
            >
              {client.overview}
            </p>

            {/* Visual commerce utility */}
            <div
              style={{
                padding: "2rem",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                marginBottom: "2.5rem",
              }}
            >
              <p
                className="text-eyebrow-accent"
                style={{ marginBottom: "0.75rem" }}
              >
                Visual Commerce Utility
              </p>
              <p className="text-body">{client.utility}</p>
            </div>

            {client.quote && (
              <div
                style={{
                  padding: "2.5rem 0",
                  borderTop: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                  marginBottom: "0",
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
                  &ldquo;{client.quote}&rdquo;
                </p>
                <p className="text-eyebrow-accent">— {client.quoteAuthor}</p>
              </div>
            )}
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
                title={`${client.name} Campaign Film`}
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
        {client.galleryImages && client.galleryImages.length > 0 && (
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
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "2px",
              }}
              className="ws-gallery"
            >
              {client.galleryImages.map((img, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    aspectRatio: "4/5",
                    overflow: "hidden",
                  }}
                  className="img-hover-container"
                >
                  <Image
                    src={img}
                    alt={`${client.name} campaign ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
