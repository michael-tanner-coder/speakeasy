// Proxy component for the app header

import React from "react";
import HeaderWrapper from "./styles/Header";
import HeaderProps from "./Header.interface";

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export default Header;
