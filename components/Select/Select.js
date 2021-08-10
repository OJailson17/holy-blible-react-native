import { Picker as SelectPicker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

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
  const { book, setBook, chapter, setChapter, qtdChapters, setQtdChapters } =
    useContext(GlobalContext);

  // Get book data
  const getBook = async () => {
    try {
      const response = await fetch(
        `https://www.abibliadigital.com.br/api/books/${book}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKdWwgMDggMjAyMSAwNzowODozNCBHTVQrMDAwMC5qYXlsbHNvbnNvdXNhM0BnbWFpbC5jb20iLCJpYXQiOjE2MjU3MjgxMTR9.zhoFn6pH-aOENIf4NKUnzZiC6enc8o8a7Zl6I14n8d0",
          },
        }
      );
      const data = await response.json();
      setQtdChapters(data.chapters);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, [book]);

  return (
    <View style={[styles.selectContainer]}>
      {selectData ? (
        <SelectPicker
          selectedValue={book}
          onValueChange={(livro) => setBook(livro)}
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
          selectedValue={chapter}
          onValueChange={(chapter, index) => setChapter(String(index + 1))}
          style={{ width: "100%", height: "100%" }}
        >
          {[...Array(qtdChapters)]?.map((chapter, index) => (
            <SelectPicker.Item
              label={String(index + 1)}
              value={String(index + 1)}
              key={String(index + 1)}
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
