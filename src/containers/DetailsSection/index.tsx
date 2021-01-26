import React from "react";
import styled from "styled-components";
import QuestionMark from "../../images/QuestionMark.svg";
import Access from "../../images/AccessIcon.svg";
import Include from "../../images/IncludeIcon.svg";
import Clear from "../../images/ClarityIcon.svg";

// Section
const SectionWrapper = styled.section`
  margin: 25vh auto;
  max-width: 14750px;
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

// Header
interface HeaderProps {
  text: string;
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  h2 {
    margin: 0;
    font-size: 48px;
    font-weight: bold;
  }

  img {
    padding-top: 2rem;
  }
`;

const Header: React.FC<HeaderProps> = ({ text }) => {
  const broken_text = text.split(" ");
  return (
    <HeaderWrapper>
      <div>
        <h2>{broken_text[0]}</h2>

        <h2>{broken_text[1]}</h2>
      </div>
      <img src={QuestionMark} />
    </HeaderWrapper>
  );
};

// Details
const DetailGrid = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  * {
    flex: 1 1 10em;
  }
`;

interface DetailProps {
  heading: string;
  paragraph: string;
  side?: string;
  image?: string;
  imageMarginLeft?: string;
}

const DetailWrapper = styled.div`
  max-width: 260px;
  margin: 0 auto;
  .background {
    background: ${({ theme }) => theme.color.primary.light};
    border-radius: 16px;
    height: 223px;
    width: 251px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img {
    margin: 0 auto;
  }

  h3 {
    font-size: 36px;
    font-weight: normal;
    text-transform: uppercase;
    margin-bottom: 2px;
    margin: 0;
  }

  p {
    margin: 0;
  }

  margin-bottom: 2rem;
`;

const Detail: React.FC<DetailProps> = ({
  heading,
  paragraph,
  image,
  imageMarginLeft,
}) => {
  return (
    <DetailWrapper>
      <div className="background">
        <img
          style={{ marginLeft: imageMarginLeft }}
          width="213px"
          height="115px"
          src={image}
          alt=""
        />
      </div>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </DetailWrapper>
  );
};

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
