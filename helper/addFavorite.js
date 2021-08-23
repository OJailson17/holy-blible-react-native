import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkFavoriteList } from "./checkFavoriteList";

export const addFavorite = async (verseObj) => {
  const favorites = JSON.parse(await AsyncStorage.getItem("favorites")) || [];

  if (await checkFavoriteList(verseObj)) {
    return;
  } else {
    favorites.push(verseObj);
  }

  await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
};
