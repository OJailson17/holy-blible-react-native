import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Buttons } from "../../components/Buttons/Buttons";
import { Loader } from "../../components/Loader/Loader";
import { Verse } from "../../components/Verse/Verse";
import { GlobalContext } from "../../context/GlobalContext";

export const WordOfDayScreen = ({ navigation }) => {
  const [randomVerse, setRandomVerse] = useState({});
  const { setChapter, setBook, book } = useContext(GlobalContext);
  const [verse, setVerse] = useState({});
  const [isVisible, setIsVisible] = useState(true);

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
        abbrev: data.book.abbrev.pt,
      };
      setChapter(verse.chapter);
      setRandomVerse(verse);
      setBook(verse.abbrev);
      setVerse(verse);
      setIsVisible(false);
      await AsyncStorage.setItem("verseOfDay", JSON.stringify(verse));
    } catch (error) {
      console.log(error);
    }
  };

  const getVerseFromStorage = async () => {
    try {
      const verse = await AsyncStorage.getItem("verseOfDay");
      // await AsyncStorage.removeItem("date");
      setVerse(JSON.parse(verse));
      setBook(JSON.parse(verse).abbrev);
      const chapter = await JSON.parse(verse).chapter;
      setChapter(String(chapter));
      setIsVisible(false);
      return verse;
    } catch (error) {
      console.log(error);
    }
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
      {isVisible ? (
        <Loader />
      ) : (
        <>
          {/* Verse info */}
          <View style={styles.verseInfoContainer}>
            <Text style={styles.verseInfo}>
              {randomVerse.name} {randomVerse.chapter}:{randomVerse.number}
            </Text>
          </View>
          {/* Verse */}
          <Verse verses={[randomVerse]} />
          <Buttons navigation={navigation} book={book} verse={verse} />
        </>
      )}
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
