import React from "react";
import SELogo from "../../images/SpeakEasyLogo.svg";
import { Link } from "react-router-dom";
import {
  SectionWrapper,
  BannerImage,
  Tagline,
  HeroButton,
  HeroItems,
  Logo,
} from "./HeroSection.style";

interface HeroProps {}

const HeroSectionArea: React.FC<HeroProps> = () => {
  return (
    <SectionWrapper>
      <BannerImage>
        <HeroItems>
          <Logo src={SELogo} loading="lazy" alt="" />
          <Tagline className="paragraph">
            The chat app for maximum clarity
          </Tagline>
          <Link style={{ textDecoration: "none" }} to="/app">
            <HeroButton shade="light" href="#" className="button w-button">
              Make an Account!
            </HeroButton>
          </Link>
        </HeroItems>
      </BannerImage>
    </SectionWrapper>
  );
};

export default HeroSectionArea;
