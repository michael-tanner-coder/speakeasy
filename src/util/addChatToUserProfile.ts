import { auth, firestore } from "../firebase/config";

const addChatToUserProfile = (link: string) => {
  if (auth.currentUser && link) {
    const uid = auth.currentUser.uid;

    firestore
      .collection("users")
      .doc(uid)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log(doc.data());

          const update = (doc: any) => {
            firestore
              .collection("users")
              .doc(uid)
              .update({
                chats: [...doc.data().chats, link],
              });
          };

          update(doc);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }
};

export default addChatToUserProfile;
