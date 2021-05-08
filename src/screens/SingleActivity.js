import React from "react";

import { Dimensions, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import StandardTemplate from "../templates/StandardTemplate";
import Normalize from "../Normalize";

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const SingleActivity = ({ route, navigation }) => {
  const { activity_title, date, duration, avg_HR, meters } = route.params;
  return (
    <StandardTemplate navigation={navigation} showMenu={true}>
      <View
        style={{
          height: SCREEN_HEIGHT * 0.2,
          backgroundColor: "hsla(268, 100%, 96%,0.63)",
          flexDirection: "row",
          paddingRight: Normalize(5),
          paddingLeft: Normalize(20),
        }}
      >
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            borderBottomWidth: 2,
            marginBottom: Normalize(20),
          }}
        >
          <Text style={{ fontSize: Normalize(30) }}>{activity_title}</Text>
          <Text style={{ fontSize: Normalize(30) }}>{date}</Text>
        </View>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{ position: "absolute", zIndex: 1, alignItems: "center" }}
          >
            <Text style={{ fontSize: Normalize(19), fontWeight: "bold" }}>
              Längd:
            </Text>
            <Text style={{ fontSize: Normalize(21) }}>{duration}</Text>
          </View>
          <Image
            style={{
              height: Normalize(100),
              width: Normalize(100),
              position: "absolute",
              zIndex: 2,
            }}
            source={require("../assets/cir.png")}
          />
        </View>
      </View>
      <View style={[styles.hrBlock]}>
        <Text style={[styles.text]}>Snitt HR: {avg_HR}</Text>
        <Text style={[styles.text]}>Max HR: 116</Text>
      </View>
      <View style={[styles.kmBlock]}>
        <Text style={[styles.text]}>Antal km: {meters / 1000}</Text>
      </View>

      <View style={[styles.hrvBlock]}>
        <Text style={[styles.text]}>Dagens HRV värde: 63</Text>
        <Text style={[styles.text]}>Morgondagens beräknade HRV värde: 59</Text>
      </View>

      <View style={[styles.buttonBlock]}>
        <TouchableOpacity>
          <View style={[styles.button]}>
            <Text style={{ fontSize: Normalize(18), color: "white" }}>
              Redigera aktivitet
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </StandardTemplate>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: Normalize(20),
  },
  kmBlock: {
    height: Normalize(45),
    backgroundColor: "hsla(268, 100%, 96%,0.63)",
    marginTop: Normalize(10),
    alignItems: "center",
    justifyContent: "center",
  },
  hrBlock: {
    flexDirection: "row",
    height: Normalize(45),
    backgroundColor: "hsla(268, 100%, 96%,0.63)",
    marginTop: Normalize(10),
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  hrvBlock: {
    height: Normalize(100),
    backgroundColor: "hsla(268, 100%, 96%,0.63)",
    marginTop: Normalize(10),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    paddingRight: Normalize(20),
    paddingLeft: Normalize(20),
  },

  buttonBlock: {
    height: Normalize(75),
    backgroundColor: "hsla(268, 100%, 96%,0.63)",
    marginTop: Normalize(10),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },

  button: {
    height: Normalize(50),
    width: Normalize(200),
    backgroundColor: "hsla(268, 62%, 46%, 1)",
    flexDirection: "row",
    borderRadius: Normalize(10),
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default SingleActivity;
