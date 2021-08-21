import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Linking,
  TouchableHighlight,
  Platform,
  Dimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "@expo-google-fonts/inter";

export function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Prata: require("../../fonts/Prata-Regular.ttf"),
    OpenSans: require("../../fonts/OpenSans-Regular.ttf"),
  });

  const iconStyle = {
    size: 35,
    color: "white",
  };
  const listItems = [
    {
      key: 1,
      title: "A Bíblia",
      screen: "Biblia",
      icon: () => (
        <FontAwesome5
          name="bible"
          size={iconStyle.size}
          color={iconStyle.color}
        />
      ),
    },
    {
      key: 2,
      title: "Palavra do dia",
      screen: "Palavra do dia",
      icon: () => (
        <FontAwesome
          name="comment-o"
          size={iconStyle.size}
          color={iconStyle.color}
        />
      ),
    },
    {
      key: 3,
      title: "Versículos Favoritos",
      screen: "Versículos Favoritos",
      icon: () => (
        <AntDesign name="star" size={iconStyle.size} color={iconStyle.color} />
      ),
    },
    {
      key: 4,
      title: "Versículos para Vida",
      screen: "Versículos para Vida",
      icon: () => (
        <FontAwesome5
          name="list-alt"
          size={iconStyle.size}
          color={iconStyle.color}
        />
      ),
    },
    {
      key: 1,
      title: "Velho Testamento",
      screen: "Velho Testamento",
      icon: () => (
        <Image
          source={require("../../assets/ten-commandments.png")}
          style={styles.iconImages}
        />
      ),
    },
    {
      key: 1,
      title: "Novo Testamento",
      screen: "Novo Testamento",
      icon: () => (
        <Image
          source={require("../../assets/grain.png")}
          style={styles.iconImages}
        />
      ),
    },
  ];

  const handleOpenLink = () => {
    Linking.openURL("https://github.com/OJailson17/");
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      {!fontsLoaded ? (
        <Text style={{ textAlign: "center", fontSize: 65, top: 30 }}>
          Biblia Sagrada
        </Text>
      ) : (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Bíblia Sagrada</Text>
        </View>
      )}

      {/* Elements */}
      <View style={styles.elementsContainer}>
        <FlatList
          numColumns={2}
          data={listItems}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={styles.elementWrapper}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.1}
              underlayColor="#3695c9"
            >
              <>
                {item.icon()}
                <Text
                  style={{
                    color: "white",
                    marginTop: 5,
                    fontSize: 16,
                    fontFamily: fontsLoaded ? "OpenSans" : "",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Text>
              </>
            </TouchableHighlight>
          )}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={{ fontSize: 16 }}>
          Desenvolvido por ❤️{" "}
          <Text style={styles.linkText} onPress={handleOpenLink}>
            Jailson de Oliveira
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    alignItems: "center",
  },
  elementsContainer: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    top: 70,
  },
  elementWrapper: {
    backgroundColor: "#0288d1",
    width: "47%",
    height: 130,
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  footer: {
    position: "absolute",
    bottom: 10,
  },
  iconImages: {
    width: 35,
    height: 35,
  },
  linkText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    top: 40,
  },
  title: {
    fontSize: 60,
    fontFamily: "Prata",
    textAlign: "center",
  },
});
