import React from "react";
import {
  ChatLinkWrapper,
  ChatLinkText,
  ChatDeleteButton,
} from "./styles/ChatLink";

const ChatLink = ({ to, link }) => {
  return (
    <ChatLinkWrapper>
      <ChatLinkText to={to}>{link}</ChatLinkText>
      <ChatDeleteButton>Delete</ChatDeleteButton>
    </ChatLinkWrapper>
  );
};

export default ChatLink;
