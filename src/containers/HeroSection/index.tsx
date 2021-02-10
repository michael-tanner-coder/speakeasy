import React from "react";
import Button from "../../components/Button";
import styled from "styled-components";
import SELogo from "../../images/SpeakEasyLogo.svg";
import Tones from "../../images/Tones.svg";
import { Link } from "react-router-dom";

const SectionWrapper = styled.div`
  margin-top: 20vh;
  margin-bottom: 20vh;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #25272c;
  z-index: 0;
`;

const BannerImage = styled.div`
  width: 100%;
  z-index: 2;
  padding: 2rem;
  background-image: ${(props) => `url(${Tones})`};
  background-repeat: repeat;
  background-size: contain;
`;

const Tagline = styled.p`
  font-family: Roboto, sans-serif;
  color: #f1f1f1;
  font-size: 18px;

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 479px) {
    font-size: 16px;
  }
`;

const HeroButton = styled(Button)`
  width: auto;
  height: auto;
  max-width: 300px;
  padding-right: 40px;
  padding-left: 40px;
  border-radius: 32px;
  font-family: Roboto, sans-serif;
  text-align: center;
  text-decoration: none;
  background-clip: border-box;
  background: white;
  color: ${({ theme }) => theme.color.primary.light};
  border: 3px solid ${({ theme }) => theme.color.primary.light};

  &:hover {
    color: white;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 515px;

  @media (max-width: 550px) {
    max-width: 250px;
  }
`;

const HeroItems = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

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
