import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  paginationBtnContainer: {
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    paddingHorizontal: 10,
  },
  paginationBtn: {
    height: 40,
    width: "40%",
    backgroundColor: "#3695c9",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
  label: {
    marginTop: 10,
  },
  chapterInfoContainer: {
    width: "90%",
    marginTop: 20,
  },
  chapterInfo: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
});

export default styles;
