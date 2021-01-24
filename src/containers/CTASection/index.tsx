import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
const SectionWrapper = styled.div`
  margin: 25vh;
  padding: 4rem;
`;

const Heading = () => {
  return <h2>NOW IN BETA</h2>;
};

const SubHeading = () => {
  return (
    <div>
      <h3>Join the fun</h3>
      <img src="" alt="" />
    </div>
  );
};

const Phone = styled.img``;

const CTASection = () => {
  return (
    // <SectionWrapper>
    //   <Phone />
    //   <Heading />
    //   <SubHeading />
    //   <Button shade="light">Make an Account</Button>
    // </SectionWrapper>
    <div className="cta">
      <div className="container-2 w-container">
        <h1 className="heading-3">NOW IN BETA</h1>
        <img
          src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b42ebe847f1806befad90_Phone%20(1).png"
          loading="lazy"
          sizes="(max-width: 479px) 100vw, 550px"
          srcSet="
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b42ebe847f1806befad90_Phone%20(1)-p-500.png   500w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b42ebe847f1806befad90_Phone%20(1)-p-800.png   800w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b42ebe847f1806befad90_Phone%20(1)-p-1080.png 1080w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b42ebe847f1806befad90_Phone%20(1)-p-1600.png 1600w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b42ebe847f1806befad90_Phone%20(1)-p-2000.png 2000w,
          https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b42ebe847f1806befad90_Phone%20(1).png        2416w
        "
          alt=""
          className="image-3"
        />
        <div className="div-block-3">
          <h1 className="heading-4">Join the Fun</h1>
          <img
            src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b35ce4fddaea120c6b836_ExMark.svg"
            loading="lazy"
            alt=""
            className="image-4"
          />
        </div>
        <a href="#" className="button w-button">
          Make an Account
        </a>
      </div>
    </div>
  );
};

export default CTASection;
