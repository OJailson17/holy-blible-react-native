import { Picker as SelectPicker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

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
      <SelectPicker
        selectedValue={selectedValue}
        onValueChange={(livro) => setSelectedValue(livro)}
        style={{ width: "100%", height: "100%" }}
      >
        {list.map((livro) => (
          <SelectPicker.Item label={livro} value={livro} key={livro} />
        ))}
      </SelectPicker>
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
