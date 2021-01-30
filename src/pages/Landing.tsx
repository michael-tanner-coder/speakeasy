import React from "react";
import HeroSection from "../containers/HeroSection";
import DetailsSection from "../containers/DetailsSection";
import CTASection from "../containers/CTASection";
import WhatSection from "../containers/WhatSection";
import EmojiSection from "../containers/EmojiSection";

interface LandingProps {}
const Landing: React.FC<LandingProps> = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* What */}
      <WhatSection />

      {/* Emoji */}
      <EmojiSection />

      {/* Details */}
      <DetailsSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default Landing;
