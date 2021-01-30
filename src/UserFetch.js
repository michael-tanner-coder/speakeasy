import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "./atoms";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebase/config";

const UserFetch = () => {
  const [authState] = useAuthState(auth);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    console.log("Auth state");
    console.log(authState);

    if (authState) {
      firestore
        .collection("users")
        .doc(authState.uid)
        .get()
        .then((user) => {
          console.log(user.data());
          setUser(user.data());
        });
    }
  }, [authState]);

  useEffect(() => {
    console.log("User state");
    console.log(user);
  }, [user]);

  return <></>;
};

export default UserFetch;
