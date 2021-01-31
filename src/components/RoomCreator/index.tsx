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
import { ButtonWrapper } from "./styles/RoomCreator";

// Main Component
const RoomCreator = () => {
  const [link, setLink] = useState("");

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
    updateUser();
  }, [link]);

  // Render
  return (
    <div>
      <ButtonWrapper>
        <Button shade="light" onClick={() => createRoom()}>
          New Chat
        </Button>
      </ButtonWrapper>
      {link && (
        <>
          <RoomLinkSender link={link} />
          <Button>
            <Link to={"/chat?room=" + link}>Join Chat</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default RoomCreator;
