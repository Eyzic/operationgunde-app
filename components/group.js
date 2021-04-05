import React from 'react';
import { Text, View, Image, Dimensions, PixelRatio, StyleSheet, Platform, TouchableOpacity } from 'react-native';


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

const group = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style} onStartShouldSetResponder={() => props.nav.navigate(props.knapp)}>

            <View style={[styles.header]} >
                <Image source={props.Image} style={styles.image} />
                <View>
                    <Text style={styles.h1} >
                        {props.text1}
                    </Text>
                    <Text style={styles.h1} >
                        {props.text2}
                    </Text>
                </View>

            </View>
            <Text style={styles.h2}>
                {props.OrgGrupp}
            </Text>
            <Text style={styles.h3}>
                {props.antal}
                {' '}
                <Image source={require('../assets/menu/grupp2.png')} style={styles.image2} />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    h1: {
        fontFamily: "Helvetica",
        fontSize: normalize(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 9,
    },
    h2: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginBottom: -25,

    },
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',

    },
    top_border: {
        borderTopColor: '#000',
        borderTopWidth: 3,
        paddingTop: 10
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        width: normalize(110),
        height: normalize(110),
        borderRadius: 20
    },
    image2: {
        width: normalize(20),
        height: normalize(20),
        borderRadius: 0,
        alignSelf: 'flex-end',
    }
});

export default group;