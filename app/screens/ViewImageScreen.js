import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.control}>
        <View>
          <MaterialCommunityIcons name="close" size={35} color="white" />
        </View>
        <View>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            color="white"
          />
        </View>
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
  control: {
    flex: 0,
    flexDirection: "row",
    margin: 30,
    justifyContent: "space-between",
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
