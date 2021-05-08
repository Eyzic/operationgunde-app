import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Normalize from "../Normalize";

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
    paddingBottom: Normalize(10),
  },
  h4: {
    fontSize: Normalize(14),
  },
  infobox: {
    backgroundColor: "#DB9ACA",
    height: Normalize(30),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Normalize(13),
    paddingLeft: Normalize(10),
  },
});

export default UserInf;
