import React from 'react'
import { Text, View, TouchableWithoutFeedback, Button, Platform, Dimensions, PixelRatio, StyleSheet, Alert } from 'react-native'
import StatsDisplay from './statsDisplay';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

const radie = normalize(10);
const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
};

function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

const historyItem = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => Alert.alert('till passets sida')}>
            <View style={[styles.container, props.style]}>
                <View style={{ flexGrow: 4 }}>
                    <View style={styles.title}>
                        <Text style={styles.h4}>{props.text}</Text>
                        <Text style={styles.h4}>23 feb 2020</Text>
                    </View>
                    <View style={styles.statsRow}>
                        <StatsDisplay statsTitle={"Avg HR"} value={150} textStyle={styles.h3} />
                        <StatsDisplay statsTitle={"Min/km"} value={"4:25"} textStyle={styles.h3} />

                    </View>
                </View>

                <View style={styles.time}>
                    <Text style={styles.h2}>08:00</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 12,

    },
    title: {
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-between'
    },
    statsRow: {
        backgroundColor: 'hsla(324, 53%, 66%,0.65)',
        flexDirection: "row",
        borderTopRightRadius: normalize(15),
        borderBottomLeftRadius: normalize(15),
        padding: 1,
    },
    time: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexGrow: 1,
        margin: 10,
        padding: 10
    },
    h2: {
        fontSize: normalize(15)
    },
    h3: {
        color: 'white',
        fontSize: normalize(15)
    },
    h4: {
        fontSize: normalize(16)
    }
});

export default historyItem;



