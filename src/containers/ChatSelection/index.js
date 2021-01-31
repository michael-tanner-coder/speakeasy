import React, { useState, useEffect } from "react";
import ChatLink from "../../components/ChatLink";
import { useRecoilValue } from "recoil";
import { chatRooms } from "../../atoms";
import { firestore } from "../../firebase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";

const ChatSelection = () => {
  const chats = useRecoilValue(chatRooms);
  const [messageIndex, setMessageIndex] = useState({});

  useEffect(() => {
    chats.map((chat) => {
      const messagesRef = firestore
        .collection("rooms")
        .doc(chat.id)
        .collection("messages");

      const message = messagesRef.orderBy("createdAt", "desc").limit(1);

      message.get().then((msgs) => {
        msgs.forEach((message) => {
          setMessageIndex((prevmessageIndex) => {
            var entry = { ...prevmessageIndex };
            entry[chat.id] = message.data();
            return entry;
          });
        });
      });
    });
  }, [chats]);

  return (
    <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
      <h1 style={{ display: "block", color: "white" }}>Select a Chat</h1>
      {chats &&
        chats.map((chat) => {
          return (
            <ChatLink
              style={{ display: "block" }}
              to={"/chat?room=" + chat.id}
              name={chat.name}
              recent_message={messageIndex[chat.id]}
            >
              {chat.id}
            </ChatLink>
          );
        })}
    </div>
  );
};

export default ChatSelection;
