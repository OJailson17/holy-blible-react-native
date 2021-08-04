import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import fakeVerseList from "../../utils/fakeVerseList";

export const Verse = () => {
  return (
    <View style={styles.verseWrapper}>
      {fakeVerseList.map((verse) => {
        if (verse.number === 2) {
          return (
            <View style={styles.verseContainer} key={verse.number}>
              <Text style={styles.verseNum}>{verse.number}</Text>
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
  },
  verseContainer: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
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
