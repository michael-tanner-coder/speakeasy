import styled from "styled-components";
import Section from "../../Section";

// Section
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
