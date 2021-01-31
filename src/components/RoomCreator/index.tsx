import React, { useState, useEffect } from "react";

// State + Data
import { auth } from "../../firebase/config";
import { firestore } from "../../firebase/config";

// Components
import Button from "../Button";
import RoomLinkSender from "../RoomLinkSender";
import { Link } from "react-router-dom";

// Types
import Room from "../../models/Room";

// Utils
import addChatToUserProfile from "../../util/addChatToUserProfile";

// Styles
import {
  ButtonWrapper,
  RoomNameInputWrapper,
  RoomNameHeader,
  RoomNameInput,
  RoomLinkHeader,
} from "./styles/RoomCreator";

// Main Component
const RoomCreator = () => {
  const [link, setLink] = useState("");
  const [enterName, setEnterName] = useState(false);
  const [roomName, setRoomName] = useState("");

  // Functions
  const updateUser = () => {
    addChatToUserProfile(link);
  };

  const createRoom = () => {
    if (auth.currentUser) {
      const myRoom: Room = {
        id: firestore.collection("rooms").doc().id,
        createdBy: auth.currentUser.uid,
        users: [auth.currentUser.uid],
        name: roomName,
      };

      firestore
        .collection("rooms")
        .doc(myRoom.id)
        .set({ ...myRoom });

      setLink(myRoom.id);
    }
  };

  // Side effects
  useEffect(() => {
    // updateUser();
  }, [link]);

  // Render
  return (
    <div>
      <ButtonWrapper>
        <Button shade="light" onClick={() => setEnterName(true)}>
          New Chat
        </Button>
      </ButtonWrapper>

      {enterName && (
        <RoomNameInputWrapper>
          <RoomNameHeader>Enter a Room Name</RoomNameHeader>
          <RoomNameInput
            type="text"
            placeholder="Room name ..."
            onChange={({ target }) => setRoomName(target.value)}
          />
          <Button
            disabled={roomName === ""}
            shade="light"
            onClick={() => {
              createRoom();
              setEnterName(false);
            }}
          >
            Create Room
          </Button>
        </RoomNameInputWrapper>
      )}
      {link && (
        <RoomNameInputWrapper>
          <RoomLinkHeader>Chat Room Created!</RoomLinkHeader>
          <RoomNameHeader>Here is your chat room link:</RoomNameHeader>
          <RoomLinkSender link={link} />
          <Button shade="light">
            <Link to={"/chat?room=" + link}>Enter Chat</Link>
          </Button>
        </RoomNameInputWrapper>
      )}
    </div>
  );
};

export default RoomCreator;
