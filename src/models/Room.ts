import Message from "./Message";
import User from "./User";

type Room = {
  id: string;
  createdBy: string | null;
  users: string[];
  name: string;
};

export default Room;
