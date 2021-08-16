import AsyncStorage from "@react-native-async-storage/async-storage";

const mostFrequent = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

export const removeFavorite = async (verse) => {
  let favorites = [];
  favorites = JSON.parse(await AsyncStorage.getItem("favorites")) || [];

  const checkName = favorites.map((el, index) =>
    el?.name === verse?.name ? index : false
  );
  const checkChapter = favorites.map((el, index) =>
    el?.chapter === verse?.chapter ? index : false
  );
  const checkVerse = favorites.map((el, index) =>
    el?.number === verse?.number ? index : false
  );

  const nameIndex = checkName.filter((index) => index !== false);
  const chapterIndex = checkChapter.filter((index) => index !== false);
  const verseIndex = checkVerse.filter((index) => index !== false);

  const finalArr = [...nameIndex, ...chapterIndex, ...verseIndex];

  const deletedIndex = mostFrequent(finalArr);
  favorites.splice(deletedIndex, 1);
  await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
};
