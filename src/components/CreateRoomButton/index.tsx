import React, { useState, useEffect } from "react";
import Button from "../Button";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/config";

// Types
import Message from "../../models/Message";
import User from "../../models/User";
import Room from "../../models/Room";

const CreateRoomButton = () => {
  const [link, setLink] = useState("");
  const [currentUser, setCurrentUser] = useState<any>();

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

  return (
    <div>
      <Button onClick={() => createRoom()}>Create Room</Button>
      {link && <Link to={"/chat/" + link}>Visit Room: {link}</Link>}
    </div>
  );
};

export default CreateRoomButton;
