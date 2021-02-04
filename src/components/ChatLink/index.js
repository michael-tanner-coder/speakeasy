import React from "react";
import {
  ChatLinkWrapper,
  ChatTextWrapper,
  ChatDeleteButton,
  ChatName,
  RecentMessage,
  MessageDate,
  MessageHour,
  MessageDay,
} from "./styles/ChatLink";
import ProfileImage from "../ProfileImage";
import DefaultIcon from "../../images/ProfileIcon.svg";

const ChatLink = ({ to, recent_message, name }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log("Message: ", recent_message);
  return (
    <ChatLinkWrapper to={to}>
      <div>
        <ProfileImage
          src={recent_message ? recent_message.photoURL : DefaultIcon}
          size="50px"
        />
      </div>

      <ChatTextWrapper>
        <ChatName>{name}</ChatName>
        {recent_message && <RecentMessage>{recent_message.text}</RecentMessage>}
      </ChatTextWrapper>
      {(recent_message && (
        <MessageDate>
          <MessageDay>
            {days[recent_message.createdAt.toDate().getDay()]}
          </MessageDay>
          <MessageHour>
            {recent_message.createdAt.toDate().toLocaleTimeString()}
          </MessageHour>
        </MessageDate>
      )) || (
        <MessageDate>
          <p>No messages</p>
        </MessageDate>
      )}
      {/* <ChatDeleteButton>Delete</ChatDeleteButton> */}
    </ChatLinkWrapper>
  );
};

export default ChatLink;
