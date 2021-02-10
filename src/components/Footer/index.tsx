import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.div`
  background: ${({ theme }) => theme.color.primary.light};
  padding: 1rem 2rem;
  a {
    color: white;
    text-decoration: none;
    padding: 5px;
    margin: 0;

    &:hover {
      background: white;
      color: ${({ theme }) => theme.color.primary.light};
      border-radius: 8px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <FooterWrapper className="footer">
      <Row className="w-row">
        <Col className="w-col w-col-4">
          <h2>Contact</h2>
          <LinkBlock className="div-block-2">
            <Link to="/contact" className="nav-link footer-link">
              Contact Form
            </Link>
            <a href="#" className="nav-link footer-link">
              Email: michaelmontytanner@gmail.com
            </a>
          </LinkBlock>
        </Col>
        <Col className="w-col w-col-4">
          <h2>About the Developer</h2>
          <LinkBlock className="div-block-2">
            <a
              href="https://michaeltannercoder.com"
              className="nav-link footer-link"
            >
              My other projects
            </a>
            <a href="https://bestfit.design" className="nav-link footer-link">
              My business
            </a>
          </LinkBlock>
        </Col>
        <Col className="w-col w-col-4">
          <h2>Support</h2>
          <LinkBlock className="div-block-2">
            <a
              href="https://ko-fi.com/michaeltanner"
              className="nav-link footer-link"
            >
              Buy me a coffee!{" "}
            </a>
          </LinkBlock>
        </Col>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
