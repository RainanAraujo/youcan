import { auth, firebase } from "../config/firebase";
import * as Google from "expo-google-app-auth";

export const currentUser = () => firebase.auth().currentUser;

export const signInWithGoogleAsync = () => {
  return new Promise(async (resolve, reject) => {
    const result = await Google.logInAsync({
      androidClientId:
        "984739924695-6v82llqe6ivnmcprsnj80bkojrnlcrb6.apps.googleusercontent.com",
      iosClientId:
        "984739924695-r3a84528dt66a3e4q2jgudn43mapsfta.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      const { idToken, accessToken } = result;
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      );
      resolve(await firebase.auth().signInWithCredential(credential));
    } else {
      reject({ cancelled: true });
    }
  });
};

export const signOut = async () => {
  await Google.logOutAsync();
};
