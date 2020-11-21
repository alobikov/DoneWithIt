import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Welcome from "./app/screens/Welcome";
import Card from "./app/components/Card";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card
        title="Inflatable SUP for sale"
        subTitle="$200"
        image={require("./app/assets/sup.jpg")}
      />
      {/* <Welcome /> */}
      {/* <ViewImageScreen /> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#888",
    padding: 20,
    paddingTop: 100,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
