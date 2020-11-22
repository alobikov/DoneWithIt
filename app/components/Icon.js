import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
}

const styles = StyleSheet.create({});
