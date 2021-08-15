import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import * as Random from "expo-random";
import { GlobalContext } from "../../context/GlobalContext";

export const Verse = ({ verses }) => {
  return (
    <View style={styles.verseWrapper}>
      {verses.map((verse) => (
        <View style={styles.verseContainer} key={Random.getRandomBytes(100)}>
          <Text style={styles.verseNum}>{String(verse.number)}</Text>
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
