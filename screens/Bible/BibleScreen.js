import React, { useState } from "react";
import { useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Select } from "../../components/Select/Select";
import { Verse } from "../../components/Verse/Verse";
import fakeVerseList from "../../utils/fakeVerseList";
import styles from "./Bible.style";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function BibleScreen() {
  const [verses, setVerses] = useState([]);
  const [bookName, setBookName] = useState("");

  const { books, book, chapter, setChapter, setNewTestament, qtdChapters } =
    useContext(GlobalContext);

  // Get chapter data
  const getChapter = async () => {
    try {
      const response = await fetch(
        `https://www.abibliadigital.com.br/api/verses/acf/${book}/${chapter}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKdWwgMDggMjAyMSAwNzowODozNCBHTVQrMDAwMC5qYXlsbHNvbnNvdXNhM0BnbWFpbC5jb20iLCJpYXQiOjE2MjU3MjgxMTR9.zhoFn6pH-aOENIf4NKUnzZiC6enc8o8a7Zl6I14n8d0",
          },
        }
      );
      const data = await response.json();
      setVerses(data.verses);
      setBookName(data?.book?.name);
    } catch (error) {
      console.log(error);
    }
  };

  const goPrev = () => {
    const number = Number(chapter);
    const chapterValue = String(number - 1);

    if (number <= 1) {
      return;
    } else {
      setChapter(chapterValue);
    }
  };

  const goNext = () => {
    const number = Number(chapter);
    const chapterValue = String(number + 1);

    if (number >= qtdChapters) {
      return;
    } else {
      setChapter(chapterValue);
      console.log(chapterValue);
    }
  };

  useEffect(() => {
    getChapter();
  }, [book, chapter]);

  return (
    <View style={styles.container}>
      {/* Selects */}
      <View style={{ width: "90%" }}>
        <Text style={styles.label}>Escolha um livro</Text>
        <Select selectData={books} />

        <Text style={styles.label}>Escolha um capítulo</Text>
        <Select />
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          width: Dimensions.get("window").width,
        }}
      >
        {/* Capítulo */}
        <View style={styles.chapterInfoContainer}>
          <Text style={styles.chapterInfo}>
            {bookName}:{chapter}
          </Text>
        </View>

        {/* Versículos */}
        <Verse verses={verses ? verses : fakeVerseList} />

        {/* Paginação */}
        <View style={styles.paginationBtnContainer}>
          <TouchableOpacity style={styles.paginationBtn} onPress={goPrev}>
            <Text style={styles.btnText}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paginationBtn} onPress={goNext}>
            <Text style={styles.btnText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
