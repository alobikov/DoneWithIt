import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Separator from "../components/Separator";

const messages = [
  {
    id: 1,
    title: "Aleksej Lobikov",
    description: "3 Listings",
    image: require("../assets/aleksej_sm.jpg"),
  },
  {
    id: 2,
    title: "Arly Melania",
    description: "1 Listing",
    image: require("../assets/mela_sad_sm.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={Separator}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
