import React from "react";
import styled from "styled-components";
import QuestionMark from "../../images/QuestionMark.svg";
import Image1 from "../../images/Img1.png";
import Image2 from "../../images/Img2.png";
import Image3 from "../../images/Img3.png";

// Section
const SectionWrapper = styled.div`
  margin: 25vh 0;
  padding: 4rem;
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
}

const rotation = "-180deg";

const DetailWrapper = styled.div`
  position: relative;
  padding: 10px;
  .background {
    background: #25272c;
    max-width: 320px;
    max-height: 173px;
    height: 100%;
  }
  h3 {
    margin: 0;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: normal;
    text-align: right;
  }

  .background-heading {
    position: absolute;
    text-align: right;
    top: 0;
    right: 0;
    transform: rotate(-270deg);
    opacity: 0.18;

    /* Legacy vendor prefixes that you probably don't need... */

    /* Safari */
    -webkit-transform: rotate(-270deg);

    /* Firefox */
    -moz-transform: rotate(-270deg);

    /* IE */
    -ms-transform: rotate(-270deg);

    /* Opera */
    -o-transform: rotate(-270deg);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

const Detail: React.FC<DetailProps> = ({ heading, paragraph, side, image }) => {
  return (
    <DetailWrapper>
      <div className="background">
        <img width="213px" height="115px" src={Image1} alt="" />
        <h3>{heading}</h3>
        <h3 className="background-heading">{heading}</h3>
      </div>
      <p>{paragraph}</p>
    </DetailWrapper>
  );
};

const DetailsSection = () => {
  return (
    <div className="section">
      <div className="div-block-5">
        <h2 className="heading">
          Why <br />
          speakEasy
        </h2>
        <img
          src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b35c39a21887ea45d225b_QuestionMark.svg"
          loading="lazy"
          alt=""
        />
      </div>
      <div className="columns-3 w-row">
        <div className="column-2 w-col w-col-4">
          <div className="div-block">
            <img
              src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b13282d1a9774bd88be28_Img1.png"
              loading="lazy"
              alt=""
              className="corner-img"
            />
            <h3 className="heading-2 detail-heading">Accessibility</h3>
            <h3 className="heading-2 bg-text">Accessibility</h3>
          </div>
          <p className="paragraph-2">
            speakEasy is designed to be accessible to those who have difficulty
            discerning tone through text.
          </p>
        </div>
        <div className="column-3 w-col w-col-4">
          <div className="div-block">
            <img
              src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b20813e156195a958516d_Img2.png"
              loading="lazy"
              alt=""
              className="corner-img"
            />
            <h3 className="heading-2 detail-heading">INCLUSIVITY</h3>
            <h3 className="heading-2 bg-text inclusive-head">INCLUSIVITY</h3>
          </div>
          <p className="paragraph-2">
            Even people from two different cultures or languages can communicate
            more easily with speakEasy&#x27;s tone indication. Everyone gets a
            chance to be heard and understood.
          </p>
        </div>
        <div className="column-4 w-col w-col-4">
          <div className="div-block">
            <img
              src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b208cd592494fb36fcb5e_Img3.png"
              loading="lazy"
              alt=""
              className="corner-img"
            />
            <h3 className="heading-2 detail-heading">TOTAL CLARITY</h3>
            <h3 className="heading-2 bg-text">TOTAL CLARITY</h3>
          </div>
          <p className="paragraph-2">
            Avoid any frustrating misunderstandings with your friends. With
            speakEasy, you say what you mean and mean what you say.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
