import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Normalize from "../Normalize";

const Goal = (props) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.positions]}>
        <View style={[styles.checkbox]}>
        </View>
        <View style={([styles.title], { paddingLeft: Normalize(20) })}>
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
    width: Normalize(30),
    height: Normalize(30),
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Normalize(13),
    borderColor: 'hsla(316, 47%, 73%, 1)',
    borderWidth: 4

  },
  valueBox: {
    backgroundColor: "#DB9ACA",
    width: Normalize(100),
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Normalize(13),
    alignContent: "center",
  },
});

export default Goal;
