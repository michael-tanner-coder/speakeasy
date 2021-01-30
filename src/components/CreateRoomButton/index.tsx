import React, { useState, useEffect, useRef } from "react";

// Data
import { auth } from "../../firebase/config";
import { firestore } from "../../firebase/config";

// Components
import Button from "../Button";
import styled from "styled-components";

// Types
import Room from "../../models/Room";

// Utils
import addChatToUserProfile from "../../util/addChatToUserProfile";
import { init, send } from "emailjs-com";

// Initial process to send over emailJS
init(process.env.REACT_APP_EMAILJS_USER_ID as string);

// Styled Components
const RoomLink = styled.textarea`
  color: black;
`;

const Input = styled.input`
  border: none;
  border-radius: 16px;
  color: gray;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

// Main Component
const CreateRoomButton = () => {
  const [link, setLink] = useState("");
  const [invited, setInvited] = useState(false);
  const [email, setEmail] = useState("");

  const textRef = useRef<HTMLTextAreaElement>(
    document.createElement("textarea")
  );

  const updateUser = () => {
    addChatToUserProfile(link);
  };

  useEffect(() => {
    updateUser();
  }, [link]);

  const createRoom = () => {
    if (auth.currentUser) {
      const myRoom: Room = {
        id: firestore.collection("rooms").doc().id,
        createdBy: auth.currentUser.uid,
        users: [auth.currentUser.uid],
      };

      firestore
        .collection("rooms")
        .doc(myRoom.id)
        .set({ ...myRoom });

      setLink(myRoom.id);
    }
  };

  const copyText = () => {
    console.log("copying");
    textRef.current.select();
    document.execCommand("copy");
    console.log("copied");
  };

  const sendEmail = () => {
    if (auth.currentUser) {
      // send the message and get a callback with an error or details of the message that was sent
      send("default_service", "template_ocqsdjy", {
        from_name: auth.currentUser.email,
        to_name: email,
        invite_link: link,
      })
        .then((res) => {
          if (res.status === 200) {
            setInvited(true);
          }
        })
        // Handle errors here however you like
        .catch((err) => console.error("Failed to send feedback. Error: ", err));
    }
  };

  return (
    <div>
      <Button onClick={() => createRoom()}>Create Room</Button>
      {link && (
        <Wrapper>
          <p>Room Link:</p>
          <RoomLink ref={textRef} value={link} />
          <Input
            type="email"
            onChange={({ target }) => setEmail(target.value)}
          />
          <Button disabled={email ? false : true} onClick={() => sendEmail()}>
            Send
          </Button>
          <Button onClick={() => copyText()}>Copy</Button>
        </Wrapper>
      )}
    </div>
  );
};

export default CreateRoomButton;
