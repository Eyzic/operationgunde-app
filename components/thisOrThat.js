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



const thisOrThat = (props) => {
    const [count, setColor] = useState(0);
    const onPress = () => {
        setColor(count + 1);
    };
    

    const ifSame = () => {
        if (Math.floor(count % 2) == 1 ){
            return (styles.button2);
        } if (Math.floor(count % 2) == 0 ) {
            return (styles.button);
        }
    };
    const ifSame2 = () => {
        if (count  == 0 ) {
            return (styles.button);
        } if (Math.floor(count % 2) == 0) {
            return (styles.button2);
        } if (Math.floor(count % 2) == 1 ) {
            return (styles.button);
        }
    };


    return (
        <View style={props.style}>
            <TouchableOpacity onPress={onPress} >
                <View style={ifSame()} />
                <Text style={styles.h3}>
                    Organisation
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress} >
                <View style={ifSame2()} />
                <Text style={styles.h3}>
                    Kompisgrupp
            </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
        marginTop: -32,
        marginBottom: 20,
    },
    button: {
        width: normalize(40),
        height: normalize(40),
        marginTop: 10,
        backgroundColor: "skyblue",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button2: {
        width: normalize(40),
        height: normalize(40),
        marginTop: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red",
        flexDirection: 'row',
    },
});

export default thisOrThat;