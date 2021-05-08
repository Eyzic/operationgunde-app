import React from "react";
import { Dimensions, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Normalize from "../Normalize";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const DataIX = (props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#DB9ACA",
          height: Normalize(40),
          width: SCREEN_WIDTH * 0.8,
          borderRadius: Normalize(10),
          marginBottom: 5,
          marginTop: 5,
        }}
      >
        <Text style={{ color: "white" }}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DataIX;
