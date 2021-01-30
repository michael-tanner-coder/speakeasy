import React from "react";
import ChatLink from "../../components/ChatLink";
import { useRecoilValue } from "recoil";
import { chatRooms } from "../../atoms";

const ChatSelection = () => {
  const chats = useRecoilValue(chatRooms);

  return (
    <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
      <h1 style={{ display: "block", color: "white" }}>Select a Chat</h1>
      {chats &&
        chats.map((chat) => {
          return (
            <ChatLink
              style={{ display: "block", color: "white" }}
              to={"/chat?room=" + chat.id}
              link={chat.id}
            >
              {chat.id}
            </ChatLink>
          );
        })}
    </div>
  );
};

export default ChatSelection;
