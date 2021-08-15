import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addFavorite } from "../../helper/addFavorite";

export const Buttons = ({ navigation, book, verse }) => {
  const { chapter, setBook } = useContext(GlobalContext);

  // !Corrigir essa função
  const readChapter = () => {
    navigation.navigate("Biblia");
    setBook(book);
    // console.log(book, chapter);
  };

  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={() => addFavorite(verse)}>
        <Text style={styles.btnText}>Adicionar aos favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={readChapter}>
        <Text style={styles.btnText}>Ler capítulo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  btn: {
    width: "48%",
    height: 40,
    backgroundColor: "#3695c9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontSize: 15,
  },
});
