import React from "react";

// Images
import Access from "../../images/AccessIcon.svg";
import Include from "../../images/IncludeIcon.svg";
import Clear from "../../images/ClarityIcon.svg";
import QuestionMark from "../../images/QuestionMark.svg";

// Components
import { SectionWrapper, SectionHeading } from "./styles/DetailsSection";
import { DetailGrid } from "./subcomponents/Detail/Detail.styles";
import Detail from "./subcomponents/Detail";

const DetailsSection = () => {
  return (
    <SectionWrapper className="section">
      <SectionHeading className="div-block-5">
        <h2 className="heading">
          Why <br />
          speakEasy
        </h2>
        <img src={QuestionMark} loading="lazy" alt="" />
      </SectionHeading>
      <DetailGrid>
        <div>
          <Detail
            heading="Accessibility"
            paragraph=" speakEasy is designed to be accessible to those who have difficulty
            discerning tone through text."
            image={Access}
          ></Detail>
        </div>
        <div>
          <Detail
            heading="INCLUSIVITY"
            paragraph=" Even people from two different cultures or languages can communicate
            more easily with speakEasy&#x27;s tone indication. Everyone gets a
            chance to be heard and understood."
            image={Include}
          ></Detail>
        </div>
        <div>
          <Detail
            heading="TOTAL CLARITY"
            paragraph="Avoid any frustrating misunderstandings with your friends. With
            speakEasy, you say what you mean and mean what you say."
            image={Clear}
            imageMarginLeft="20px"
          ></Detail>
        </div>
      </DetailGrid>
    </SectionWrapper>
  );
};

export default DetailsSection;
