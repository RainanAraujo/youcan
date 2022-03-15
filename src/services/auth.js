import { auth } from "../config/firebase";
import firebase from "firebase";
import * as Google from "expo-google-app-auth";

export const currentUser = () => auth.currentUser;

const config = {
  androidClientId:
    "984739924695-6v82llqe6ivnmcprsnj80bkojrnlcrb6.apps.googleusercontent.com",
  iosClientId:
    "984739924695-r3a84528dt66a3e4q2jgudn43mapsfta.apps.googleusercontent.com",
  scopes: ["profile", "email"],
};

export const signInWithGoogleAsync = () => {
  return new Promise(async (resolve, reject) => {
    const result = await Google.logInAsync(config);

    if (result.type === "success") {
      const { idToken, accessToken } = result;
      userAccessToken = accessToken;
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      );
      resolve(await auth.signInWithCredential(credential));
    } else {
      reject({ cancelled: true });
    }
  });
};

export const signOut = async () => {
  await auth.signOut();
};
