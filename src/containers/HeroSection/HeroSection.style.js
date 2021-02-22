import styled from "styled-components";
import Tones from "../../images/Tones.svg";
import Button from "../../components/Button";

export const SectionWrapper = styled.div`
  margin-top: 20vh;
  margin-bottom: 20vh;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #25272c;
  z-index: 0;
`;

export const BannerImage = styled.div`
  width: 100%;
  z-index: 2;
  padding: 2rem;
  background-image: ${() =>
    `linear-gradient( rgba(0, 0, 0, 0.175), rgba(0, 0, 0, 0.175) ), url(${Tones})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Tagline = styled.p`
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

export const HeroButton = styled(Button)`
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

export const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 515px;

  @media (max-width: 550px) {
    max-width: 250px;
  }
`;

export const HeroItems = styled.div`
  margin: 0 auto;
  width: fit-content;
`;
