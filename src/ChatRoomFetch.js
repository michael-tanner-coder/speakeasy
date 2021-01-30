import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState, chatRooms } from "./atoms";
import { firestore } from "./firebase/config";

const ChatRoomFetch = () => {
  const [user, setUser] = useRecoilState(userState);
  const [chats, setChats] = useRecoilState(chatRooms);

  useEffect(() => {
    console.log("User state");
    console.log(user);
    if (user.chats) {
      user.chats.map((chat) => {
        firestore
          .collection("rooms")
          .doc(chat)
          .get()
          .then((room) => {
            setChats((prevChats) => [...prevChats, { ...room.data() }]);
          });
      });
    }
  }, [user]);

  useEffect(() => {
    console.log("Chat state");
    console.log(chats);
  }, [chats]);

  return <></>;
};

export default ChatRoomFetch;
