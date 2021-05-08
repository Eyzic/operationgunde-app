import React from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";

//Detta är en pageheader utan progressview och utan taggad och redo
import Normalize from "../Normalize";

//Props: style = css for the toplevel of the component.
// hasImage = true or false depending on whether you want to render a picture or not.
// image = the location of the image to be shown. Can be ignored if there is no image.

const pageHeader4 = (props) => {
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
        <Image source={props.Image} style={styles.image} />
      </View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.Oversikt1, { color: props.color1 }]}>
            {props.meny3}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
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
    fontSize: Normalize(30),
    lineHeight: 40,
  },
  Inställning1: {
    // fontFamily: "Helvetica",
    fontSize: Normalize(18),
    lineHeight: 40,
    marginTop: -33.4,
    marginStart: 80,
  },
  val1: {
    //fontFamily: "Helvetica",
    fontSize: Normalize(18),
    lineHeight: 40,
    marginTop: -40.3,
    marginStart: 185,
  },
  Oversikt1: {
    // fontFamily: "Helvetica",
    fontSize: Normalize(18),
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    marginBottom: 0,
  },
  image: {
    width: Normalize(105),
    height: Normalize(105),
    borderRadius: 70,
  },
  h3: {
    fontFamily: "Helvetica",
    fontSize: Normalize(20),
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginTop: -31,
  },
  image2: {
    width: Normalize(20),
    height: Normalize(20),
    borderRadius: 0,
    alignSelf: "flex-end",
  },
});

export default pageHeader4;
