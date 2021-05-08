import React from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, Platform, View, Image } from 'react-native';

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

const FriendProfile = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style}>
            {props.hasProfil &&
                <View style={[styles.row]}>
                    <Image
                        source={require('../assets/groups/Tomas.png')}
                        style={styles.kompis} />
                    <Text style={styles.h5}>
                        {props.name}
                    </Text>
                </View>
            }

            {props.children}



        </View >
    )
};

const styles = StyleSheet.create({
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
    },
    h5: {
        fontFamily: "Helvetica",
        fontSize: normalize(40),
        marginRight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    h6: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        marginBottom: 20
    },
    row2: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
        marginTop: -40,
    },
    column: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
    },
    kompis: {
        width: normalize(150),
        height: normalize(150),
        borderRadius: 50,
        marginLeft: 3,
    }
});

export default FriendProfile;