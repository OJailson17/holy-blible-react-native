import { Picker as SelectPicker } from "@react-native-picker/picker";
import React from "react";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { REACT_APP_API_TOKEN } from "@env";

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
            Authorization: `Bearer ${REACT_APP_API_TOKEN}`,
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
