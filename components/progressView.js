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

const progressView = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <ScrollView horizontal={true} >
            <Text style={styles.h3}>
                {'Denna text går att skrolla i sidled, här kommer vi lägga in dom olika målen '}
                {'personen har och hur långt man kommit med dom i procent tror jag, tex dagens steg, '}
                {'hur långt man har kommit med antalet timmar man planerat att träna, antal km man tänkt springa'}
            </Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    h3: {
        fontFamily: "Roboto",
        fontSize: normalize(20),
    }
});

export default progressView;