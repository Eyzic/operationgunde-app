import React from 'react';
import { Text, View, Image, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform } from 'react-native';
import EvalBar from './evalBar';

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

const dayOverview = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={[props.style, { flexDirection: 'row' }]}>
            <View style={{ flexGrow: 1, padding: 0 }}>
                <Text style={styles.h3}>
                    {'Muskeltrötthet'}
                </Text>
                <EvalBar style={styles.box} />
                <Text style={styles.h3}>
                    {'Mentalt'}
                </Text>
                <EvalBar style={styles.box} />
                <Text style={styles.h3}>
                    {'Energi'}
                </Text>
                <EvalBar style={styles.box} />
                <Text style={styles.h3}>
                    {'Sömn'}
                </Text>
                <EvalBar style={styles.box} />
            </View>
            <View style={[{ alignItems: 'flex-end', flexGrow: 1, padding: 0 }]}>
                <Text style={styles.h2}>
                    {'22 Mars 2021'}
                </Text>
                <Text style={styles.h1}>
                    {'5 C °'}
                </Text>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        margin: 5
    },
    box: {
        width: normalize(10),
        height: normalize(10),
        marginRight: 4
    },
    h1: {
        fontFamily: "Roboto",
        fontSize: normalize(40),
    },
    h2: {
        fontFamily: "Roboto",
        fontSize: normalize(30),
        lineHeight: 28
    },
    h3: {
        fontFamily: "Roboto",
        fontSize: normalize(20)
    }
});

export default dayOverview;