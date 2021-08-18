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

export const FavoriteVersesScreen = () => {
  const [listItems, setListItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const getListItems = async () => {
    const list = await AsyncStorage.getItem("favorites");
    setListItems(JSON.parse(list));
  };

  useEffect(() => {
    getListItems();
  }, []);

  const removeAllFavorites = async () => {
    await AsyncStorage.removeItem("favorites");
    getListItems();
  };

  const removeFavoriteVerse = (e) => {
    let verse = e._dispatchInstances.memoizedProps.children[0][2].props;
    // removeFavorite(verse);
    console.log(verse);
    // setModalVisible(!modalVisible);
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalWrapper}>
            <Text>Eliminar favorito</Text>
            <TouchableOpacity
              onPress={removeFavoriteVerse}
              style={styles.removeModalBtn}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Apagar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {listItems ? (
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
              onLongPress={() => setModalVisible(true)}
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
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  modalWrapper: {
    backgroundColor: "#cecaca",
    height: 100,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  removeModalBtn: {
    backgroundColor: "#3695c9",
    width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
