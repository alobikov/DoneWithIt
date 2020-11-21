import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

export default function AppButton({
  title,
  color = colors.primary,
  handlePress,
}) {
  console.log("start");
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: 10,
    // width: "100%",
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.white,
  },
});
