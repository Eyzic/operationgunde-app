import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, PixelRatio, Platform, TouchableOpacity } from 'react-native';
import ActivityContext from './activityContext';


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

const startActivity = (props) => {
    const context = useContext(ActivityContext);

    return (
        <TouchableOpacity style={[props.style, { backgroundColor: '#BB22AA', marginBottom: 30 }]} onPress={() => goToNext(props.nav, context)}  >
            <Text style={[styles.h2, { textAlign: 'center' }]}>Starta aktivitet</Text>
        </TouchableOpacity>
    )
};

function goToNext(nav, context) {
    context.activityRunning = true;
    nav.navigate("CurrentActivity");
}

const styles = StyleSheet.create({
    h2: {
        fontFamily: "Helvetica",
        fontSize: normalize(30),
    }
});

export default startActivity;