import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, Platform, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/Home/HomeScreen";
import { BibleScreen } from "./screens/Bible/BibleScreen";
import { WordOfDayScreen } from "./screens/WordOfDay/WordOfDayScreen";
import { NewTestamentScreen } from "./screens/NewTestament/NewTestamentScreen";
import { OldTestamentScreen } from "./screens/OldTestament/OldTestamentScreen";
import { FavoriteVersesScreen } from "./screens/FavoriteVerses/FavoriteVersesScreen";
import { TopicsScreen } from "./screens/Topics/TopicsScreen";
import { GlobalContextProvider } from "./context/GlobalContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <GlobalContextProvider>
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
            <Stack.Screen name="Biblia" component={BibleScreen} />
            <Stack.Screen name="Palavra do dia" component={WordOfDayScreen} />
            <Stack.Screen
              name="Novo Testamento"
              component={NewTestamentScreen}
            />
            <Stack.Screen
              name="Velho Testamento"
              component={OldTestamentScreen}
            />
            <Stack.Screen
              name="Versículos Favoritos"
              component={FavoriteVersesScreen}
            />
            <Stack.Screen
              name="Versículos para Vida"
              component={TopicsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalContextProvider>
    </>
  );
}
