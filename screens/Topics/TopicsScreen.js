import React, { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalContext } from "../../context/GlobalContext";
import TopicsData from "../../utils/TopicsData";

export const TopicsScreen = ({ navigation }) => {
  const { setBook, setChapter } = useContext(GlobalContext);

  const handleClick = (topic) => {
    setBook(topic.book.abbrev);
    setChapter(topic.chapter);
    navigation.navigate("Biblia");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {TopicsData.map((topic, index) => (
        <View style={styles.topicWrapper} key={index}>
          <Text style={styles.topicTitle}>{topic.title}</Text>
          <View style={styles.separator}></View>
          <TouchableOpacity
            style={styles.topicBtn}
            onPress={() => handleClick(topic)}
          >
            <Text
              style={styles.textBtn}
            >{`${topic.book.name}:${topic.chapter}`}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: 20,
    paddingBottom: 50,
  },
  topicWrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  topicTitle: {
    fontSize: 23,
    width: "90%",
  },
  separator: {
    height: 1.2,
    width: "90%",
    backgroundColor: "black",
  },
  topicBtn: {
    backgroundColor: "#3695c9",
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  textBtn: {
    color: "white",
    fontSize: 18,
  },
});
