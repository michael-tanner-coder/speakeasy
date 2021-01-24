import styled from "styled-components/macro";
import TextFieldProps from "../TextField.interface";

const TextFieldWrapper = styled.input<TextFieldProps>`
  /* Color */
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.text_secondary};

  /* Size + Spacing */
  width: 100%;
  padding: 0.8rem 1rem;

  /* Text */
  line-height: 1.5;
  font-size: 1.2rem;

  /* Shape */
  outline: none;
  border: none;
  border-radius: 50px;
`;

export default TextFieldWrapper;
