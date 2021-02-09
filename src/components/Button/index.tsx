// Proxy component for an HTML button

import React from "react";
import ButtonWrapper from "./styles/Button";
import ButtonProps from "./Button.interface";

const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return (
    <ButtonWrapper {...(restProps as any)} data-testid="button">
      {children}
    </ButtonWrapper>
  );
};

export default Button;
