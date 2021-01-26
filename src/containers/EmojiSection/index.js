import React from "react";
import styled from "styled-components";
import QuestionMark from "../../images/QuestionMark.svg";

const SectionWrapper = styled.section`
  margin: 20vh auto;
  max-width: 1475px;
  padding: 2rem;
`;

const SectionHeading = styled.div`
  display: flex;
  flex-direction: row;

  h2 {
    font-size: 48px;
  }

  img {
    margin-bottom: -30px;
  }
`;

const SectionParagraph = styled.p`
  font-size: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 24px;
  }
`;

const EmojiSection = () => {
  return (
    <SectionWrapper>
      <SectionHeading>
        <h2 className="heading">
          But... <br />
          Emoji
        </h2>
        <img src={QuestionMark} loading="lazy" alt="" />
      </SectionHeading>

      <SectionParagraph>
        Emojis are great for implying tone in text, but they have limitations.
        <br />
        <br />
        Emojis may be interpreted differenly in different cultural contexts, and
        their meanings are not standardized for any one culture.
        <br />
        <br />
        Sometimes it’s easier to just be explicit about your intended tone. And
        that’s what speakEasy does best!
      </SectionParagraph>
    </SectionWrapper>
  );
};

export default EmojiSection;
