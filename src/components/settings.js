import React from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, Platform, View, TextInput } from 'react-native';

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

const settings = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style}>
            <View style={styles.column}>
                <Text style={styles.h6}>
                    Gruppnamn:
                </Text>
                <View style={styles.ruta}>
                    <TextInput />
                </View>
                <View style={styles.ruta2}>
                    <Text style={styles.rutaText}>
                        {props.text1}
                    </Text>
                </View>
                <View style={styles.ruta2}>
                    <Text style={styles.rutaText}>
                        {props.text2}
                    </Text>
                </View>
                <View style={styles.ruta2}>
                    <Text style={styles.rutaText}>
                        {props.text3}
                    </Text>
                </View>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    h6: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'left',
    },
    column: {
        flexDirection: "column",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
    },
    ruta: {
        flex: 1,
        backgroundColor: 'hsla(316, 47%, 73%, 1)',
        borderRadius: 20,
        padding: 15,
        marginTop: 15,
        justifyContent: 'center',
    },
    ruta2: {
        flex: 1,
        backgroundColor: 'hsla(316, 47%, 73%, 1)',
        borderRadius: 20,
        marginTop: 25,
        justifyContent: 'center',
        padding: 10
    },
    rutaText: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
        color: 'white',
    },

});

export default settings;