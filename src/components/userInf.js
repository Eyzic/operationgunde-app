import React, { useState } from "react";
import {
  Text,
  View,
  Platform,
  Dimensions,
  PixelRatio,
  StyleSheet,
  TextInput,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const UserInf = (props) => {
  return (
    <View style={[styles.container]}>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.h4}> {props.infoType}: </Text>
      </View>
      <View style={[styles.infobox]}>
        <Text style={{ color: "white" }}>{props.value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "hsla(268, 100%, 96%,0)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: normalize(10),
  },
  h4: {
    fontSize: normalize(14),
  },
  infobox: {
    backgroundColor: "#DB9ACA",
    height: normalize(30),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: normalize(13),
    paddingLeft: normalize(10),
  },
});

export default UserInf;
