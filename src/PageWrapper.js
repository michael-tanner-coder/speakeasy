import styled from "styled-components/macro";
import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import "./pagestyles.css";

const PageStyles = styled.div`
  margin: 0 auto;
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.white};
  overflow-x: hidden;
  body {
    background-color: ${({ theme }) => theme.color.background};
  }
`;

const PageWrapper = ({ children, setPage }) => {
  return (
    <PageStyles>
      <Navbar setPage={setPage} />
      {children}
      <Footer />
    </PageStyles>
  );
};

export default PageWrapper;
