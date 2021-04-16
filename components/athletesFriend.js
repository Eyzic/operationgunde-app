import React from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, View, onStartShouldSetResponder, TouchableOpacity, Image, Alert } from 'react-native';

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

const athletesFriend = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style}>
            {console.log(props.image)}
            {props.hasProfil &&
                <View style={[styles.row]}>
                    <Image
                        source={require('../assets/Tomas.png')}
                        style={styles.kompis} />
                    <Text style={styles.h5}>
                        {'Tomas'}
                        {'\n Ledin'}
                        {'\n'}
                    </Text>
                </View>
            }
            <View style={styles.row2}>

                {console.log(props.image)}
                {props.hasRuta &&


                    <View style={styles.ruta}>
                        <Text style={styles.rutaText}>
                            {props.text1}
                        </Text>
                    </View>
                }
                <Text style={styles.rutaText2}>
                    {props.text2}
                </Text>

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
        textAlign: 'center',
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
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
        flexDirection: "row",
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
        borderRadius: 10,
        width: normalize(80),
        height: normalize(60),
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
    },
    rutaText: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
        color: 'white',
    },
    rutaText2: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
        color: 'black',

    },

});

export default athletesFriend;