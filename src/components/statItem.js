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

const StatItem = (props) => {
    return (
        <View style={[styles.stat, { borderRightWidth: 1, borderRightColor:props.color }]}>
            <Text style={[styles.statName]}>{props.stat}</Text>
            <Text style={[styles.statVal]}>{props.value}</Text>
        </View>
    )
};

export default StatItem;



const styles = StyleSheet.create({


  statVal: {
    fontSize: normalize(17),
    color: "white",
  },

  statName: {
    fontSize: normalize(13),
    color: "white",
    paddingBottom: normalize(5),
  },

  stat: {
    flexDirection: "column",
    alignContent: "center",
    width: SCREEN_WIDTH * 0.3,
    alignItems: "center",
    height: "100%",
  },


});




