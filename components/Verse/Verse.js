import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";

export const Verse = ({ verses }) => {
  const { book, chapter, verse } = useContext(GlobalContext);

  return (
    <View style={styles.verseWrapper}>
      {verses.map((verse) => (
        <View style={styles.verseContainer} key={verse.number}>
          <Text style={styles.verseNum}>{verse.number}</Text>
          <Text style={styles.verseText}>{verse.text}</Text>
        </View>
      ))}
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
