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
import Menu from "./src/components/Menu";
import QuizDiary from "./src/pages/QuizDiary";

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
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
