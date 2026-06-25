// Centralized data for 3DOTCREATIVES — Fashion Production Studio

export const siteConfig = {
  name: "3dotcreatives",
  displayName: "3DOTCREATIVES",
  tagline: "We Create Desire Before Purchase.",
  description:
    "Fashion production studio crafting campaign films, editorial photography, and visual commerce systems for clothing brands across India.",
  whatsapp: "917296902012",
  email: "team@3dotcreatives.in",
  instagram: "https://instagram.com/3dotcreatives",
  location: "Rajasthan, India",
};

// ── Cloudinary config ──────────────────────────────────────────
export const cloudinary = {
  cloudName: "dkgzikfwu",
  basePlayerUrl: "https://player.cloudinary.com/embed/",
  baseResUrl: "https://res.cloudinary.com/dkgzikfwu",
};

// Cloudinary video public IDs
export const cloudinaryVideos = {
  hero: "000_final_1_iyy3jg",
  sunflowerShirt: "Presenting_the_full_look___our_Sunflower_Shirt___matching_Trousers__Made_from_pure_linen__the_shirt_is_breathable__super_absorbent__and_effortlessly_kimckp",
  mandarinShirt: "Drop_3_is_here__Full-sleeves_Mandarin_Appliqu%C3%A9_Shirt___heritage_cool_vibes___Pure_linen___Handcrafted___Breathable__Sizes__L___XL___XXL__Mode_t8jfmo",
  mandalaShirt: "Mandala_Magic_Now_in_Stitches___Our_latest_creation_takes_inspiration_from_the_timeless_Mandala_art_of_Rajasthan_and_transforms_it_into_intricate_cruuoy",
  radheyWomen: "fina_l_3_radhey_mp4_egnoau",
  rkWomen: "r_k_001_jbnkvp",
};

// Helper: build Cloudinary player embed URL
export function cloudinaryPlayerUrl(
  publicId: string,
  options: {
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
  } = {}
): string {
  const { autoplay = false, loop = false, muted = true, controls = true } = options;
  const params = new URLSearchParams({
    cloud_name: cloudinary.cloudName,
    public_id: publicId,
    ...(autoplay && { autoplay: "true" }),
    ...(loop && { loop: "true" }),
    ...(muted && { muted: "true" }),
    ...(!controls && { controls: "false" }),
    background: "black",
  });
  return `${cloudinary.basePlayerUrl}?${params.toString()}`;
}

// Helper: Cloudinary video thumbnail (first frame)
export function cloudinaryThumbnail(publicId: string, second = 2): string {
  return `${cloudinary.baseResUrl}/video/upload/so_${second}/${publicId}.jpg`;
}

// ── Photo assets ───────────────────────────────────────────────
export const photos = {
  hero: "/visuals/photo-08.jpg",           // 18MB — largest, sharpest
  heroSecondary: "/visuals/photo-09.jpg",  // 14.3MB — editorial
  divyamatrikaHero: "/visuals/divyamatrika-front.jpg", // Named client hero
  caseStudyHero: "/visuals/photo-09.jpg",
  editorial1: "/visuals/photo-02.jpg",     // 13.7MB — campaign quality
  editorial2: "/visuals/photo-03.jpg",     // 12.4MB
  editorial3: "/visuals/photo-04.jpg",     // 10MB
  editorial4: "/visuals/photo-06.jpg",     // 10MB — women's
  supporting1: "/visuals/photo-01.jpg",
  supporting2: "/visuals/photo-05.jpg",
  supporting3: "/visuals/photo-07.jpg",    // product clarity
  team: "/visuals/photo-both.jpg",         // human element
};

