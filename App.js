import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppContext from "./contexts/AppContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  const ENV = "dev";
  const [logged, setLogged] = useState(false);
  const [userdata, setUserdata] = useState();

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <AppContext.Provider value={{ userdata, setUserdata, env:ENV, setLogged }}>
        <Stack.Navigator headerMode="none">
          {!logged ? (
            <Stack.Screen name="Login" component={LoginScreen} />
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
}
