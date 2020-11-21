import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import colors from "../config/colors";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <Text>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 15,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
