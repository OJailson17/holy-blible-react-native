import React from "react";
import { Text, View, Modal, TouchableOpacity, StyleSheet } from "react-native";

export const MyModal = (props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalWrapper}>
          <Text style={styles.modalText}>{props.modalText}</Text>
          <View style={styles.modalBtnContainer}>
            <TouchableOpacity
              onPress={() => props.setModalVisible(false)}
              style={styles.modalBtn}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={props.handleFunction}
              style={styles.modalBtn}
            >
              <Text style={{ color: "white", fontSize: 18 }}>
                {props.textBtn}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  modalWrapper: {
    backgroundColor: "#cecaca",
    height: 150,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  modalText: {
    color: "black",
    fontSize: 16,
  },

  modalBtnContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modalBtn: {
    backgroundColor: "#3695c9",
    width: "45%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
