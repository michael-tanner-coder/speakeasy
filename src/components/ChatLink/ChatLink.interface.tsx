import { HTMLProps } from "react";
import Message from "../../models/Message";

export default interface ChatLinkProps {
  to?: string; // To: the button's type, which determines its base color
  recent_message?: Message; // Recent Message:   the shade of the chosen color variant. Can be main, light, dark
  name?: string; //Name:   the shade of the chosen color variant. Can be main, light, dark
}

// See src/theme.js for the full range of possible color variants and shades
