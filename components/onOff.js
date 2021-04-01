import React, { useState } from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, Alert, View, TouchableOpacity, Image } from 'react-native';
import PausButton from './pausButton';

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

const onOff = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');


    return (
        <View style={props.style}>
            <View style={[styles.row, { marginBottom: 10 }]}>
                <PausButton />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    h4: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
    },
    row: {
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: 'hsla(272, 100%, 97%,1)'
    },
});

export default onOff;