import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Welcome from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ListingDetailsScreen /> */}
      {/* <Welcome /> */}
      {/* <ViewImageScreen /> */}
      {/* <StatusBar style="auto" /> */}
      <MessagesScreen />
    </SafeAreaView>
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
