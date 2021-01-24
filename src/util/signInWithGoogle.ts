import { firebase, auth } from "../firebase/config";

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

export default signInWithGoogle;
