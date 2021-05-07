import React from "react";
import {
  Text,
  View,
  Platform,
  Dimensions,
  PixelRatio,
  StyleSheet,
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

const Goal = (props) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.positions]}>
        <View style={[styles.checkbox]}>
        </View>
        <View style={([styles.title], { paddingLeft: normalize(20) })}>
          <Text style={styles.h4}> {props.goalType} </Text>
        </View>
      </View>
      <View style={[styles.valueBox]}>
        <Text style={{ color: "white", fontFamily: "monospace" }}>
          {props.value}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "hsla(268, 100%, 96%,0)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    height: 50,
  },

  positions: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  checkbox: {
    backgroundColor: "hsla(0,0%,100%,0.7)",
    width: normalize(30),
    height: normalize(30),
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: normalize(13),
    borderColor: 'hsla(316, 47%, 73%, 1)',
    borderWidth: 4

  },
  valueBox: {
    backgroundColor: "#DB9ACA",
    width: normalize(100),
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: normalize(13),
    alignContent: "center",
  },
});

export default Goal;
