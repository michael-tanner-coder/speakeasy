import React from "react";
import HeaderProps from "./Header.interface";
import HeaderWrapper from "./Header.styled";
import QuestionMark from "../../images/QuestionMark.svg";

const Header: React.FC<HeaderProps> = ({ text }) => {
  const broken_text = text.split(" ");
  return (
    <HeaderWrapper>
      <div>
        <h2>{broken_text[0]}</h2>

        <h2>{broken_text[1]}</h2>
      </div>
      <img src={QuestionMark} />
    </HeaderWrapper>
  );
};

export default Header;
