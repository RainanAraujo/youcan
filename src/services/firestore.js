import { firestore } from "../config/firebase";

const users = firestore.collection("users");

export const isRegistered = (userID) => {
  return new Promise(async (resolve, reject) => {
    const user = await users.doc(userID).get();
    if (user.exists) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};
