import { Picker as SelectPicker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [selectedBook, setSelectedBook] = useState("sl");
  const [selectedChapter, setSelectedChapter] = useState("1");
  const [qtdChapters, setQtdChapters] = useState("");

  // Get book data
  const getBook = async () => {
    try {
      const response = await fetch(
        `https://www.abibliadigital.com.br/api/books/${selectedBook}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKdWwgMDggMjAyMSAwNzowODozNCBHTVQrMDAwMC5qYXlsbHNvbnNvdXNhM0BnbWFpbC5jb20iLCJpYXQiOjE2MjU3MjgxMTR9.zhoFn6pH-aOENIf4NKUnzZiC6enc8o8a7Zl6I14n8d0",
          },
        }
      );
      const data = await response.json();
      setQtdChapters(data.chapters);
      // console.log(Number(data.chapters));
    } catch (error) {
      console.log(error);
    }
  };

  // Get chapter data
  const getChapter = async () => {
    try {
      const response = await fetch(
        `https://www.abibliadigital.com.br/api/verses/acf/${selectedBook}/${selectedChapter}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBKdWwgMDggMjAyMSAwNzowODozNCBHTVQrMDAwMC5qYXlsbHNvbnNvdXNhM0BnbWFpbC5jb20iLCJpYXQiOjE2MjU3MjgxMTR9.zhoFn6pH-aOENIf4NKUnzZiC6enc8o8a7Zl6I14n8d0",
          },
        }
      );
      const data = await response.json();
      await AsyncStorage.clear();
      await AsyncStorage.setItem("verses", JSON.stringify(data.verses));
      await AsyncStorage.setItem(
        "chapter",
        JSON.stringify(data.chapter.number)
      );
      await AsyncStorage.setItem("book", data.book.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
    getChapter();
    // console.log(selectedBook, selectedChapter);
  }, [selectedBook]);

  useEffect(() => {
    getChapter();
    // console.log(selectedBook, selectedChapter);
  }, [selectedChapter]);

  return (
    <View style={[styles.selectContainer]}>
      {selectData ? (
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
          onValueChange={(chapter, index) =>
            setSelectedChapter(String(index + 1))
          }
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