// ── Campaign Universe ─────────────────────────────────────────
export const campaigns = [
  {
    id: "sunflower-collection",
    title: "Sunflower Collection",
    subtitle: "Pure Linen. Summer Craft.",
    client: "DivyaMatrika",
    location: "Jaipur",
    year: "2026",
    type: "Men's Fashion Film",
    description:
      "A full linen look — the Sunflower Shirt paired with matching Trousers. Breathable, absorbent, effortlessly styled. Shot to feel like summer in motion.",
    videoId: "Presenting_the_full_look___our_Sunflower_Shirt___matching_Trousers__Made_from_pure_linen__the_shirt_is_breathable__super_absorbent__and_effortlessly_kimckp",
    coverPhoto: "/visuals/photo-01.jpg",
    tags: ["Fashion Film", "Men's", "Linen", "Campaign"],
    services: ["Creative Direction", "Shoot Execution", "Film Production", "Styling"],
  },
  {
    id: "heritage-collection",
    title: "Heritage Collection",
    subtitle: "Mandarin Craft. Heritage Cool.",
    client: "DivyaMatrika",
    location: "Jaipur",
    year: "2026",
    type: "Men's Campaign Film",
    description:
      "Drop 3. Full-sleeve Mandarin Appliqué Shirt with heritage cool vibes. Pure linen, handcrafted, breathable — shot with the reverence it deserves.",
    videoId: "Drop_3_is_here__Full-sleeves_Mandarin_Appliqu%C3%A9_Shirt___heritage_cool_vibes___Pure_linen___Handcrafted___Breathable__Sizes__L___XL___XXL__Mode_t8jfmo",
    coverPhoto: "/visuals/photo-02.jpg",
    tags: ["Fashion Film", "Men's", "Heritage", "Campaign"],
    services: ["Creative Direction", "Film Production", "Shoot Execution"],
  },
  {
    id: "mandala-collection",
    title: "Mandala Magic",
    subtitle: "Rajasthani Art. Stitched.",
    client: "DivyaMatrika",
    location: "Jaipur",
    year: "2026",
    type: "Artisan Collection Film",
    description:
      "Inspiration from the timeless Mandala art of Rajasthan transformed into intricate embroidery. A film that treats craft with cinema-level reverence.",
    videoId: "Mandala_Magic_Now_in_Stitches___Our_latest_creation_takes_inspiration_from_the_timeless_Mandala_art_of_Rajasthan_and_transforms_it_into_intricate_cruuoy",
    coverPhoto: "/visuals/photo-03.jpg",
    tags: ["Fashion Film", "Artisan", "Heritage", "Campaign"],
    services: ["Creative Direction", "Film Production", "Cultural Storytelling"],
  },
  {
    id: "radhey-collection",
    title: "Radhey Collection",
    subtitle: "Women's Ethnic. Divine.",
    client: "Shri Radhe Boutique",
    location: "Nathdwara",
    year: "2026",
    type: "Women's Campaign Film",
    description:
      "A women's collection film for Shri Radhe Boutique — shot to honour the devotion and elegance of Indian ethnic wear at its finest.",
    videoId: "fina_l_3_radhey_mp4_egnoau",
    coverPhoto: "/visuals/photo-06.jpg",
    tags: ["Fashion Film", "Women's", "Ethnic", "Campaign"],
    services: ["Campaign Production", "Model Direction", "Shoot Execution"],
  },
  {
    id: "white-edit",
    title: "The White Edit",
    subtitle: "Pure. Classic. Timeless.",
    client: "Shri Radhe Boutique",
    location: "Nathdwara",
    year: "2026",
    type: "Women's Editorial Film",
    description:
      "When in doubt, go all white. Head-to-toe elegance in pure linen — a film about restraint, clarity and the power of a perfect edit.",
    videoId: "r_k_001_jbnkvp",
    coverPhoto: "/visuals/photo-05.jpg",
    tags: ["Fashion Film", "Women's", "Editorial", "Campaign"],
    services: ["Creative Direction", "Film Production", "Styling"],
  },
];

// ── Services ──────────────────────────────────────────────────
export const services = [
  {
    id: "campaign-films",
    title: "Campaign Films",
    shortDesc: "Cinema-quality fashion films",
    description:
      "From concept to final cut — we produce fashion films that make garments feel like desire. Not content. Cinema.",
    icon: "◎",
    caseStudy: "/campaigns",
  },
  {
    id: "editorial-photography",
    title: "Editorial Photography",
    shortDesc: "Magazine-grade campaign stills",
    description:
      "Photography that earns editorial placement. Technically precise, aesthetically uncompromising, commercially sharp.",
    icon: "◈",
    caseStudy: "/work/brands/divyamatrika",
  },
  {
    id: "catalogue-systems",
    title: "Catalogue Systems",
    shortDesc: "Product-first visual architecture",
    description:
      "We build catalogue systems — not just shoots. Front, back, detail, variant, styled. Ready for buyers, retailers, and wholesale.",
    icon: "◻",
    caseStudy: "/work/wholesalers/shri-radhe-boutique",
  },
  {
    id: "creative-direction",
    title: "Creative Direction",
    shortDesc: "The thinking behind the visuals",
    description:
      "We define the visual language before a single frame is shot. Mood, palette, casting, location, narrative — the full creative brief.",
    icon: "◇",
    caseStudy: "/capabilities",
  },
  {
    id: "social-content",
    title: "Social Content Systems",
    shortDesc: "Content built for discovery",
    description:
      "Reels, stories, drops — designed for how clothing actually gets discovered in 2026. Strategy + production in one system.",
    icon: "○",
    caseStudy: "/capabilities",
  },
  {
    id: "visual-commerce",
    title: "Visual Commerce",
    shortDesc: "Content that converts, not just looks good",
    description:
      "WhatsApp catalogues, website imagery, buyer presentations — every visual format your clothing brand sells through, done well.",
    icon: "◑",
    caseStudy: "/work/wholesalers/charvi-fashion",
  },
];

