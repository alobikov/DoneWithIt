import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

export default function Separator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    backgroundColor: colors.lgrey,
    height: 1,
  },
});
