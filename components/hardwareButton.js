import React, { useState } from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, Alert, View, TouchableOpacity } from 'react-native';

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



const hardwareButton = (props) => {
    const [count, setColor] = useState(0);
    const onPress = () => {
        setColor(count + 1);
        if (Math.floor(count % 2) == 0) {
            return (Alert.alert('Hårdvara vald'));
        }
        else {
            return (Alert.alert('Hårdvara borttagen'));
        }
    };

    const chooseColor = () => {
        if (Math.floor(count % 2) == 0) {
            return (styles.button);
        }
        else {
            return (styles.button2);
        }
    }
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={chooseColor()}>
                <Text style={styles.h3}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
    },
    button: {
        width: normalize(100),
        height: normalize(100),
        marginTop: 20,
        marginRight: 4,
        backgroundColor: "skyblue",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button2: {
        width: normalize(100),
        height: normalize(100),
        marginTop: 20,
        marginRight: 4,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red",
    },
});

export default hardwareButton;