// ── Client brands (existing case studies) ────────────────────
export const brands = [
  {
    slug: "divyamatrika",
    name: "DivyaMatrika",
    location: "Jaipur",
    category: "Men's Handcrafted Fashion",
    description: "Campaign films and editorial content production",
    type: "brand" as const,
    servicesDelivered: [
      "Campaign Film Production",
      "Creative Direction",
      "Shoot Execution",
      "Look Framing",
      "Product Storytelling",
      "Social-Ready Visual Assets",
    ],
    about:
      "DivyaMatrika is a Jaipur-based men's fashion label specialising in handcrafted traditional and contemporary wear. Known for meticulous craftsmanship and a distinctive design sensibility, DivyaMatrika bridges heritage artistry with modern fashion.",
    outcome:
      "We produced three campaign films — the Sunflower Collection, Heritage Collection and Mandala Magic — building a visual identity that positioned DivyaMatrika as a premium craft fashion label, not just a clothing store.",
    quote: "3DOTCREATIVES understood our aesthetic from the first conversation. The films look exactly like what we imagined for this brand.",
    quoteAuthor: "DivyaMatrika, Jaipur",
    heroImage: "/visuals/divyamatrika-front.jpg",
    galleryImages: [
      "/visuals/photo-01.jpg",
      "/visuals/photo-02.jpg",
      "/visuals/photo-03.jpg",
      "/visuals/photo-04.jpg",
      "/visuals/photo-07.jpg",
      "/visuals/photo-08.jpg",
    ],
    primaryVideo: "Presenting_the_full_look___our_Sunflower_Shirt___matching_Trousers__Made_from_pure_linen__the_shirt_is_breathable__super_absorbent__and_effortlessly_kimckp",
    color: "#8B6F47",
  },
];

export const wholesalers = [
  {
    slug: "shri-radhe-boutique",
    name: "Shri Radhe Boutique",
    location: "Nathdwara",
    category: "Women's Ethnic Wear",
    workType: "Campaign Films + Model Shoot + Catalogue",
    type: "wholesaler" as const,
    overview:
      "Two campaign films and a complete visual system — model-based presentation assets structured for both wholesale communication and social storytelling.",
    utility:
      "Designed to serve dual purposes: professional enough for wholesale buyer meetings while being social media-ready for direct consumer marketing.",
    quote: "The film quality exceeded our expectations. Our customers immediately noticed the difference.",
    quoteAuthor: "Shri Radhe Boutique, Nathdwara",
    heroImage: "/visuals/photo-06.jpg",
    galleryImages: [
      "/visuals/photo-05.jpg",
      "/visuals/photo-06.jpg",
      "/visuals/photo-09.jpg",
      "/visuals/photo-both.jpg",
    ],
    primaryVideo: "fina_l_3_radhey_mp4_egnoau",
    color: "#6B2D3E",
  },
  {
    slug: "charvi-fashion",
    name: "Charvi Fashion by Yavaan Enterprises",
    location: "Surat",
    category: "Designer Wear",
    workType: "Catalogue Shoot + Content Production",
    type: "wholesaler" as const,
    overview:
      "Full catalogue and content production for a Surat-based designer wear line — crafted for both B2B buyer presentations and end-consumer social engagement.",
    utility:
      "A complete visual commerce system: from catalogue clarity for buyers to social-ready content for direct customers.",
    quote: "The catalogue changed how buyers respond to our collection. More orders from the same buyers.",
    quoteAuthor: "Charvi Fashion, Surat",
    heroImage: "/visuals/photo-09.jpg",
    galleryImages: [
      "/visuals/photo-09.jpg",
      "/visuals/photo-07.jpg",
      "/visuals/photo-05.jpg",
      "/visuals/photo-04.jpg",
    ],
    color: "#4A5540",
  },
];

