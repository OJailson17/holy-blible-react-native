import React, { useState } from "react";
import { useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Select } from "../../components/Select/Select";
import { Verse } from "../../components/Verse/Verse";
import fakeVerseList from "../../utils/fakeVerseList";
import styles from "./Bible.style";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { createRef } from "react";
import { Loader } from "../../components/Loader/Loader";
import { REACT_APP_API_TOKEN } from "@env";

const scroll = createRef();

export function BibleScreen() {
  const [verses, setVerses] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const {
    books,
    book,
    chapter,
    setChapter,
    setNewTestament,
    qtdChapters,
    setBookName,
    bookName,
  } = useContext(GlobalContext);

  // Get chapter data
  const getChapter = async () => {
    try {
      const response = await fetch(
        `https://www.abibliadigital.com.br/api/verses/acf/${book}/${chapter}`,
        {
          headers: {
            Authorization: `Bearer ${REACT_APP_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setVerses(data.verses);
      setBookName(data?.book?.name);
      setIsVisible(false);
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
    scroll.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  const goNext = () => {
    const number = Number(chapter);
    const chapterValue = String(number + 1);

    if (number >= qtdChapters) {
      return;
    } else {
      setChapter(chapterValue);
    }
    scroll.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  useEffect(() => {
    setIsVisible(true);
    getChapter();
  }, [book, chapter]);

  return (
    <View style={styles.container}>
      {/* Selects */}
      <View style={{ width: "90%" }}>
        <Text style={styles.label}>Escolha um livro</Text>
        <Select selectData={books} />

        <Text style={styles.label}>Escolha um cap??tulo</Text>
        <Select />
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          width: Dimensions.get("window").width,
        }}
        ref={scroll}
      >
        {/* Vers??culos */}
        {isVisible ? (
          <Loader isVisible={isVisible} />
        ) : (
          <>
            {/* Cap??tulo */}
            <View style={styles.chapterInfoContainer}>
              <Text style={styles.chapterInfo}>
                {bookName}:{chapter}
              </Text>
            </View>
            <Verse verses={verses ? verses : fakeVerseList} biblePage={true} />

            {/* Pagina????o */}
            <View style={styles.paginationBtnContainer}>
              <TouchableOpacity style={styles.paginationBtn} onPress={goPrev}>
                <Text style={styles.btnText}>Anterior</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.paginationBtn} onPress={goNext}>
                <Text style={styles.btnText}>Pr??ximo</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}
