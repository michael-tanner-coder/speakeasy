import Message from "./Message";
import User from "./User";

type Room = {
  id: string;
  createdBy: User;
  link: string;
  users: User[];
  messages: Message[];
};

export default Room;
