import styled from "styled-components/macro";
import Section from "../Section";

export const SectionWrapper = styled.div`
  ${Section};
`;

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: row;

  h2 {
    font-size: 48px;
  }

  img {
    margin-bottom: -45px;
  }
`;

export const SectionParagraph = styled.p`
  font-size: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 24px;
  }
`;

export const SectionColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;

export const SectionImage = styled.img`
  width: 100%;
  height: auto;
`;

export const SectionSubheading = styled.h3`
  font-size: 32px;
`;
