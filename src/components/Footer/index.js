import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="w-row">
        <div className="w-col w-col-4">
          <h2>Contact</h2>
          <div className="div-block-2">
            <a href="#" className="nav-link footer-link">
              Contact Form
            </a>
            <a href="#" className="nav-link footer-link">
              Email: michaelmontytanner@gmail.com
            </a>
          </div>
        </div>
        <div className="w-col w-col-4">
          <h2>About the Developer</h2>
          <div className="div-block-2">
            <a
              href="https://michaeltannercoder.com"
              className="nav-link footer-link"
            >
              My other projects
            </a>
            <a href="https://bestfit.design" className="nav-link footer-link">
              My business
            </a>
          </div>
        </div>
        <div className="w-col w-col-4">
          <h2>Support</h2>
          <div className="div-block-2">
            <a
              href="https://ko-fi.com/michaeltanner"
              className="nav-link footer-link"
            >
              Buy me a coffee!{" "}
            </a>
            <a href="#" className="nav-link footer-link">
              Support cool apps on Patreon!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
