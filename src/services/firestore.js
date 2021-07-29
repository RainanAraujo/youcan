import { firestore, firebase } from "../config/firebase";
import { getFormattedDate } from "../utils/date";

const users = firestore.collection("users");
const userConnection = firestore.collection("userConnection");
const questions = firestore.collection("questions");
const answers = firestore.collection("answers");

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
          id: doc.id,
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
          id: doc.id,
          professional: doc.data().professional,
        }));
        resolve(professionalList);
      })
      .catch((err) => reject(err));
  });
};

export const editUserConnection = (userConnectionID, newData) => {
  return new Promise(async (resolve, reject) => {
    userConnection
      .doc(userConnectionID)
      .update(newData)
      .then(() => resolve(professionalList))
      .catch((err) => reject(err));
  });
};

export const getQuestionList = (userConnectionList) => {
  return new Promise(async (resolve, reject) => {
    questions
      .where("userConnectionID", "in", userConnectionList)
      .get()
      .then((docList) => {
        const questionList = docList.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(questionList);
      })
      .catch((err) => reject(err));
  });
};

export const createQuestion = ({
  userConnectionID,
  name,
  description,
  dataType,
  options,
}) => {
  return new Promise(async (resolve, reject) => {
    questions
      .add({
        userConnectionID,
        name,
        description,
        dataType,
        options,
      })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const editQuestion = (
  questionID,
  { userConnectionID, name, description, dataType, options }
) => {
  return new Promise(async (resolve, reject) => {
    questions
      .doc(questionID)
      .update({
        userConnectionID,
        name,
        description,
        dataType,
        options,
      })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const createAnswer = (questionID, { dataType, data }) => {
  return new Promise(async (resolve, reject) => {
    const formattedDate = getFormattedDate();

    console.log(data);

    answers
      .doc(questionID + "_" + formattedDate)
      .set({
        questionID,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        dataType,
        data,
      })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const getAnswers = (questionIDList) => {
  return new Promise(async (resolve, reject) => {
    answers
      .where("questionID", "in", questionIDList)
      .get()
      .then((docList) => {
        const answersList = docList.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(answersList);
      })
      .catch((err) => reject(err));
  });
};
