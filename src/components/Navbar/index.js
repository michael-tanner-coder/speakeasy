import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background-color: ${({ theme }) => theme.color.primary.light};
  overflow: hidden;
  padding: 1em;

  a {
    color: #fff;
  }

  a:visited {
    color: #fff;
  }

  border-bottom: 1px solid #000;

  .navWide {
    display: none;
    margin: 0 auto;

    .wideDiv {
      text-align: center;

      a {
        text-decoration: none;
        display: inline-block;
        // Adjust padding to increase/decrease the space between links.
        padding: 0 2em;
      }
    }
  }

  // Navbar is set to default with the "hamburger" and links on the left
  // side of the screen. To move to the right of the screen, simply
  // change the three "float: Left;" references to read "float: right;".
  .navNarrow {
    i {
      float: left;
      cursor: pointer;
      color: #fff;
    }

    .narrowLinks {
      display: none;

      a {
        text-decoration: none;
        display: block;
        float: left;
        clear: left;
        padding: 0.5em 0;
      }
    }
  }

  // Adjust breakpoint as desired to select when the "hamburger" menu is
  // replaced by just the links.
  @media (min-width: 480px) {
    .navWide {
      display: block;
    }

    .navNarrow {
      display: none;
    }
  }
`;

const NavbarComponent = ({ setPage }) => {
  const burgerToggle = () => {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };

  return (
    <NavWrapper>
      <div className="navWide">
        <div className="wideDiv">
          <a href="#" onClick={() => setPage("landing")}>
            Home
          </a>
          <a href="#" onClick={() => setPage("app")}>
            App
          </a>
          <a href="#" onClick={() => setPage("contact")}>
            Contact
          </a>
        </div>
      </div>
      <div className="navNarrow">
        <i className="fa fa-bars fa-2x" onClick={() => burgerToggle()}></i>
        <div className="narrowLinks">
          <a href="#" onClick={() => burgerToggle()}>
            Link 1
          </a>
          <a href="#" onClick={() => burgerToggle()}>
            Link 2
          </a>
          <a href="#" onClick={() => burgerToggle()}>
            Link 3
          </a>
        </div>
      </div>
    </NavWrapper>

    // <div
    //   data-collapse="medium"
    //   data-animation="default"
    //   data-duration="400"
    //   role="banner"
    //   className="navbar w-nav"
    // >
    //   <div className="container w-container">
    //     <nav role="navigation" className="nav-menu w-nav-menu">
    //       <a
    //         href="#"
    //         className="nav-link w-nav-link"
    //         onClick={() => setPage("app")}
    //       >
    //         App
    //       </a>
    //       <a
    //         href="#"
    //         className="nav-link w-nav-link"
    //         onClick={() => setPage("contact")}
    //       >
    //         Contact
    //       </a>
    //     </nav>
    //     <div
    //       className="w-nav-button"
    //       onClick={() => console.log("Menu opened")}
    //     >
    //       <div className="w-icon-nav-menu"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavbarComponent;
