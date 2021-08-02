import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Select } from "../../components/Select/Select";

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
