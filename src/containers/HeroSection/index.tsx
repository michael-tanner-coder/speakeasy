import React from "react";
import Button from "../../components/Button";
import styled from "styled-components";
import SELogo from "../../images/SpeakEasyLogo.svg";

const SectionWrapper = styled.div`
  height: fit-content;
  margin-top: 20vh;
  margin-bottom: 20vh;
  padding: 2rem;
  background-color: #25272c;
  background-image: ${(props) => `url("../../images/Tones.svg")`};
  background-repeat: no-repeat;
  background-size: cover;

  .logo-column {
    margin: 0 auto;

    width: fit-content;
  }
`;

const Tagline = styled.p`
  font-family: Roboto, sans-serif;
  color: #f1f1f1;
  font-size: 18px;

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 479px) {
    font-size: 18px;
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
`;
interface HeroProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}
const HeroSectionArea: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <SectionWrapper>
      <div className="logo-column">
        <Logo src={SELogo} loading="lazy" alt="" />
        <Tagline className="paragraph">
          The chat app for maximum clarity
        </Tagline>
        <HeroButton
          shade="light"
          href="#"
          className="button w-button"
          onClick={() => setPage("app")}
        >
          Join the Beta!
        </HeroButton>
      </div>
    </SectionWrapper>
  );
};

export default HeroSectionArea;
