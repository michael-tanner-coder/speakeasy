import { HTMLProps } from "react";
import Message from "../../models/Message";

export default interface ChatMessageProps extends HTMLProps<HTMLDivElement> {
  auth: any; //Firebase authentication used to determine if a message was sent or received
  message: Message; //Message data to display in the component
}
