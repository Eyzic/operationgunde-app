import React from 'react';
import { Text, View, Image, Dimensions, PixelRatio, StyleSheet, ScrollView } from 'react-native';

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


const PageHeader = () => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={{ flex: 0.7, left: normalize(25), top: normalize(45), backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
            <Text style={styles.Rubrik} >
                {'Din \ndagsform '}
            </Text>
            <Image source={require('../assets/springa.png')}
                style={{ width: normalize(125), height: normalize(125), left: normalize(230), top: normalize(-95) }} />
            <Text style={{ fontFamily: "MarkerFelt-Wide", fontSize: normalize(20), top: normalize(-115), left: normalize(10) }} >
                {'Taggad och redo'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Rubrik: {
        fontFamily: "MarkerFelt-Wide",
        fontSize: normalize(40),
    }
});

export default PageHeader;