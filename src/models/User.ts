type User = {
  uid: string;
  name?: string;
  photoURL: string;
  friends?: User[];
};

export default User;
