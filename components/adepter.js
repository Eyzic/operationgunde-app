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

const adepter = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');
    const onPress = () => props.nav.navigate(props.adeptAT);

    return (
        <View style={props.style}>
            <View style={styles.row}>
                <ScrollView horizontal={true} >

                    <TouchableOpacity onPress={onPress}>
                        <Kompis Image={props.image1} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPress}>
                        <Kompis Image={props.image2} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPress}>
                        <Kompis Image={props.image3} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPress}>
                        <Kompis Image={props.image4} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPress}>
                        <Kompis Image={props.image5} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPress}>
                        <Kompis Image={props.image6} />
                    </TouchableOpacity>

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
        marginBottom: 20,
    },
    kompis: {
        width: normalize(70),
        height: normalize(70),
        borderRadius: 35,
    }
});

export default adepter;