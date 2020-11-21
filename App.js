import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Welcome from "./layouts/Welcome";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Welcome/>
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
