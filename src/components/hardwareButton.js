import React, { useState } from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, Alert, View, TouchableOpacity } from 'react-native';

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

const hardwareButton = (props) => {
    const [selected, setSelected] = useState(false);
    const firstUpdate = React.useRef(true);

    const onPress = () => {
        setSelected(!selected);
    };

    React.useEffect(() => {
        if (!firstUpdate.current) {
            selected ? Alert.alert('Hårdvara vald') : Alert.alert('Hårdvara borttagen');
        }
        firstUpdate.current = false;
    }, [selected]);

    const setSelectedColor = () => selected ? { backgroundColor: 'red' } : null;

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.button, setSelectedColor()]}>
                <Text style={styles.h3}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
    },
    button: {
        width: normalize(100),
        height: normalize(100),
        marginTop: 20,
        marginRight: 4,
        backgroundColor: "skyblue",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default hardwareButton;