import styled from "styled-components/macro";
import ButtonProps from "../Button.interface";
import LightenOrDarkenHexColor from "../../../util/LightenOrDarkenHexColor";

// TODO: Create function to get variant and shade from props

const ButtonWrapper = styled("button")<ButtonProps>`
  /* Colors */
  background: ${(props) => {
    var variant: string;
    var shade: string;

    props.variant ? (variant = props.variant) : (variant = "primary");
    props.shade ? (shade = props.shade) : (shade = "main");

    var color = props.theme.color[variant];
    return color[shade];
  }};
  color: ${({ theme }) => theme.color.text_primary};

  /* Shape + Size*/
  border: none;
  border-radius: ${({ theme }) => theme.shape.border_radius};
  padding: 0.6rem 1rem;

  /* Typography */
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;

  /* Display */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;

  /* States */
  &:disabled {
    color: ${({ theme }) => theme.color.text_disabled};
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) => {
      var variant: string;
      var shade: string;

      props.variant ? (variant = props.variant) : (variant = "primary");
      props.shade ? (shade = props.shade) : (shade = "main");
      var color = props.theme.color[variant];

      return LightenOrDarkenHexColor(color[shade], -20);
    }};
  }

  &:active {
    background-color: ${(props) => {
      var variant: string;
      var shade: string;

      props.variant ? (variant = props.variant) : (variant = "primary");
      props.shade ? (shade = props.shade) : (shade = "main");
      var color = props.theme.color[variant];

      return LightenOrDarkenHexColor(color[shade], 20);
    }};
  }
`;

export default ButtonWrapper;
