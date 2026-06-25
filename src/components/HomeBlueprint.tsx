"use client";

import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/Marquee";
import SelectedWork from "@/components/sections/SelectedWork";
import VideoCollections from "@/components/sections/VideoCollections";
import EditorialSpread from "@/components/sections/EditorialSpread";
import FeaturedCaseStudy from "@/components/sections/FeaturedCaseStudy";
import ProcessSection from "@/components/sections/ProcessSection";
import Testimonials from "@/components/sections/Testimonials";
import FounderLetter from "@/components/sections/FounderLetter";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomeBlueprint() {
  return (
    <div>
      {/* 1. Cinematic hero — full viewport, Cloudinary video */}
      <HeroSection />

      {/* 2. Marquee — italic Cormorant, editorial services */}
      <MarqueeStrip />

      {/* 3. Selected Works — editorial gallery, asymmetric */}
      <SelectedWork />

      {/* 4. Campaign Films — dark section, cinematic cards */}
      <VideoCollections />

      {/* 5. Editorial Photography — magazine spreads */}
      <EditorialSpread />

      {/* 6. Case Study — DivyaMatrika */}
      <FeaturedCaseStudy />

      {/* 7. Process — The Method */}
      <ProcessSection />

      {/* 8. Testimonials + Stats — dark, quiet luxury */}
      <Testimonials />

      {/* 9. Founder Letter — editorial, personal */}
      <FounderLetter />

      {/* 10. Final CTA — cinematic dark */}
      <FinalCTA />
    </div>
  );
}
