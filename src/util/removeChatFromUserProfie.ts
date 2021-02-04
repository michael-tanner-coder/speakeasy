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
            if (doc.data().chats.includes(link)) {
              var chats = doc.data().chats;
              console.log("Before", chats);
              var index = chats.indexOf(link);
              chats.splice(index, 1);
              console.log("After", chats);

              firestore.collection("users").doc(uid).update({
                chats: chats,
              });
            }
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
