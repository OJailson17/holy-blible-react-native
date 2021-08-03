import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react/cjs/react.development";

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

export const Select = () => {
  const [selectedValue, setSelectedValue] = useState("Salmos");

  return (
    <View style={[styles.selectContainer]}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(livro) => setSelectedValue(livro)}
        style={{ width: "100%", height: "100%" }}
      >
        {list.map((livro) => (
          <Picker.Item label={livro} value={livro} key={livro} />
        ))}
      </Picker>
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
    // position: "relative",
  },
});
