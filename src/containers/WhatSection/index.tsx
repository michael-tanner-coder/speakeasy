import React from "react";
import Question from "../../images/QuestionMark.svg";
import {
  SectionWrapper,
  SectionHeading,
  SectionParagraph,
  SectionColumns,
  SectionImage,
  SectionSubheading,
} from "./WhatSection.styles";
import ToneIndicators from "../../images/ToneIndicators.svg";
import ToneSelection from "../../images/ToneSelection.svg";

const WhatSection = () => {
  return (
    <SectionWrapper>
      <SectionHeading>
        <h2>
          What is
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
          <SectionImage src={ToneIndicators} loading="lazy" alt="" />
        </div>
        <div>
          <SectionSubheading className="heading-6">
            Just select one of these!
          </SectionSubheading>
          <SectionImage src={ToneSelection} loading="lazy" alt="" />
        </div>
      </SectionColumns>
    </SectionWrapper>
  );
};

export default WhatSection;
