import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, View, TouchableOpacity, Image } from 'react-native';
import Kompis from './kompis';
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

const gruppMedlemmar = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style}>
            <View style={styles.row}>
                <ScrollView horizontal={true} >
                    <Kompis Image={props.image1} />
                    <Kompis Image={props.image2} />
                    <Kompis Image={props.image3} />
                    <Kompis Image={props.image4} />
                    <Kompis Image={props.image5} />
                    <Kompis Image={props.image6} />
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
    kompis: {
        width: normalize(70),
        height: normalize(70),
        borderRadius: 35,
    }
});

export default gruppMedlemmar;