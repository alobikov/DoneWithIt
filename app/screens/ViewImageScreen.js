import React from "react";
import { StyleSheet, Image, View } from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.control}>
        <View style={styles.closeIcon} />
        <View style={styles.deleteIcon} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  control: {
    flex: 0,
    flexDirection: "row",
    margin: 30,
    justifyContent: "space-between",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: "80%",
    // alignSelf: "center",
  },
});
