import React, { useContext } from "react";
import {
  Dimensions,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalContext } from "../../context/GlobalContext";
// import fakeBookList from "../../utils/fakeBookList";

export const BookList = ({ books, navigation }) => {
  const { setBook } = useContext(GlobalContext);

  const navigate = (book) => {
    setBook(book);
    navigation.navigate("Biblia");
  };

  return (
    <View>
      <SectionList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        sections={books}
        keyExtractor={(item, index) => index}
        renderItem={({ item, section: { abbrev }, index }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigate(abbrev[index])}
          >
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
