import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container w-container">
        <nav role="navigation" className="nav-menu w-nav-menu">
          <a
            href="#"
            className="nav-link w-nav-link"
            onClick={() => setPage("app")}
          >
            App
          </a>
          <a
            href="#"
            className="nav-link w-nav-link"
            onClick={() => setPage("contact")}
          >
            Contact
          </a>
        </nav>
        <div className="w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
