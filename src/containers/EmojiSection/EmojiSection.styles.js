import styled from "styled-components/macro";
import Section from "../Section";
export const SectionWrapper = styled.section`
  ${Section};
`;

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: row;

  h2 {
    font-size: 48px;
  }

  img {
    margin-bottom: -30px;
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
