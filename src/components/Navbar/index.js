import React from "react";
import styled from "styled-components";
import MenuIcon from "../../images/MenuIcon.svg";
import { Link } from "react-router-dom";
import NavWrapper from "./styles/Navbar";

const NavbarComponent = () => {
  const burgerToggle = () => {
    let linksEl = document.querySelector(".narrowLinks");

    if (linksEl) {
      if (linksEl.style.display === "block") {
        linksEl.style.display = "none";
      } else {
        linksEl.style.display = "block";
      }
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
