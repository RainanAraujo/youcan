import { firestore } from "../config/firebase";
import { formatDate } from "../utils/date";
import firebase from "firebase";
import { add } from "react-native-reanimated";

const users = firestore.collection("users");
const userConnection = firestore.collection("userConnection");
const questions = firestore.collection("questions");
const answers = firestore.collection("answers");
const meet = firestore.collection("meet");
const alerts = firestore.collection("alerts");

const usersCache = {};

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
    if (userID in usersCache) {
      resolve(usersCache[userID]);
    }
    users
      .doc(userID)
      .get()
      .then((user) => {
        if (user.exists) {
          const userData = {
            uid: user.id,
            ...user.data(),
          };
          usersCache[userID] = userData;
          resolve(userData);
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
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
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
          ...doc.data(),
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
          ...doc.data(),
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

export const deleteQuestion = (questionID) => {
  return new Promise(async (resolve, reject) => {
    questions
      .doc(questionID)
      .delete()
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const createAnswer = (
  userID,
  questionID,
  { dataType, data, questionText }
) => {
  return new Promise(async (resolve, reject) => {
    const formattedDate = formatDate();

    await users.doc(userID).update({
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    });

    answers
      .doc(questionID + "_" + formattedDate)
      .set({
        questionID,
        questionText,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        dataType,
        data,
      })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const getAnswers = (questionIDList, fromDate = new Date(0)) => {
  return new Promise(async (resolve, reject) => {
    answers
      .where("questionID", "in", questionIDList)
      .where("createdAt", ">", fromDate)
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

export const getMeets = (userID) => {
  return new Promise(async (resolve, reject) => {
    meet
      .where("participants", "array-contains", userID)
      .get()
      .then((docList) => {
        const meetList = docList.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(meetList);
      })
      .catch((err) => reject(err));
  });
};

export const addMeet = (professionalID, patientID, meetingData) => {
  return new Promise(async (resolve, reject) => {
    meet
      .add({
        participants: [professionalID, patientID],
        ...meetingData,
      })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const deleteMeet = async (meetID) => {
  return meet.doc(meetID).delete();
};

export const createAlert = async (userID, { tags, textOrAudio }) => {
  return new Promise(async (resolve, reject) => {
    await users.doc(userID).update({
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    });
    alerts
      .add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        author: userID,
        tags,
        textOrAudio,
        dataType: "alert",
      })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const getAlerts = (userID, fromDate = new Date(0)) => {
  console.log(fromDate);
  return new Promise(async (resolve, reject) => {
    alerts
      .where("author", "==", userID)
      .where("createdAt", ">", fromDate)
      .get()
      .then((docList) => {
        const alertsList = docList.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(alertsList);
      })
      .catch((err) => reject(err));
  });
};
