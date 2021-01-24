import React from "react";
import ChatMessageWrapper from "./styles/ChatMessage";
import ProfileImage from "../ProfileImage";
import ChatMessageProps from "./ChatMessage.interface";

const ChatMessage: React.FC<ChatMessageProps> = ({
  auth,
  message,
  ...restProps
}) => {
  const { text, uid, photoURL, tone } = message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <ChatMessageWrapper {...(restProps as any)}>
      <div className={`message ${messageClass}`}>
        <ProfileImage
          size="45px"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>
          {text}{" "}
          {tone && (
            <>
              <br />
              <hr />
              {tone}
            </>
          )}
        </p>
      </div>
    </ChatMessageWrapper>
  );
};

export default ChatMessage;
