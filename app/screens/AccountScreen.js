import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import colors from "../config/colors";
import Separator from "../components/Separator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.topContainer}>
        <ListItem
          image={require("../assets/aleksej_sm.jpg")}
          title="Aleksej Lobikov"
          subTitle="aleksej.lobikov@gmail.com"
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            );
          }}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    marginBottom: 20,
  },
  screen: {
    backgroundColor: "#eee",
  },
  topContainer: {
    marginVertical: 20,
  },
});
