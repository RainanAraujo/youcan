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

export const getUserData = (userID) => {
  return new Promise(async (resolve, reject) => {
    users
      .doc(userID)
      .get()
      .then((user) => {
        if (user.exists) {
          resolve({
            uid: user.id,
            ...user.data(),
          });
        } else {
          reject("user not found");
        }
      })
      .catch((err) => reject(err));
  });
};

export const registerPatient = (
  userID,
  { name, phoneNumber, age, schooling }
) => {
  return new Promise(async (resolve, reject) => {
    try {
      await users.doc(userID).set({
        name,
        phoneNumber,
        age,
        schooling,
        type: "patient",
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const registerProfessional = (
  userID,
  { name, CAPS, schooling, CRP }
) => {
  return new Promise(async (resolve, reject) => {
    try {
      await users.doc(userID).set({
        name,
        CAPS,
        schooling,
        CRP,
        type: "professional",
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const registerProfessional = (
  userID,
  { name, CAPS, schooling, CRP }
) => {
  return new Promise(async (resolve, reject) => {
    try {
      await users.doc(userID).set({
        name,
        CAPS,
        schooling,
        CRP,
        type: "professional",
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
