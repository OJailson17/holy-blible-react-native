import React from "react";
import {
  Dimensions,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import fakeBookList from "../../utils/fakeBookList";

export const BookList = ({ books }) => {
  return (
    <View>
      <SectionList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        sections={books}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.textItem}>{item}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.headerText}>{title}</Text>
        )}
      />
    </View>
  );
};

const width = Number((Dimensions.get("window").width * 90) / 100);

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  item: {
    width: width,
    height: 40,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3695c9",
    borderRadius: 5,
  },
  textItem: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  headerText: {
    color: "black",
    marginTop: 20,
    width: width,
    fontSize: 16,
  },
});
