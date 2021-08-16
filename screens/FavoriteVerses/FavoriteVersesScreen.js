import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Verse } from "../../components/Verse/Verse";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoriteVersesScreen = () => {
  const [listItems, setListItems] = useState([]);

  const getListItems = async () => {
    const list = await AsyncStorage.getItem("favorites");
    setListItems(JSON.parse(list));
  };

  useEffect(() => {
    getListItems();
  }, []);

  useEffect(() => {
    getListItems();
  }, [listItems]);

  const removeAllFavorites = async () => {
    await AsyncStorage.clear();
  };
  return (
    <ScrollView
      contentContainerStyle={{
        top: 10,
        paddingBottom: 20,
        alignItems: "center",
      }}
    >
      <View style={styles.removeContainer}>
        <TouchableOpacity style={styles.removeBtn}>
          <Text style={styles.removeBtnText} onPress={removeAllFavorites}>
            Remover Tudo
          </Text>
          <MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {listItems?.map((verse, index) => (
        <TouchableOpacity style={styles.container} key={index}>
          <Text style={styles.verseInfo}>
            {verse.name} {verse.chapter}
          </Text>
          <View style={styles.separator}></View>
          <Verse verses={[verse]} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "98%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  verseInfo: {
    width: "90%",
    fontSize: 18,
  },
  separator: {
    width: "90%",
    height: 1.5,
    backgroundColor: "#c4c4c4",
  },
  removeContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  removeBtn: {
    width: 150,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  removeBtnText: {
    color: "black",
    fontSize: 16,
  },
});
