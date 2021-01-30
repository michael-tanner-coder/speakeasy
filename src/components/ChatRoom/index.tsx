// Container component for displaying all messages and chat features (sending messages, selecting tones)

// Main dependencies
import React, { useRef, useState, useEffect } from "react";
import { firestore, firebase, auth } from "../../firebase/config";

// Hooks
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useLocation } from "react-router-dom";

// Components
import ChatMessage from "../ChatMessage";
import TextField from "../TextField";
import ToneDrawer from "../ToneDrawer";

// Data + Types
import tones from "../../tones";
import Message from "../../models/Message";
import User from "../../models/User";

// Styles + Icons
import { Tone, ToneButton, SendButton, ChatForm } from "./styles/ChatRoom";
import ToneIcon from "../../images/ToneButton.svg";
import SendIcon from "../../images/SendIcon.svg";

// Utils
import addChatToUserProfile from "../../util/addChatToUserProfile";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// Main component
const ChatRoom = () => {
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
