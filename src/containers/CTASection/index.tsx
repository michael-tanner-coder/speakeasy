import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import PhoneImg from "../../images/Phone.png";
const SectionWrapper = styled.section`
  margin: 25vh auto;
  max-width: 14750px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CTAButton = styled(Button)`
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
  background: white;
  color: ${({ theme }) => theme.color.primary.light};
  border: 3px solid ${({ theme }) => theme.color.primary.light};
  margin: 0 auto;

  &:hover {
    color: white;
  }
`;

const SectionHeading = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  h2 {
    font-size: 36px;
    font-weight: bold;
  }

  img {
    margin-bottom: 30px;
    margin-left: 15px;
  }
`;

const Col = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Phone = styled.img`
  max-width: 450px;
`;

const CTASection = () => {
  return (
    <SectionWrapper>
      <Col>
        <Phone src={PhoneImg} loading="lazy" alt="" />
        <SectionHeading className="div-block-3">
          <h2 className="heading-4">Join the Fun</h2>
          <img
            src="https://uploads-ssl.webflow.com/5f4ac872d0772879163d4751/600b35ce4fddaea120c6b836_ExMark.svg"
            loading="lazy"
            alt=""
          />
        </SectionHeading>
        <CTAButton href="#" className="button w-button">
          Make an Account
        </CTAButton>
      </Col>
    </SectionWrapper>
  );
};

export default CTASection;
