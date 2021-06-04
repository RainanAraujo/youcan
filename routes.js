import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeApp from "./src/pages/welcomeApp";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcomeApp" component={WelcomeApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
