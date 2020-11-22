import React from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function PrettyTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.midgrey}
          style={styles.icon}
        />
      )}
      <TextInput {...otherProps}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lgrey,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: "100%",
    fontSize: 32,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
