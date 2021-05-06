import React, { useContext } from "react";
import {
  View,
  Dimensions,
  PixelRatio,
  Platform,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import ActivityContext from "./activityContext";

import Style from "../styles/Style";

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

function createMenuButton(imgSource, action) {
  return (
    <TouchableOpacity onPress={action}>
      <Image
        source={imgSource}
        style={{ width: normalize(60), height: normalize(60) }}
      />
    </TouchableOpacity>
  );
}

const navMenu = (props) => {
  const context = useContext(ActivityContext);

  return (
    <View style={Style.menu}>
      {createMenuButton(require("../assets/menu/group.png"), () =>
        props.nav.navigate("MyGroups")
      )}
      {createMenuButton(require("../assets/menu/profile.png"), () =>
        props.nav.navigate("SingleActivity")
      )}
      {createMenuButton(require("../assets/menu/home.png"), () =>
        props.nav.navigate("FrontPage")
      )}
      {createMenuButton(require("../assets/menu/timer.png"), () =>
        goToActivity(props.nav, context)
      )}
      {createMenuButton(require("../assets/menu/history.png"), () =>
        props.nav.navigate("History")
      )}
    </View>
  );
};

function goToActivity(nav, context) {
  let route = context.activityRunning ? "CurrentActivity" : "NewActivity";
  nav.navigate(route);
}

export default navMenu;
