import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, Platform, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/Home/HomeScreen";
import { BibleScreen } from "./screens/Bible/BibleScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#3695c9",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Bible" component={BibleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
