import React from 'react';
import { View, Dimensions, PixelRatio, StyleSheet, Platform, TouchableOpacity, Alert, Image } from 'react-native';

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

const navMenu = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style}>

            <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
                <Image

                    source={require('../assets/menu/GRUPP.png')}
                    style={styles.normalize} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
                <Image
                    source={require('../assets/menu/PROFIL.png')}
                    style={styles.normalize} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.nav.navigate("FrontPage")}>
                <Image
                    source={require('../assets/menu/HEM.png')}
                    style={styles.normalize} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
                <Image
                    source={require('../assets/menu/TIMER.png')}
                    style={styles.normalize} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.nav.navigate("History1")}>
                <Image
                    source={require('../assets/menu/HISTORIK.png')}
                    style={styles.normalize} />
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        margin: 5
    },
    normalize: {
        width: normalize(40),
        height: normalize(40)
    }
});

export default navMenu;