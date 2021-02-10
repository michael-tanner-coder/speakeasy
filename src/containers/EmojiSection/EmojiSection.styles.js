import styled from "styled-components/macro";

export const SectionWrapper = styled.section`
  margin: 20vh auto;
  max-width: 1475px;
  padding: 2rem;
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
