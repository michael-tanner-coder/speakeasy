import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/config";
import styled from "styled-components";

// Types
import Message from "../../models/Message";
import User from "../../models/User";
import Room from "../../models/Room";

const RoomLink = styled.textarea`
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const CreateRoomButton = () => {
  const [link, setLink] = useState("");
  const [currentUser, setCurrentUser] = useState<any>();
  const textRef = useRef<HTMLTextAreaElement>(
    document.createElement("textarea")
  );

  useEffect(() => {
    if (auth.currentUser) {
      firestore
        .collection("users")
        .doc(auth.currentUser.uid)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log(doc.data());
            setCurrentUser(doc.data());
          } else {
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, []);

  const updateUser = () => {
    if (auth.currentUser && link) {
      firestore
        .collection("users")
        .doc(auth.currentUser.uid)
        .update({
          chats: [...currentUser.chats, link],
        });
    }
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
    console.log("sending email");
  };

  return (
    <div>
      <Button onClick={() => createRoom()}>Create Room</Button>
      {link && (
        <Wrapper>
          <p>Room Link:</p>
          <RoomLink ref={textRef} value={link} />
          <Button onClick={() => sendEmail()}>Send</Button>
          <Button onClick={() => copyText()}>Copy</Button>
        </Wrapper>
      )}
    </div>
  );
};

export default CreateRoomButton;
