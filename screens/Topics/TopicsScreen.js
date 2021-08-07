import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Verse } from "../../components/Verse/Verse";

const verse = [
  {
    number: 2,
    text: "Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.",
  },
];

export const TopicsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Topic screen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: 20,
  },
});
