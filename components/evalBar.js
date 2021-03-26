import React from 'react';
import { Text, View, Image, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform } from 'react-native';

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

const weekOverview = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={styles.row} >
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto",
        fontSize: normalize(20),
        left: normalize(25),
    },
    box: {
        width: normalize(30),
        height: normalize(30),
    },

    box2: {
        width: normalize(26),
        height: normalize(35),
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    h3: {
        fontFamily: "Roboto",
        fontSize: normalize(30),
    },
});

export default weekOverview;