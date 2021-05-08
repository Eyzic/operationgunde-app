import React, { useContext } from "react";
import {
    View,
    TouchableOpacity,
    Image,
} from "react-native";
import ActivityContext from "./activityContext";

import Style from "../styles/Style";
import Normalize from "../Normalize";

function createMenuButton(imgSource, action) {
    return (
        <TouchableOpacity onPress={action}>
            <Image
                source={imgSource}
                style={{ width: Normalize(45), height: Normalize(45) }}
            />
        </TouchableOpacity>
    );
}

const navMenu = (props) => {
    const context = useContext(ActivityContext);

    return (
        <View style={Style.menu}>
            {createMenuButton(require("../assets/menu/group.png"), () => props.nav.navigate("MyGroups"))}
            {createMenuButton(require("../assets/menu/profile.png"), () => props.nav.navigate("Profile"))}
            {createMenuButton(require("../assets/menu/home.png"), () => props.nav.navigate("FrontPage"))}
            {createMenuButton(require("../assets/menu/timer.png"), () => goToActivity(props.nav, context))}
            {createMenuButton(require("../assets/menu/history.png"), () => props.nav.navigate("History"))}
        </View>
    );
};

function goToActivity(nav, context) {
    let route = context.activityRunning ? "CurrentActivity" : "NewActivity";
    nav.navigate(route);
}

export default navMenu;
