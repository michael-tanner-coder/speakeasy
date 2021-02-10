import styled from "styled-components/macro";
import Tones from "../../../images/Tones.svg";
import Button from "../../../components/Button";

export const SectionWrapper = styled.section`
  margin: 25vh auto 0 auto;
  max-width: 1475px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: ${(props) => `url(${Tones})`};
  background-repeat: repeat;
  background-size: contain;
`;

export const CTAButton = styled(Button)`
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
  margin: 0 auto;

  &:hover {
    color: white;
  }
`;

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  h2 {
    font-size: 36px;
    font-weight: bold;
  }

  img {
    margin-bottom: 30px;
    margin-left: 15px;
  }
`;

export const Col = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Phone = styled.img`
  max-width: 450px;
  width: 100%;
`;
