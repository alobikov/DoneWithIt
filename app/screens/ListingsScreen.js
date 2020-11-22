import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
const listings = [
  {
    id: 1,
    title: "Inflatabe SUP for sale",
    price: 300,
    image: require("../assets/sup.jpg"),
  },
  {
    id: 2,
    title: "Braca Paddle 93 sq.inch",
    price: 200,
    image: require("../assets/paddle.jpg"),
  },
];
export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#eee",
    padding: 22,
  },
  dumb: {
    test: 1,
  },
});
// console.log("listingsscreen", styles);
