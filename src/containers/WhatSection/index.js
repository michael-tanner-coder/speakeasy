import React from "react";
import Question from "../../images/QuestionMark.svg";
import styled from "styled-components";

const SectionWrapper = styled.div`
  margin: 20vh auto;
  max-width: 1475px;
  padding: 2rem;
`;

const SectionHeading = styled.div`
  display: flex;
  flex-direction: row;
`;

const SectionParagraph = styled.p`
  font-size: 18px;
`;

const SectionColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;

const SectionImage = styled.img`
  width: 100%;
  height: auto;
`;

const SectionSubheading = styled.h3`
  font-size: 32px;
`;

const WhatSection = () => {
  return (
    <SectionWrapper>
      <SectionHeading>
        <h2>
          What
          <br />
          is
          <br />
          speakEasy
        </h2>
        <img src={Question} loading="lazy" alt="" />
      </SectionHeading>
      <SectionParagraph>
        speakEasy is a chat app designed for the clearest communication of tone
        in your texts. <br />
        <br />
        Instead of using emoji or unconventional indicators (e.g., /s for
        sarcasm, or /j for joking), messages can be labeled with your intended
        tone.
      </SectionParagraph>
      <SectionColumns>
        <div>
          <SectionSubheading className="heading-5">
            Instead of memorizing these...
          </SectionSubheading>
          <SectionImage
            src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600c9e677e43edb4fcd53551_Tone%20Indicators.svg"
            loading="lazy"
            alt=""
          />
        </div>
        <div>
          <SectionSubheading className="heading-6">
            Just select one of these!
          </SectionSubheading>
          <SectionImage
            src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600c9e1f75f36b670f5c7c5b_TONE%20SELECTION.svg"
            loading="lazy"
            alt=""
          />
        </div>
      </SectionColumns>
    </SectionWrapper>
  );
};

export default WhatSection;
