import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://3dotcreatives.in";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/films`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/campaigns`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/visual-language`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/capabilities`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/founder`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.85 },
    { url: `${baseUrl}/work/brands/divyamatrika`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/work/wholesalers/shri-radhe-boutique`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/work/wholesalers/charvi-fashion`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];
}
