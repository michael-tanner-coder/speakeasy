import { HTMLProps } from "react";

export default interface ToneDrawerProps extends HTMLProps<HTMLDivElement> {
  open?: boolean; //Determines if the drawer should be open or closed
}
