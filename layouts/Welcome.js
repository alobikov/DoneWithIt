import React from 'react';
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native';

export default function Welcome() {
return (
<View style={style.container}>
    <ImageBackground style = {style.image} source={require("../assets/background.jpg")}>
        <View style={style.box}>
            <Image style={style.logo} source={require("../assets/logo-red.png")} />
            <Text>Sell What You Don't Need</Text>
        </View>
        <View style={style.control}>
            <View style={style.button1}/>
            <View style={style.button2}/>
        </View>
    </ImageBackground>
</View>
);
}

const style = StyleSheet.create({
    container: {
        backgroundColor:  'blue',
        flex: 1,
    },
    image: {
        resizeMode: "center",
        height: "100%",
        width: "100%"
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
    button1: {
        height: 50,
        backgroundColor: 'pink',
        alignSelf: "stretch"
    },
    button2: {
        height: 50,
        backgroundColor: 'teal',
        alignSelf: "stretch"
    },
    control: {
        bottom: 0,
    }
})