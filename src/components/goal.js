import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
  Platform,
  Dimensions,
  PixelRatio,
  StyleSheet,
} from "react-native";
import StatsDisplay from "./statsDisplay";

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
  // if ({props.done}==='ja') {
  //     filled="hsla(0,0%,100%,0.7)",
  //    }
  //  else: {
  //  filled='transparent',
  // },
  return (
    <View style={[styles.container]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "hsla(316, 47%, 73%, 1)",
            width: normalize(30),
            height: normalize(30),
            //flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: normalize(13),
          }}
        >
          <View
            style={{
              backgroundColor: "hsla(0,0%,100%,0.7)",
              width: normalize(24),
              height: normalize(24),
              //flexDirection: "column",
              alignContent: "center",
              borderRadius: normalize(10),
            }}
          ></View>
        </View>
        <View style={([styles.title], { paddingLeft: normalize(20) })}>
          <Text style={styles.h4}> {props.goalType} </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#DB9ACA",
          width: normalize(100),
          height: 35,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: normalize(13),
          alignContent: "center",
        }}
      >
        <Text style={{ color: "white" }}>{props.value}</Text>
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
  title: {
    flexDirection: "row",
    //padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#DB9ACA",
  },

  statsRow: {
    backgroundColor: "hsla(324, 53%, 66%,0.65)",
    flexDirection: "row",
    borderTopRightRadius: normalize(15),
    borderBottomLeftRadius: 0,
    padding: 1,
  },
  time: {
    alignItems: "center",
    justifyContent: "space-around",
    flexGrow: 1,
    margin: 10,
    padding: 10,
  },
  h2: {
    fontSize: normalize(20),
  },
  h3: {
    color: "white",
    fontSize: normalize(15),
  },
  h4: {
    fontSize: normalize(18),
  },
});

export default Goal;
