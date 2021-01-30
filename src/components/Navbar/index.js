import React from "react";
import styled from "styled-components";
import MenuIcon from "../../images/MenuIcon.svg";
import { Link } from "react-router-dom";
const NavWrapper = styled.nav`
  background-color: ${({ theme }) => theme.color.primary.light};
  overflow: hidden;
  padding: 1em;
  position: fixed;
  width: 100%;
  top: 0;

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

const NavbarComponent = () => {
  const burgerToggle = () => {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };

  const menuItems = [
    { name: "Home", page: "/" },
    { name: "App", page: "/app" },
    { name: "Contact", page: "/contact" },
  ];

  return (
    <NavWrapper>
      <div className="navWide">
        <div className="wideDiv">
          {menuItems.map((item) => {
            return (
              <Link href="#" to={item.page}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="navNarrow">
        <img src={MenuIcon} onClick={() => burgerToggle()} />
        <div className="narrowLinks">
          {menuItems.map((item) => {
            return (
              <Link href="#" to={item.page}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </NavWrapper>
  );
};

export default NavbarComponent;
