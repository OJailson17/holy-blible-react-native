import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Buttons } from "../../components/Buttons/Buttons";
import { Verse } from "../../components/Verse/Verse";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const verse = [
  {
    number: 2,
    text: "Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.",
  },
];

export const WordOfDayScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Verse info */}
      <View style={styles.verseInfoContainer}>
        <Text style={styles.verseInfo}>Salmos 91:2</Text>
      </View>

      {/* Verse */}
      <Verse verses={verse} />

      <Buttons />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  verseInfoContainer: {
    width: "90%",
    marginTop: 20,
  },
  verseInfo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});
