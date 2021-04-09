import React, { useState } from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, Alert, View, TouchableOpacity } from 'react-native';
import HardwareButton from './hardwareButton';

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

const connectedHardware = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');


    return (
        <View style={props.style}>
            <Text style={styles.h4}>
                Välj hårdvara du vill använda:
            </Text>
            <ScrollView horizontal={true} >
                <HardwareButton text={'Polar pulsband'} />
                <HardwareButton text={'Klocka'} />
                <HardwareButton text={'Filips kondis'} />
                <HardwareButton text={'Einars snabba fötter'} />
            </ScrollView>
        </View >
    )
};

const styles = StyleSheet.create({
    h4: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
    },
});

export default connectedHardware;