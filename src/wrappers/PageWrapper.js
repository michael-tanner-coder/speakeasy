import styled from "styled-components/macro";
import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageStyles = styled.div`
  margin: 0 auto;
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.white};
  overflow-x: hidden;
  body {
    background-color: ${({ theme }) => theme.color.background};
  }

  input {
    /* Shape + Size*/
    border: none;
    border-radius: ${({ theme }) => theme.shape.border_radius};
    padding: 0.6rem 1rem;
  }

  .error-text {
    color: ${({ theme }) => theme.color.error.light};
  }

  .success-text {
    color: ${({ theme }) => theme.color.success.light};
  }
`;

const PageWrapper = ({ children }) => {
  return (
    <PageStyles>
      <Navbar />
      {children}
      <Footer />
    </PageStyles>
  );
};

export default PageWrapper;
