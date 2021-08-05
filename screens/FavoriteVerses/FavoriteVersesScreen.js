import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Verse } from "../../components/Verse/Verse";
import { MaterialIcons } from "@expo/vector-icons";

const verse = [
  {
    number: 1,
    text: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
  },
  {
    number: 2,
    text: "Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.",
  },
  {
    number: 3,
    text: "Porque ele te livrará do laço do passarinheiro, e da peste perniciosa.",
  },
  {
    number: 4,
    text: "Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás; a sua verdade será o teu escudo e broquel.",
  },
  {
    number: 5,
    text: "Não terás medo do terror de noite nem da seta que voa de dia,.",
  },
  {
    number: 6,
    text: "Nem da peste que anda na escuridão, nem da mortandade que assola ao meio-dia.",
  },
  {
    number: 7,
    text: "Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti.",
  },
  {
    number: 8,
    text: "Somente com os teus olhos contemplarás, e verás a recompensa dos ímpios.",
  },
  {
    number: 9,
    text: "Porque tu, ó Senhor, és o meu refúgio. No Altíssimo fizeste a tua habitação.",
  },
  {
    number: 10,
    text: "Nenhum mal te sucederá, nem praga alguma chegará à tua tenda.",
  },
  {
    number: 11,
    text: "Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.",
  },
  {
    number: 12,
    text: "Eles te sustentarão nas suas mãos, para que não tropeces com o teu pé em pedra.",
  },
  {
    number: 13,
    text: "Pisarás o leão e a cobra; calcarás aos pés o filho do leão e a serpente.",
  },
  {
    number: 14,
    text: "Porquanto tão encarecidamente me amou, também eu o livrarei; pô-lo-ei em retiro alto, porque conheceu o meu nome.",
  },
  {
    number: 15,
    text: "Ele me invocará, e eu lhe responderei; estarei com ele na angústia; dela o retirarei, e o glorificarei.",
  },
  {
    number: 16,
    text: "Fartá-lo-ei com longura de dias, e lhe mostrarei a minha salvação.",
  },
];

export const FavoriteVersesScreen = () => {
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
          <Text style={styles.removeBtnText}>Remover Tudo</Text>
          <MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {verse.map((verse, index) => (
        <TouchableOpacity style={styles.container} key={index}>
          <Text style={styles.verseInfo}>Salmos 91:2</Text>
          <View style={styles.separator}></View>
          <Verse verses={[verse]} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
