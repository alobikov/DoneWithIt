import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Welcome from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      {/* <ListingDetailsScreen /> */}
      {/* <Welcome /> */}
      {/* <ViewImageScreen /> */}
      {/* <StatusBar style="auto" /> */}
      {/* <MessagesScreen /> */}
      <Icon name="email" size={50} backgroundColor="green" iconColor="white" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 20,
    paddingTop: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
