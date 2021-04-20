import React, { useState } from "react";
import {
  Text,
  Dimensions,
  PixelRatio,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

//Detta är en pageheader utan progressview och utan taggad och redo

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 420;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

//Props: style = css for the toplevel of the component.
// hasImage = true or false depending on whether you want to render a picture or not.
// image = the location of the image to be shown. Can be ignored if there is no image.

const pageHeader5 = (props) => {
  const onPress = () => {
    props.nav.navigate(props.over);
  };

  const onPress2 = () => {
    props.nav.navigate(props.inst);
  };

  const onPress4 = () => {
    props.nav.navigate(props.val);
  };

  return (
    <View style={props.style}>
      <View style={[styles.header]}>
        <View>
          <Text style={styles.h1}>{props.text1}</Text>
          <Text style={styles.h1}>{props.text2}</Text>
        </View>

      </View>

      <View style={styles.header2}>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.Oversikt1, { color: props.color1 }]}>
            {props.meny1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress2}>
          <Text style={[styles.Inställning1, { color: props.color2 }]}>
            {props.meny2}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress4}>
          <Text style={[styles.val1, { color: props.color4 }]}>
            {props.meny4}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.h3}>
        {props.antal} <Image source={props.amountImage} style={styles.image2} />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  h1: {
    // fontFamily: "Helvetica",
    fontSize: normalize(40),
    lineHeight: 40,
  },
  Inställning1: {
    // fontFamily: "Helvetica",
    fontSize: normalize(23),
    // lineHeight: 40,
    // marginTop: -20,
    // marginStart: 80,
  },
  val1: {
    //fontFamily: "Helvetica",
    fontSize: normalize(23),
    // lineHeight: 40,
    // marginTop: -40,
    //marginStart: 185,
  },


  Oversikt1: {
    // fontFamily: "Helvetica",
    fontSize: normalize(23),
    // justifyContent: "space-between",
    // marginTop: 20,
  },

  top_border: {
    borderTopColor: "#000",
    borderTopWidth: 3,
    paddingTop: 10,

  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    marginBottom: 0,
  },

  header2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 0,
    marginEnd: SCREEN_WIDTH * 0.3
  },

  image: {
    width: normalize(135),
    height: normalize(135),
    borderRadius: 70,
  },
  h3: {
    fontFamily: "Helvetica",
    fontSize: normalize(20),
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginTop: -31,
  },
  image2: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: 0,
    alignSelf: "flex-end",
  },
});

export default pageHeader5;
