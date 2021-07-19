import { firestore } from "../config/firebase";

const users = firestore.collection("users");
const userConnection = firestore.collection("userConnection");

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
  { name, phoneNumber, age, schooling, photoURL }
) => {
  return new Promise(async (resolve, reject) => {
    try {
      await users.doc(userID).set({
        name,
        phoneNumber,
        age,
        schooling,
        photoURL,
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
  { name, CAPS, schooling, CRP, photoURL }
) => {
  return new Promise(async (resolve, reject) => {
    try {
      await users.doc(userID).set({
        name,
        CAPS,
        schooling,
        CRP,
        photoURL,
        type: "professional",
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const createUserConnection = (userData, targetUserID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const targetUser = await getUserData(targetUserID);
      const duplicate = await userConnection
        .where(userData.type, "==", userData.uid)
        .where(
          userData.type == "patient" ? "professional" : "patient",
          "==",
          targetUserID
        )
        .get();
      if (duplicate.docs.length) {
        throw "Error: Target User is already connected";
      }
      if (userData.type != targetUser.type) {
        await userConnection.add({
          [userData.type]: userData.uid,
          [targetUser.type]: targetUserID,
        });
      } else {
        throw (
          "Error: Target User is not a" +
          (userData.type == "patient" ? "professional" : "patient")
        );
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const getPatientList = (userID) => {
  return new Promise(async (resolve, reject) => {
    userConnection
      .where("professional", "==", userID)
      .get()
      .then((docList) => {
        const patientList = docList.docs.map((doc) => ({
          userConnectionID: doc.id,
          patient: doc.data().patient,
        }));
        resolve(patientList);
      })
      .catch((err) => reject(err));
  });
};

export const getProfessionalList = (userID) => {
  return new Promise(async (resolve, reject) => {
    userConnection
      .where("patient", "==", userID)
      .get()
      .then((docList) => {
        const professionalList = docList.docs.map((doc) => ({
          userConnectionID: doc.id,
          professional: doc.data().professional,
        }));
        resolve(professionalList);
      })
      .catch((err) => reject(err));
  });
};
