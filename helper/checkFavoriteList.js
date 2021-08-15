import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkFavoriteList = async (verse) => {
  const favoriteList =
    JSON.parse(await AsyncStorage.getItem("favorites")) || [];

  const checkName = favoriteList.filter((el) => el.name === verse.name);
  const checkChapter = favoriteList.filter(
    (el) => el.chapter === verse.chapter
  );
  const checkVerse = favoriteList.filter((el) => el.number === verse.number);

  if (
    checkName.length > 0 &&
    checkChapter.length > 0 &&
    checkVerse.length > 0
  ) {
    return true;
  } else {
    return false;
  }
};
