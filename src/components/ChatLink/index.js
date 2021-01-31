import React from "react";
import {
  ChatLinkWrapper,
  ChatLinkText,
  ChatDeleteButton,
} from "./styles/ChatLink";

const ChatLink = ({ to, recent_message, name }) => {
  console.log("Message: ", recent_message);
  return (
    <ChatLinkWrapper>
      <ChatLinkText to={to}>{name}</ChatLinkText>
      {recent_message && <p>{recent_message.text}</p>}
      {recent_message && <p>{recent_message.createdAt.toDate().toString()}</p>}
      <ChatDeleteButton>Delete</ChatDeleteButton>
    </ChatLinkWrapper>
  );
};

export default ChatLink;
