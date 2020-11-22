import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";
import Separator from "../components/Separator";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (item) => {
    setMessages(messages.filter((m) => m.id !== item.id));
  };
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
            onPress={() => {}}
            renderRightActions={() => {
              return (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              );
            }}
          />
        )}
        ItemSeparatorComponent={Separator}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
