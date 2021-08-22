import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Verse } from "../../components/Verse/Verse";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeFavorite } from "../../helper/removeFavorite";
import { MyModal } from "../../components/Modal/Modal";

export const FavoriteVersesScreen = () => {
  const [listItems, setListItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [deletedVerse, setDeletedVerse] = useState([]);

  const getListItems = async () => {
    const list = await AsyncStorage.getItem("favorites");
    if (!list) {
      setListItems([]);
    } else {
      setListItems(JSON.parse(list));
    }
  };

  useEffect(() => {
    getListItems();
  }, []);

  const removeAllFavorites = async () => {
    await AsyncStorage.removeItem("favorites");
    getListItems();
  };

  const removeFavoriteVerse = () => {
    removeFavorite(deletedVerse);
    setModalVisible(!modalVisible);

    setTimeout(() => {
      getListItems();
    }, 1000);
  };

  const showModal = (verse) => {
    setDeletedVerse(verse);
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        top: 10,
        paddingBottom: 20,
        alignItems: "center",
      }}
    >
      {/* Modal */}
      <MyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        textBtn={"Remover"}
        modalText={"Deseja remover dos favoritos?"}
        handleFunction={removeFavoriteVerse}
      />

      {listItems.length > 0 ? (
        <>
          <View style={styles.removeContainer}>
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={removeAllFavorites}
            >
              <Text style={styles.removeBtnText}>Remover Tudo</Text>
              <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {listItems?.map((verse, index) => (
            <TouchableOpacity
              style={styles.container}
              key={index}
              onLongPress={() => showModal(verse)}
            >
              <Text style={styles.verseInfo}>
                {verse.name} {verse.chapter}
              </Text>
              <View style={styles.separator}></View>
              <Verse verses={[verse]} />
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text
            style={{
              color: "gray",
              fontSize: 18,
            }}
          >
            Nenhum favorito
          </Text>
        </View>
      )}
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
