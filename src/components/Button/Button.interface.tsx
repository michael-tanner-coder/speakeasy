import { HTMLProps } from "react";

export default interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: string; // Variant: the button's type, which determines its base color
  shade?: string; // Shade:   the shade of the chosen color variant. Can be main, light, dark
}

// See src/theme.js for the full range of possible color variants and shades
