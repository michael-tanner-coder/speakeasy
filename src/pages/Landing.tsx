import React from "react";
import HeroSection from "../containers/HeroSection";
import DetailsSection from "../containers/DetailsSection";
import CTASection from "../containers/CTASection";
import WhatSection from "../containers/WhatSection";

const Landing = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* What */}
      <WhatSection />

      {/* Details */}
      <DetailsSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default Landing;
