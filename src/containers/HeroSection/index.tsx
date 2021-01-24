import React from "react";
import Button from "../../components/Button";

import styled from "styled-components";

const SectionWrapper = styled.div`
  position: relative;
  max-height: 300px;
  margin-top: 20vh;
  margin-bottom: 20vh;
  background-color: #25272c;
`;

const Phone = styled.img`
  position: absolute;
  left: 50vw;
  top: -173px;
  bottom: auto;
  height: auto;
  max-width: 100%;
  float: none;
  clear: none;
  margin-top: 25px;

  @media (max-width: 991px) {
    left: 30vw;
  }
  @media (max-width: 767px) {
    margin-top: 50px;
    left: 30vw;
  }
  @media (max-width: 479px) {
    left: 30vw;
  }
`;

const Columns = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: 0px;
  padding: 25px 220px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 0;
  margin-right: 0;

  @media screen and (max-width: 991px) {
    padding-right: 60px;
    padding-left: 60px;
  }

  @media screen and (max-width: 767px) {
    padding-right: 40px;
    padding-left: 40px;
  }

  @media (max-width: 479px) {
    .column {
      display: none;
    }
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const Tagline = styled.p`
  font-family: Roboto, sans-serif;
  color: #f1f1f1;
  font-size: 18px;

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 479px) {
    font-size: 18px;
  }
`;

const HeroButton = styled(Button)`
  width: auto;
  height: auto;
  max-width: 300px;
  padding-right: 40px;
  padding-left: 40px;
  border-radius: 32px;
  font-family: Roboto, sans-serif;
  text-align: center;
  text-decoration: none;
  background-clip: border-box;
`;

const Col = styled.div`
  position: relative;
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  width: 50%;
`;

const Logo = styled.img``;

const HeroSectionComponent = () => {
  return (
    <SectionWrapper className="hero">
      <Phone
        src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600afd4756aca64de16005be_AngledPhone.png"
        loading="lazy"
        width="601"
        sizes="(max-width: 767px) 100vw, 601px"
        srcSet="
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600afd4756aca64de16005be_AngledPhone-p-500.png   500w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600afd4756aca64de16005be_AngledPhone-p-800.png   800w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600afd4756aca64de16005be_AngledPhone-p-1080.png 1080w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600afd4756aca64de16005be_AngledPhone-p-1600.png 1600w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600afd4756aca64de16005be_AngledPhone-p-2000.png 2000w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600afd4756aca64de16005be_AngledPhone-p-2600.png 2600w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600afd4756aca64de16005be_AngledPhone-p-3200.png 3200w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600afd4756aca64de16005be_AngledPhone.png        4004w
        "
        alt=""
        className="image-2"
      />
      <Columns className="columns w-row">
        <Col className="w-col w-col-6">
          <Logo
            src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600afb6756aca61f2b5ffd3d_SpeakEasyLogo.svg"
            loading="lazy"
            alt=""
          />
          <Tagline className="paragraph">
            The chat app for maximum clarity
          </Tagline>
          <HeroButton shade="light" href="#" className="button w-button">
            Join the Beta!
          </HeroButton>
        </Col>
        <Col className="column w-col w-col-6"></Col>
      </Columns>
    </SectionWrapper>
  );
};

const HeroSectionArea = () => {
  return <HeroSectionComponent></HeroSectionComponent>;
};

export default HeroSectionArea;
