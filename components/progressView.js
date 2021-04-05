import React from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, View } from 'react-native';

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
        <View style={props.style}>
            <View style={styles.row}>
                <ScrollView horizontal={true} >
                    <Text style={styles.h3}>
                        Denna text går att skrolla i sidled, här kommer vi lägga in dom olika målen
                        personen har och hur långt man kommit med dom i procent tror jag, tex dagens steg
                        hur långt man har kommit med antalet timmar man planerat att träna, antal km man tänkt springa
            </Text>
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
    },
});

export default progressView;