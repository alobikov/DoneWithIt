import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/sup.jpg")}></Image>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>The Inflatabel SUP for sale!</Text>
        <Text style={styles.price}>$200</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
});
