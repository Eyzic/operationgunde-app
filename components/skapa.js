import React from 'react';
import { View, StyleSheet, Text, Dimensions, PixelRatio, Platform } from 'react-native';


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

const pluss = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={styles.knapp} onStartShouldSetResponder={() => props.nav.navigate('SkapadGrupp')}  >
            <Text style={styles.h2}> Skapa </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    knapp: {
        flex: 1,
        backgroundColor: '#BB22AA',
        borderRadius: 20,
        width: normalize(130),
        height: normalize(50),
        alignSelf: 'center',
        marginTop: 200,
        justifyContent: 'center',
    },
    row: {
        flexDirection: "row",
        margin: 5
    },
    h2: {
        fontFamily: "Helvetica",
        fontSize: normalize(30),
        textAlign: 'center',
        color: 'hsla(0, 0%, 100%,1)',
    }
});



export default pluss;