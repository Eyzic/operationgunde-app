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


const PageHeader = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style}>
            <Text style={styles.Rubrik} >
                {'Din \ndagsform '}
            </Text>
            <Image source={require('../assets/springa.png')}
                style={{ width: normalize(125), height: normalize(125) }} />
            <Text>
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