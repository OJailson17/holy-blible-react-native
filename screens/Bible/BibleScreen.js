import React, { useState } from "react";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Select } from "../../components/Select/Select";
import { Verse } from "../../components/Verse/Verse";

export function BibleScreen() {
  return (
    <View style={styles.container}>
      <View style={{ width: "90%" }}>
        <Text style={styles.label}>Escolha um livro</Text>
        <Select />

        <Text style={[styles.label, { marginTop: 10 }]}>
          Escolha um capítulo
        </Text>
        <Select />
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          // backgroundColor: "red",
          width: Dimensions.get("window").width,
        }}
      >
        <Verse />
        <View style={styles.paginationBtnContainer}>
          <TouchableOpacity style={styles.paginationBtn}>
            <Text style={styles.btnText}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paginationBtn}>
            <Text style={styles.btnText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  paginationBtnContainer: {
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    paddingHorizontal: 10,
  },
  paginationBtn: {
    height: 40,
    width: "40%",
    backgroundColor: "#3695c9",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
});