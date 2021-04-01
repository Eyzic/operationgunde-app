import React, { useState } from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, Alert, View, TouchableOpacity, Image } from 'react-native';

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



const pausButton = (props) => {
    const [count, setCount] = useState(0);
    const onPress = () => {
        setCount(count + 1);
    };

    const chooseImage = () => {
        if (Math.floor(count % 2) == 0) {
            return (require('../assets/paus.png'));
        }
        else {
            return (require('../assets/play.png'));
        }
    }
    return (
        <TouchableOpacity onPress={onPress} >
            <Image source={chooseImage()} style={styles.image} />
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    image: {
        width: normalize(300),
        height: normalize(300),
    },

});

export default pausButton;