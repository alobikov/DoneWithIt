import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.lgrey}>
      <View style={styles.container}>
        {ImageComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
        <View style={{ flex: 1 }}></View>
        {renderRightActions && renderRightActions()}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.midgrey,
  },
});
