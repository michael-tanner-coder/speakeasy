import React from "react";
import PhoneImg from "../../images/Phone.png";

import { Link } from "react-router-dom";
import {
  SectionWrapper,
  SectionHeading,
  CTAButton,
  Col,
  Phone,
} from "./styles/CTASection";

const CTASection = () => {
  return (
    <SectionWrapper>
      <Col>
        <Phone src={PhoneImg} loading="lazy" alt="" />
        <SectionHeading>
          <h2 className="heading-4">Join the Fun</h2>
          <img
            src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b35ce4fddaea120c6b836_ExMark.svg"
            loading="lazy"
            alt=""
          />
        </SectionHeading>
        <Link style={{ textDecoration: "none" }} to="/app">
          <CTAButton href="#" className="button w-button">
            Make an Account
          </CTAButton>
        </Link>
      </Col>
    </SectionWrapper>
  );
};

export default CTASection;
