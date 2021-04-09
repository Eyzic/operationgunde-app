import React, { useContext } from 'react';
import { View, Dimensions, PixelRatio, StyleSheet, Platform, TouchableOpacity, Alert, Image } from 'react-native';
import ActivityContext from './activityContext';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 420;

function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

function createMenuButton(source, action) {
    return (
        <TouchableOpacity onPress={action}>
            <Image
                source={source}
                style={{ width: normalize(60), height: normalize(60) }} />
        </TouchableOpacity>
    );
}

const navMenu = (props) => {
    const context = useContext(ActivityContext);

    return (
        <View style={props.style}>
            {createMenuButton(require('../assets/menu/1.png'), () => Alert.alert('image clicked'))}
            {createMenuButton(require('../assets/menu/2.png'), () => Alert.alert('image clicked'))}
            {createMenuButton(require('../assets/menu/3.png'), () => props.nav.navigate("FrontPage"))}
            {createMenuButton(require('../assets/menu/4.png'), () => goToActivity(props.nav, context))}
            {createMenuButton(require('../assets/menu/5.png'), () => props.nav.navigate("BackPage"))}
        </View>
    )
};

function goToActivity(nav, context) {
    let route = context.activityRunning ? "CurrentActivity" : "NewActivity";
    nav.navigate(route);
}

export default navMenu;