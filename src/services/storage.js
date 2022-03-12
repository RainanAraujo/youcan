import { storage } from "../config/firebase";

export const uploadFile = (userID, fileName, blob) => {
  return new Promise(async (resolve, reject) => {
    storage
      .ref(userID)
      .child(fileName)
      .put(blob)
      .then(async (res) => {
        const link = await res.ref.getDownloadURL();
        resolve(link);
      })
      .catch((err) => reject(err));
  });
};
