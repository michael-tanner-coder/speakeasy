import React, { useState, useEffect } from "react";
import { auth, firestore } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const ChatSelection = () => {
  const [user] = useAuthState(auth);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const usersRef = firestore.collection("users");
    if (user) {
      usersRef
        .doc(user.uid)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            setChats(doc.data().chats);
          } else {
            console.log("Could not find doc");
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      <h1 style={{ display: "block", color: "white" }}>Select a Chat</h1>
      {chats &&
        chats.map((chat) => {
          return (
            <Link
              style={{ display: "block", color: "white" }}
              to={"/chat?room=" + chat}
            >
              {chat}
            </Link>
          );
        })}
    </div>
  );
};

export default ChatSelection;
