import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children, style }) {
  console.log(style);
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
