import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "./atoms";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebase/config";

const UserFetch = () => {
  const [authState] = useAuthState(auth);
  const [user, setUser] = useRecoilState(userState);

  const fillUserData = async () => {
    console.log("Auth state");
    console.log(authState);

    if (authState) {
      const userRef = firestore.collection("users").doc(authState.uid);
      const doc = await userRef.get();

      if (!doc.exists) {
        await firestore
          .collection("users")
          .doc(authState.uid)
          .set({
            name: "",
            friends: [""],
            chats: [],
            photoURL: authState.photoURL,
          })
          .then(() => {
            firestore
              .collection("users")
              .doc(authState.uid)
              .get()
              .then((user) => {
                setUser(user.data());
              });
          });
      } else {
        firestore
          .collection("users")
          .doc(authState.uid)
          .get()
          .then((user) => {
            console.log(user.data());
            setUser(user.data());
          });
      }
    }
  };

  useEffect(() => {
    fillUserData();
  }, [authState]);

  useEffect(() => {
    console.log("User state");
    console.log(user);
  }, [user]);

  return <></>;
};

export default UserFetch;
