import React from "react";
import { Dimensions, Text, View, StyleSheet } from "react-native";
import Normalize from "../Normalize";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const StatItem = (props) => {
  return (
    <View style={[styles.stat, { borderRightWidth: 1, borderRightColor: props.color }]}>
      <Text style={[styles.statName]}>{props.stat}</Text>
      <Text style={[styles.statVal]}>{props.value}</Text>
    </View>
  )
};

export default StatItem;

const styles = StyleSheet.create({


  statVal: {
    fontSize: Normalize(17),
    color: "white",
  },

  statName: {
    fontSize: Normalize(13),
    color: "white",
    paddingBottom: Normalize(5),
  },

  stat: {
    flexDirection: "column",
    alignContent: "center",
    width: SCREEN_WIDTH * 0.3,
    alignItems: "center",
    height: "100%",
  },


});




