import React from "react";
import HeroSection from "../containers/HeroSection";
import DetailsSection from "../containers/DetailsSection";
import CTASection from "../containers/CTASection";
import WhatSection from "../containers/WhatSection";
interface LandingProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}
const Landing: React.FC<LandingProps> = ({ setPage }) => {
  return (
    <div>
      {/* Hero */}
      <HeroSection setPage={setPage} />

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
