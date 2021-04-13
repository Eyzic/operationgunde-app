import React from 'react';
import { Text, View, Image, Dimensions, PixelRatio, StyleSheet, Platform } from 'react-native';
import ProgressView from './progressView';

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


//Props: style = css for the toplevel of the component.
//       hasImage = true or false depending on whether you want to render a picture or not.
//       image = the location of the image to be shown. Can be ignored if there is no image.

const PageHeader = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style}>
            <View style={[styles.header]}>
                <View>
                    <Text style={styles.h1} >
                        {props.text1}
                    </Text>
                    <Text style={styles.h1} >
                        {props.text2}
                    </Text>

                    <Text style={[styles.h3, styles.top_border]}>
                        Taggad och redo
                    </Text>
                </View>
                {props.hasImage &&
                    <Image source={require('../assets/springa.png')} style={styles.image} />}

            </View>
            <ProgressView />
        </View>
    );
}

const styles = StyleSheet.create({
    h1: {
        fontFamily: "Helvetica",
        fontSize: normalize(40),
        lineHeight: 40
    },
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
    },
    top_border: {
        borderTopColor: '#000',
        borderTopWidth: 3,
        paddingTop: 10
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        width: normalize(135),
        height: normalize(135)
    }
});

export default PageHeader;