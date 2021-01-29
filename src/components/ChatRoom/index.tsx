// Container component for displaying all messages and chat features (sending messages, selecting tones)

// Main dependencies
import React, { useRef, useState, useEffect } from "react";
import { firestore, firebase, auth } from "../../firebase/config";
import { useParams } from "react-router-dom";
// Hooks
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useLocation } from "react-router-dom";

// Components
import ChatMessage from "../ChatMessage";
import TextField from "../TextField";
import ToneDrawer from "../ToneDrawer";
import OutsideAlerter from "../OutsideAlerter";

// Data + Types
import tones from "../../tones";
import Message from "../../models/Message";
import User from "../../models/User";

// Styles + Icons
import styled from "styled-components";
import ToneIcon from "../../images/ToneButton.svg";
import SendIcon from "../../images/SendIcon.svg";

// Utils
import addChatToUserProfile from "../../util/addChatToUserProfile";

// Styled components
const Tone = styled.div`
  p {
    /* Default */
    cursor: pointer;
    padding: 0.5rem;
    background: none;
    border-radius: ${({ theme }) => theme.shape.border_radius};

    /* States */
    &.selected {
      background: ${({ theme }) => theme.color.primary.light};
      &:hover {
        background: ${({ theme }) => theme.color.primary.light};
      }
    }

    &:hover {
      background: ${({ theme }) => theme.color.primary.light};
    }
  }
`;

const ChatForm = styled.form`
  /* Colors */
  background-color: ${({ theme }) => theme.color.primary.main};

  /* Effects */
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.25);

  /* Layer */
  z-index: ${({ theme }) => theme.z_index.chatbar};

  /* Size + Shape */
  padding: 0.2rem 1rem;
  box-sizing: border-box;
  height: 15vh;
  width: 100%;
  max-width: 728px;

  /* Display */
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Position
  position: fixed;
  bottom: 0; */

  /* Typography */
  font-size: 1.5rem;
`;

const ToneButton = styled.div`
  /* Color */
  background-color: ${({ theme }) => theme.color.primary.light};

  /* Animation */
  transition: all 0.4s;

  /* Shape + Size */
  border-radius: 24px;
  width: 100%;
  height: 100%;
  max-height: 45px;
  max-width: 45px;

  /* Display */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:after {
    position: absolute;
    content: "[tone]";
    color: white;
    font-size: 14px;
    top: 40px;
  }
  &:hover {
    max-width: 60px;
    max-height: 60px;
  }

  &:active {
    background: white;
  }

  &:hover,
  &:active {
    &:after {
      position: absolute;
      content: "";
      color: white;
      font-size: 14px;
      top: 40px;
    }
  }
`;

const SendButton = styled.button`
  /* Color */
  background: none;

  /* Animation */
  transition: all 0.4s;

  /* Shape + Size */
  border: none;
  border-radius: 24px;
  width: 100%;
  height: 100%;
  max-height: 50px;
  max-width: 100;

  /* Spacing */
  margin: auto 5px;

  /* Display */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;

  &:active {
    background: white;
  }

  &:hover {
    background: white;
  }

  &:disabled {
    &:hover {
      background: none;
    }
    img {
      opacity: 0.3;
    }
    cursor: not-allowed;
  }
`;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// Main component
const ChatRoom = () => {
  interface RouteParams {
    id: string;
  }
  // const { id } = useParams<RouteParams>();
  // console.log(id);

  const urlquery = useQuery();
  const id = urlquery.get("room") as string;

  // Data
  const messagesRef = firestore
    .collection("rooms")
    .doc(id)
    .collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25); //Adjust limit and load messages in increments
  const [messages] = useCollectionData<Message>(query, { idField: "id" });

  // State
  const [open, setOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [ID, setID] = useState<any>();
  const [tone, setTone] = useState<string>("");
  const [formValue, setFormValue] = useState<string>("");

  // Dummy element to hold ref first
  const dummy = useRef<HTMLSpanElement>(document.createElement("span"));
  const toneDrawer = useRef<HTMLDivElement>(document.createElement("div"));

  // Functions
  const sendMessage = async (e: any) => {
    e.preventDefault();

    const { uid, photoURL } = (auth.currentUser as unknown) as User;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      tone: tone,
    });

    setFormValue("");

    dummy.current.scrollIntoView({ behavior: "smooth" }); // Scroll to latest message after send
  };

  var scrollToBottom = function () {
    toneDrawer.current.scrollIntoView({ behavior: "smooth" });
  };

  // Logs + Side Effects
  useEffect(() => {
    console.log(open);
  }, [open]);

  useEffect(() => {
    addChatToUserProfile(id);
  }, []);

  // Render
  return (
    <>
      <main>
        {/* Message display */}
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} auth={auth} />
          ))}

        <span ref={dummy}></span>
      </main>

      {/* Chatbar */}
      <ChatForm onSubmit={sendMessage}>
        <TextField
          value={formValue}
          onChange={(e: any) => setFormValue(e.target.value)}
          placeholder="Message ..."
        />

        <SendButton type="submit" disabled={!formValue}>
          <img src={SendIcon} alt="" />
        </SendButton>

        <ToneButton
          className="alerter-item"
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          <img src={ToneIcon} alt="" className="alerter-item" />
        </ToneButton>
      </ChatForm>

      {/* Tone selection */}
      <ToneDrawer open={open} className="alerter-item">
        <div className="tones">
          {tones.map((t) => (
            <Tone>
              <p
                style={{ cursor: "pointer" }}
                className={tone === t ? "selected" : ""}
                onClick={() => {
                  setTone(t);
                  setOpen(false);
                }}
              >
                [{t}]
              </p>
            </Tone>
          ))}
          <Tone>
            <p
              style={{ cursor: "pointer" }}
              className={tone === "" ? "selected" : ""}
              onClick={() => {
                setTone("");
                setOpen(false);
              }}
            >
              NO TONE
            </p>
          </Tone>
        </div>
      </ToneDrawer>
      <div ref={toneDrawer} id="tone-drawer"></div>
    </>
  );
};

export default ChatRoom;
