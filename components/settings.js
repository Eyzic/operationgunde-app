import React from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, View, onStartShouldSetResponder, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

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
                        Ändra gruppbild
                    </Text>
                </View>
                <View style={styles.ruta2}>
                    <Text style={styles.rutaText}>
                        Lägg till kompis
                    </Text>
                </View>
                <View style={styles.ruta2}>
                    <Text style={styles.rutaText}>
                        Ändra gruppmål
                    </Text>
                </View>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
    },
    h5: {
        fontFamily: "Helvetica",
        fontSize: normalize(40),
        marginRight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    h6: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'left',
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
        marginTop: 0,
    },
    row2: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
        marginTop: -40,
    },
    column: {
        flexDirection: "column",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
    },
    kompis: {
        width: normalize(150),
        height: normalize(150),
        borderRadius: 50,
        marginLeft: 3,
    },
    ruta: {
        flex: 1,
        backgroundColor: 'hsla(316, 47%, 73%, 1)',
        borderRadius: 20,
        width: normalize(350),
        height: normalize(40),
        marginTop: 15,
        justifyContent: 'center',
    },
    ruta2: {
        flex: 1,
        backgroundColor: 'hsla(316, 47%, 73%, 1)',
        borderRadius: 20,
        width: normalize(250),
        height: normalize(60),
        marginTop: 25,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    rutaText: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
        color: 'white',
    },

});

export default settings;