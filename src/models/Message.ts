type Message = {
  id: string;
  createdAt: Date;
  photoURL: string;
  text: string;
  tone?: string;
  uid: string;
};

export default Message;
