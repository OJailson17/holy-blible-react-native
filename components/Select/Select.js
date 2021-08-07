import { Picker as SelectPicker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const list = [
  "Gênesis",
  "Êxodos",
  "Mateus",
  "Salmos",
  "Povérbios",
  "Apocalipse",
  "Lucas",
  "João",
  "Judas",
  "1 Reis",
  "2 Reis",
];

export const Select = ({ selectData }) => {
  const [selectedBook, setSelectedBook] = useState("Gênesis");
  const [selectedChapter, setSelectedChapter] = useState("1");
  return (
    <View style={[styles.selectContainer]}>
      {typeof selectData === "object" ? (
        <SelectPicker
          selectedValue={selectedBook}
          onValueChange={(livro) => setSelectedBook(livro)}
          style={{ width: "100%", height: "100%" }}
        >
          {selectData.map((livro) => (
            <SelectPicker.Item
              label={livro?.name}
              value={livro?.abbrev?.pt}
              key={livro?.abbrev?.pt}
            />
          ))}
        </SelectPicker>
      ) : (
        <SelectPicker
          selectedValue={selectedChapter}
          onValueChange={(chapter) => setSelectedChapter(chapter)}
          style={{ width: "100%", height: "100%" }}
        >
          {[...Array(selectData)].map((chapter) => (
            <SelectPicker.Item
              label={String(chapter)}
              value={String(chapter)}
              key={String(chapter)}
            />
          ))}
        </SelectPicker>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    height: 60,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3695c9",
  },
});
