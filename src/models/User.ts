type User = {
  uid: string;
  name?: string;
  photoURL: string;
  friends?: User[];
  chats: string[];
};

export default User;
