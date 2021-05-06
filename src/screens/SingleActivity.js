import React from "react";

import {
  Dimensions,
  View,
  Text,
  Platform,
  PixelRatio,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import StandardTemplate from "../templates/StandardTemplate";

import { circle } from "react-native/Libraries/Animated/src/Easing";

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
const SingleActivity = ({ navigation }) => {
  return (
    <StandardTemplate navigation={navigation} showMenu={true}>
      <View
        style={{
          height: SCREEN_HEIGHT * 0.2,
          backgroundColor: "hsla(268, 100%, 96%,0.63)",
          flexDirection: "row",
          paddingRight: normalize(5),
          paddingLeft: normalize(20),
        }}
      >
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            borderBottomWidth: 2,
            marginBottom: normalize(20),
          }}
        >
          <Text style={{ fontSize: normalize(30) }}>Aktivitet-</Text>
          <Text style={{ fontSize: normalize(30) }}>2 feb 2020</Text>
        </View>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{ position: "absolute", zIndex: 1, alignItems: "center" }}
          >
            <Text style={{ fontSize: normalize(19), fontWeight: "bold" }}>
              Längd:
            </Text>
            <Text style={{ fontSize: normalize(21) }}>1:23:15</Text>
          </View>
          <Image
            style={{
              height: normalize(100),
              width: normalize(100),
              position: "absolute",
              zIndex: 2,
            }}
            source={require("./cir.png")}
          />
        </View>
      </View>
      <View style={[styles.hrBlock]}>
        <Text style={[styles.text]}>Snitt HR: 83</Text>
        <Text style={[styles.text]}>Max HR: 116</Text>
      </View>
      <View style={[styles.kmBlock]}>
        <Text style={[styles.text]}>Antal km: 3.5</Text>
      </View>

      <View style={[styles.hrvBlock]}>
        <Text style={[styles.text]}>Dagens HRV värde: 63</Text>
        <Text style={[styles.text]}>Morgondagens beräknade HRV värde: 59</Text>
      </View>

      <View style={[styles.buttonBlock]}>
        <TouchableOpacity>
          <View style={[styles.button]}>
            <Text style={{ fontSize: normalize(18), color: "white" }}>
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
    fontSize: normalize(20),
  },
  rutaText: {
    fontFamily: "Helvetica",
    fontSize: normalize(25),
    textAlign: "center",
    color: "white",
  },
  kmBlock: {
    height: normalize(45),
    backgroundColor: "hsla(268, 100%, 96%,0.63)",
    marginTop: normalize(10),
    alignItems: "center",
    justifyContent: "center",
  },
  hrBlock: {
    flexDirection: "row",
    height: normalize(45),
    backgroundColor: "hsla(268, 100%, 96%,0.63)",
    marginTop: normalize(10),
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  hrvBlock: {
    height: normalize(100),
    backgroundColor: "hsla(268, 100%, 96%,0.63)",
    marginTop: normalize(10),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    paddingRight: normalize(20),
    paddingLeft: normalize(20),
  },

  buttonBlock: {
    height: normalize(75),
    backgroundColor: "hsla(268, 100%, 96%,0.63)",
    marginTop: normalize(10),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },

  button: {
    height: normalize(50),
    width: normalize(200),
    backgroundColor: "hsla(268, 62%, 46%, 1)",
    flexDirection: "row",
    borderRadius: normalize(10),
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default SingleActivity;
