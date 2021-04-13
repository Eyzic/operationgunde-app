import React from 'react';
import { View, StyleSheet, Text, Dimensions, PixelRatio, Platform, TouchableOpacity } from 'react-native';


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

const BigButton = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <TouchableOpacity style={[props.style, { backgroundColor: '#BB22AA', marginBottom: 30 }]} onPress={props.action}  >
            <Text style={[styles.h2, { textAlign: 'center' }]}>{props.text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        margin: 5
    },
    h2: {
        fontFamily: "Helvetica",
        fontSize: normalize(30),
    }
});



export default BigButton;