// ── Testimonials ──────────────────────────────────────────────
export const testimonials = [
  {
    quote: "3DOTCREATIVES understood our aesthetic from the first conversation. The films look exactly like what we imagined for this brand.",
    author: "DivyaMatrika",
    location: "Jaipur",
    service: "Campaign Films",
  },
  {
    quote: "The film quality exceeded our expectations. Our customers immediately noticed the difference in how the brand was being presented.",
    author: "Shri Radhe Boutique",
    location: "Nathdwara",
    service: "Women's Campaign Film",
  },
  {
    quote: "The catalogue changed how buyers respond to our collection. We're getting more orders from the same buyers because the product finally looks as good as it is.",
    author: "Charvi Fashion by Yavaan Enterprises",
    location: "Surat",
    service: "Catalogue System",
  },
];

// ── Stats / Trust Proof ───────────────────────────────────────
export const stats = [
  { number: "5", label: "Campaign Films Produced" },
  { number: "3", label: "Brands Worked With" },
  { number: "50+", label: "Visual Assets Delivered" },
  { number: "3", label: "Cities Served" },
];

export const trustProof = [
  "Jaipur · Nathdwara · Surat",
  "Men's Fashion · Women's Ethnic · Designer Wear",
  "Campaign Films · Editorial · Catalogue · Social Content",
  "Creative Direction · Production · Post-Production",
];

// ── Marquee ───────────────────────────────────────────────────
export const marqueeItems = [
  "Campaign Films",
  "Editorial Photography",
  "Creative Direction",
  "Fashion Storytelling",
  "Catalogue Systems",
  "Visual Commerce",
  "Fashion Films",
  "Brand Campaigns",
  "Collection Shoots",
  "Artisan Narratives",
];

// ── Process ───────────────────────────────────────────────────
export const process = [
  {
    step: "01",
    title: "Research",
    description: "We study the brand, the collection, the buyer, and the market before touching a camera.",
  },
  {
    step: "02",
    title: "Moodboard",
    description: "Every shoot begins with a visual brief — palette, references, movement, texture, tone.",
  },
  {
    step: "03",
    title: "Creative Direction",
    description: "We define the visual language: casting, location, styling, narrative.",
  },
  {
    step: "04",
    title: "Production",
    description: "On-location shoot with full direction — model, garment, light, frame, story.",
  },
  {
    step: "05",
    title: "Post Production",
    description: "Colour grade, edit, motion design — everything a fashion film and editorial requires.",
  },
  {
    step: "06",
    title: "Delivery",
    description: "Format-ready assets for every platform: Instagram, WhatsApp, website, lookbook, buyer deck.",
  },
];

// Legacy compatibility
export const reels = [
  { title: "Sunflower Collection Film", client: "DivyaMatrika", category: "Campaign Film" },
  { title: "Heritage Collection Film", client: "DivyaMatrika", category: "Campaign Film" },
  { title: "Mandala Magic Film", client: "DivyaMatrika", category: "Artisan Campaign" },
  { title: "Radhey Collection Film", client: "Shri Radhe Boutique", category: "Campaign Film" },
  { title: "The White Edit", client: "Shri Radhe Boutique", category: "Editorial Film" },
];

export const whyUs = [
  {
    title: "We think in campaigns, not shoots",
    description: "Every project we take begins with a creative brief — narrative, visual language, audience, and intent — before a camera is picked up.",
  },
  {
    title: "Fashion storytelling is our only language",
    description: "We don't photograph product. We build desire. Every frame is constructed around how clothing makes people feel, not just how it looks.",
  },
  {
    title: "We understand visual commerce",
    description: "From premium campaign films to WhatsApp-ready catalogues — we build content systems that work across every format clothing actually sells through.",
  },
  {
    title: "We work with craft, not templates",
    description: "No two collections are the same. Every creative decision — from casting to colour grade — is made for your specific brand, buyer, and market.",
  },
];
