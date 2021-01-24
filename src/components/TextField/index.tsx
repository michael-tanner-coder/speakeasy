// Proxy component for an HTML text input

import React from "react";
import TextFieldWrapper from "./styles/TextField";
import TextFieldProps from "./TextField.interface";

const TextField: React.FC<TextFieldProps> = ({ ...restProps }) => {
  return <TextFieldWrapper {...(restProps as any)} />;
};

export default TextField;
