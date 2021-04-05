import React, { useState } from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, Image, View, TouchableOpacity } from 'react-native';

//Detta är en pageheader utan progressview och utan taggad och redo 

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

const pageHeader4 = (props) => {
    const [count, setColor] = useState(0);
    const onPress = () => {
        setColor(count + 1);
    };


    const ifSame = () => {
        if (Math.floor(count % 2) == 1) {
            return (styles.Oversikt2);
        } if (Math.floor(count % 2) == 0) {
            return (styles.Oversikt1);
        }
    };
    const ifSame2 = () => {
        if (count == 0) {
            return (styles.Inställning1);
        } if (Math.floor(count % 2) == 0) {
            return (styles.Inställning2);
        } if (Math.floor(count % 2) == 1) {
            return (styles.Inställning1);
        }
    };

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

                </View>
                <Image source={props.Image} style={styles.image} />

            </View>
            <View >
                <TouchableOpacity onPress={onPress} >

                    <Text style={ifSame()} >
                        {props.meny1}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onPress} >
                    <Text style={ifSame2()} >
                        {props.meny2}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );

}
const styles = StyleSheet.create({
    h1: {
        fontFamily: "Helvetica",
        fontSize: normalize(40),
        lineHeight: 40,
    },
    Inställning1: {
        fontFamily: "Helvetica",
        fontSize: normalize(23),
        lineHeight: 40,
        marginTop: -33.4,
        marginStart: 121,
    },
    Inställning2: {
        fontFamily: "Helvetica",
        fontSize: normalize(23),
        lineHeight: 40,
        marginTop: -33.4,
        marginStart: 121,
        color: 'red',
    },
    Oversikt1: {
        fontFamily: "Helvetica",
        fontSize: normalize(23),
        justifyContent: 'space-between',
    },
    Oversikt2: {
        fontFamily: "Helvetica",
        fontSize: normalize(23),
        justifyContent: 'space-between',
        color: 'red',
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
        height: normalize(135),
        borderRadius: 70
    }
});

export default pageHeader4;