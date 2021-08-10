import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Buttons } from "../../components/Buttons/Buttons";
import { Verse } from "../../components/Verse/Verse";

export const WordOfDayScreen = () => {
  const [randomVerse, setRandomVerse] = useState({});

  const getWordOfDay = async () => {
    try {
      const response = await fetch(
        `https://www.abibliadigital.com.br/api/verses/acf/random`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKdWwgMDggMjAyMSAwNzowODozNCBHTVQrMDAwMC5qYXlsbHNvbnNvdXNhM0BnbWFpbC5jb20iLCJpYXQiOjE2MjU3MjgxMTR9.zhoFn6pH-aOENIf4NKUnzZiC6enc8o8a7Zl6I14n8d0",
          },
        }
      );
      const data = await response.json();
      const verse = {
        number: String(data.number),
        text: data.text,
        name: data.book.name,
        chapter: data.chapter,
      };
      setRandomVerse(verse);
      await AsyncStorage.setItem("verseOfDay", JSON.stringify(verse));
    } catch (error) {
      console.log(error);
    }
  };

  const getVerseFromStorage = async () => {
    const verse = await AsyncStorage.getItem("verseOfDay");
    return verse;
  };

  const checkDate = async () => {
    try {
      const date = await new Date().toLocaleDateString();
      const storageDate = await AsyncStorage.getItem("date");

      if (storageDate === date) return false;

      await AsyncStorage.setItem("date", date);

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkVerse = async () => {
      if ((await checkDate()) === false) {
        setRandomVerse(JSON.parse(await getVerseFromStorage()));
      } else {
        getWordOfDay();
      }
    };
    checkVerse();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Verse info */}
      <View style={styles.verseInfoContainer}>
        <Text style={styles.verseInfo}>
          {randomVerse.name} {randomVerse.chapter}:{randomVerse.number}
        </Text>
      </View>
      {/* Verse */}
      <Verse verses={[randomVerse]} />
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
