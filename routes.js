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

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcomeApp">
        <Stack.Screen
          name="welcomeApp"
          component={WelcomeApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homePatient"
          component={HomePatient}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="homeProfessional"
          component={HomeProfessional}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="patientDetails"
          component={PatientDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="questionEditor"
          component={QuestionEditor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="quizManage"
          component={QuizManage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
