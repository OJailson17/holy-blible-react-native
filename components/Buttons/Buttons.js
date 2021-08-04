import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Buttons = () => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Adicionar aos favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
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
