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
        <View style={props.style}>
            <View style={[{ backgroundColor: 'hsla(272, 100%, 97%,1)' }]} >
                <Text style={styles.h2}>
                    {'Vecka 12'}
                </Text>
                <View style={styles.row} >
                    <Text>
                        {'Mån'}
                    </Text>

                    <Text>
                        {'Tis'}
                    </Text>

                    <Text>
                        {'Ons'}
                    </Text>

                    <Text>
                        {'Tor'}
                    </Text>

                    <Text>
                        {'Fre'}
                    </Text>

                    <Text>
                        {'Lör'}
                    </Text>

                    <Text>
                        {'Sön'}
                    </Text>
                </View>
            </View>

            <View style={styles.row} >
                <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                <View style={[styles.box, { backgroundColor: "skyblue" }]} />

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto",
        fontSize: normalize(20)
    },
    box: {
        width: normalize(30),
        height: normalize(30),
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)'
    },
    h2: {
        fontFamily: "Roboto",
        fontSize: normalize(30),
    },
});

export default weekOverview;