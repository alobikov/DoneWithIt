import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={2}
        style={styles.image}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.box}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.control}>
          <AppButton
            title="Login"
            handlePress={() => {
              console.log("click");
            }}
          />
          <View style={{ height: 10 }}></View>
          <AppButton
            title="Register"
            color={colors.secondary}
            handlePress={() => {
              console.log("click");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
  },
  image: {
    resizeMode: "center",
    height: "100%",
    width: "100%",
  },
  box: {
    top: 50,
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  control: {
    bottom: 0,
    paddingHorizontal: 10,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 10,
  },
});
