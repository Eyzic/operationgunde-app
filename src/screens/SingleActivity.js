import React from "react";

import {
  Dimensions,
  View,
  Text,
  Platform,
  PixelRatio,
  Image,
  StyleSheet,
} from "react-native";

import PageHeader5 from "../components/pageHeader5";
import StandardTemplate from "../templates/StandardTemplate";

import Style from "../styles/Style";
import Goal from "../components/goal";
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
          // width: SCREEN_WIDTH,
          //flex: 1,
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
              //resizeMode: "cover",
              height: normalize(100),
              width: normalize(100),
              position: "absolute",
              zIndex: 2,
            }}
            source={require("./cir.png")}
          />
        </View>
      </View>
      <View
        style={{
          height: normalize(45),
          // width: SCREEN_WIDTH,
          backgroundColor: "hsla(268, 100%, 96%,0.63)",
          marginTop: normalize(10),
          flexDirection: "row",
          //padding: normalize(10),
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text style={[styles.text]}>Snitt HR: 83</Text>
        <Text style={[styles.text]}>Max HR: 116</Text>
      </View>
      <View
        style={{
          height: normalize(50),
          //  width: SCREEN_WIDTH,
          backgroundColor: "hsla(268, 100%, 96%,0.63)",
          marginTop: normalize(10),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={[styles.text]}>Antal km: 3.5</Text>
      </View>

      <View
        style={{
          height: normalize(100),
          //  width: SCREEN_WIDTH,
          backgroundColor: "hsla(268, 100%, 96%,0.63)",
          marginTop: normalize(10),
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text style={[styles.text]}>Snitt HR: 83</Text>
        <Text style={[styles.text]}>Max HR: 116</Text>
      </View>

      <View
        style={{
          height: normalize(75),
          // width: SCREEN_WIDTH,
          backgroundColor: "hsla(268, 100%, 96%,0.63)",
          marginTop: normalize(10),
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            height: normalize(50),
            width: normalize(200),
            backgroundColor: "hsla(268, 62%, 46%, 1)",
            flexDirection: "row",
            borderRadius: normalize(10),
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontSize: normalize(18), color: "white" }}>
            Redigera aktivitet
          </Text>
        </View>
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
});

export default SingleActivity;
