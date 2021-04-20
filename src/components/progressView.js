import React from 'react';
import { View, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform } from 'react-native';

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
        <ScrollView horizontal={true} >
            <View style={{ flexDirection: "row" }}>
                <Progress progress={75} strokeWidth={30} style={{ width: 80 }} />
                <Progress progress={75} strokeWidth={30} style={{ width: 80 }} />
                <Progress progress={75} strokeWidth={30} style={{ width: 80 }} />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
    }
});

export default progressView;