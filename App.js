import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Welcome from "./app/screens/Welcome";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Welcome /> */}
      <ViewImageScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
