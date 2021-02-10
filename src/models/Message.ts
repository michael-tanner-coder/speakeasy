import firbase from "firebase";
type Message = {
  id: string;
  createdAt: firebase.firestore.Timestamp;
  photoURL: string;
  text: string;
  tone?: string;
  uid: string;
};

export default Message;
