import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeApp from "./src/pages/WelcomeApp";
import Register from "./src/pages/Register";
import HomePatient from "./src/pages/HomePatient";
import HomeProfessional from "./src/pages/HomeProfessional";
import PatientDetails from "./src/pages/PatientDetails";
import QuestionEditor from "./src/pages/QuestionEditor";
import QuizManage from "./src/pages/QuizManage";
import QuestionPreview from "./src/pages/QuestionPreview";
import QuizDiary from "./src/pages/QuizDiary";
import RegisterEvent from "./src/pages/RegisterEvent";
import Annotation from "./src/pages/Annotation";
import AnnotationEditor from "./src/pages/AnnotationEditor";
import HistoricPanel from "./src/pages/HistoricPanel";
import Historic from "./src/pages/Historic";
import Agenda from "./src/pages/Agenda";
import YourProfessionals from "./src/pages/ YourProfessionals";
import HistoricPatient from "./src/pages/HistoricPatient";
import MedicationManage from "./src/pages/MedicationManage";
import NewAgenda from "./src/pages/NewAgenda";
import MedicationEditor from "./src/pages/MedicationEditor";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="welcomeApp">
        <RootStack.Screen
          name="welcomeApp"
          component={WelcomeApp}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name="homePatient"
          component={HomePatient}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name="homeProfessional"
          component={HomeProfessional}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="patientDetails"
          component={PatientDetails}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="questionEditor"
          component={QuestionEditor}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="questionPreview"
          component={QuestionPreview}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="quizManage"
          component={QuizManage}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="quizDiary"
          component={QuizDiary}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="annotation"
          component={Annotation}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="annotationEditor"
          component={AnnotationEditor}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="historicPanel"
          component={HistoricPanel}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="historic"
          component={Historic}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="agenda"
          component={Agenda}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="newAgenda"
          component={NewAgenda}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="medicationManage"
          component={MedicationManage}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="medicationEditor"
          component={MedicationEditor}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="registerEvent"
          component={RegisterEvent}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="historicPatient"
          component={HistoricPatient}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="yourProfessionals"
          component={YourProfessionals}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
