import React from "react";
import { ActivityIndicator } from "react-native";

export function Loader() {
  return (
    <ActivityIndicator
      size="large"
      color="#3695c9"
      style={{ marginTop: "50%" }}
    />
  );
}
