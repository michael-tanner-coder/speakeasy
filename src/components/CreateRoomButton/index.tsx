import React from "react";
import Button from "../Button";
import { auth } from "../../firebase/config";

// Types
import Message from "../../models/Message";
import User from "../../models/User";
import Room from "../../models/Room";

const CreateRoomButton = () => {
  const createRoom = () => {
    const myRoom: Room = {
      id: "xcvbnm",
      link: "/chat?=xcvbnm",
      createdBy: (auth.currentUser as unknown) as User,
      users: [(auth.currentUser as unknown) as User],
      messages: [] as Message[],
    };

    console.log(myRoom.createdBy.uid);
  };
  return (
    <div>
      <Button onClick={() => createRoom()}>Create Room</Button>
    </div>
  );
};

export default CreateRoomButton;
