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

const evalBar = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={styles.row} >
            <View style={[props.style, { backgroundColor: "skyblue" }]} />
            <View style={[props.style, { backgroundColor: "skyblue" }]} />
            <View style={[props.style, { backgroundColor: "skyblue" }]} />
            <View style={[props.style, { backgroundColor: "skyblue" }]} />
            <View style={[props.style, { backgroundColor: "skyblue" }]} />
            <View style={[props.style, { backgroundColor: "skyblue" }]} />
            <View style={[props.style, { backgroundColor: "skyblue" }]} />
            <View style={[props.style, { backgroundColor: "skyblue" }]} />
            <View style={[props.style, { backgroundColor: "skyblue" }]} />
            <View style={[props.style, { backgroundColor: "skyblue" }]} />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        margin: 5
    }
});

export default evalBar;