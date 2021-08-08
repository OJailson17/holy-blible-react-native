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

export function BibleScreen() {
  const [books, setBooks] = useState([]);
  const [verses, setVerses] = useState();
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");

  const getBooks = async () => {
    try {
      const response = await fetch(
        "https://www.abibliadigital.com.br/api/books",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKdWwgMDggMjAyMSAwNzowODozNCBHTVQrMDAwMC5qYXlsbHNvbnNvdXNhM0BnbWFpbC5jb20iLCJpYXQiOjE2MjU3MjgxMTR9.zhoFn6pH-aOENIf4NKUnzZiC6enc8o8a7Zl6I14n8d0",
          },
        }
      );
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVerses = async () => {
    try {
      const verse = await AsyncStorage.getItem("verses");
      const chapter = await AsyncStorage.getItem("chapter");
      const book = await AsyncStorage.getItem("book");

      setBook(book);
      setChapter(chapter);
      setVerses(JSON.parse(verse));
      // console.log(chapter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
    getVerses();
  }, []);

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
            {book}:{chapter}
          </Text>
        </View>

        {/* Versículos */}
        <Verse verses={verses ? verses : fakeVerseList} />

        {/* Paginação */}
        <View style={styles.paginationBtnContainer}>
          <TouchableOpacity style={styles.paginationBtn}>
            <Text style={styles.btnText}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paginationBtn}>
            <Text style={styles.btnText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
