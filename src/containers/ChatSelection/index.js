import React, { useState, useEffect } from "react";
import ChatLink from "../../components/ChatLink";

// State and data
import { useRecoilValue } from "recoil";
import { chatRooms } from "../../state/atoms";
import { firestore } from "../../firebase/config";

// Components
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { Row } from "./styles/ChatSelection";

// Utilities
import removeChatFromUserProfile from "../../util/removeChatFromUserProfie";

// Styles + icons
import OptionsIcon from "../../images/OptionsIcon.svg";
import CloseIcon from "../../images/CloseIcon.svg";

const ChatSelection = () => {
  const chats = useRecoilValue(chatRooms);
  const [messageIndex, setMessageIndex] = useState({});
  const [selectedChat, setSelectedChat] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
      <h1 style={{ display: "block", color: "white" }}>Chats</h1>
      {chats &&
        chats.map((chat) => {
          return (
            <Row>
              <ChatLink
                style={{ display: "block" }}
                to={"/chat?room=" + chat.id}
                name={chat.name}
                recent_message={messageIndex[chat.id]}
                key={chat.id}
              >
                {chat.id}
              </ChatLink>
              <div>
                <Button
                  variant="transparent"
                  onClick={() => {
                    setSelectedChat(chat.id);
                    setModalOpen(true);
                  }}
                >
                  <img src={OptionsIcon} />
                </Button>
              </div>
            </Row>
          );
        })}
      <Modal isOpen={modalOpen}>
        <div className="modal-header">
          <h2>Options</h2>
          <Button
            variant="transparent"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <img src={CloseIcon} width="30px" height="auto" />
          </Button>
        </div>
        <Button
          variant="error"
          onClick={() => {
            console.log("Deleting " + selectedChat);
            removeChatFromUserProfile(selectedChat);
            setModalOpen(false);
          }}
        >
          Delete Chat
        </Button>
      </Modal>
    </div>
  );
};

export default ChatSelection;
