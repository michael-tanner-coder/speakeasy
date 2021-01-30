// Button component for signing out of the app

import React from "react";
import { auth } from "../../firebase/config";
import { useRecoilState } from "recoil";
import { userState, chatRooms } from "../../atoms";
import Button from "../Button";

const SignOut = () => {
  const [user, setUser] = useRecoilState(userState);
  const [chats, setChats] = useRecoilState(chatRooms);

  return (
    auth.currentUser && (
      <Button
        variant="primary"
        shade="light"
        className="sign-out"
        onClick={() => {
          auth.signOut();
          setUser({});
          setChats([]);
        }}
      >
        Sign Out
      </Button>
    )
  );
};

export default SignOut;
