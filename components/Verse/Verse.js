import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Random from "expo-random";
import { GlobalContext } from "../../context/GlobalContext";
import { addFavorite } from "../../helper/addFavorite";
import { MyModal } from "../Modal/Modal";

export const Verse = ({ verses, biblePage }) => {
  const { bookName, chapter, book } = useContext(GlobalContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [addedVerse, setAddedVerse] = useState({});

  const handlePress = (verse) => {
    setModalVisible(true);
    const verseObj = {
      number: String(verse.number),
      text: verse.text,
      name: bookName,
      chapter: chapter,
      abbrev: book,
    };
    setAddedVerse(verseObj);
  };

  const addFavoriteFunction = () => {
    setModalVisible(false);
    addFavorite(addedVerse);
    alert("Verso adicionado aos favoritos");
  };
  return (
    <View style={styles.verseWrapper}>
      <MyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        textBtn={"Adicionar"}
        modalText={"Deseja adicionar aos favoritos?"}
        handleFunction={addFavoriteFunction}
      />

      {verses.map((verse) => {
        if (biblePage) {
          return (
            <TouchableOpacity
              style={styles.verseContainer}
              key={Random.getRandomBytes(100)}
              onLongPress={() => handlePress(verse)}
            >
              <Text style={styles.verseNum}>{String(verse.number)}</Text>
              <Text style={styles.verseText}>{verse.text}</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <View
              style={styles.verseContainer}
              key={Random.getRandomBytes(100)}
            >
              <Text style={styles.verseNum}>{String(verse.number)}</Text>
              <Text style={styles.verseText}>{verse.text}</Text>
            </View>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  verseWrapper: {
    marginTop: 20,
    marginBottom: 20,
    width: "95%",
  },
  verseContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 2,
    paddingHorizontal: 10,
  },
  verseNum: {
    fontSize: 15,
    color: "gray",
    fontWeight: "bold",
  },
  verseText: {
    fontSize: 17,
    marginLeft: 5,
    paddingTop: 2,
  },
});
