import React, { useState } from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, Platform, View, TouchableOpacity } from 'react-native';

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

//TODO
//Har en idé på hur vi kan göra om denna komponent visuellt. Som en toggleButton som visar 
//informationen on grupp/organisation beroende på vilken man har vald som aktiv.
//Denna buggar också just nu iom att du kan klicka på "kompisgrupp", men den väljer ändå "organisation".

const toggleChoiceButton = (props) => {
    const [count, setColor] = useState(0);
    const onPress = () => {
        setColor(count + 1);
    };


    const ifSame = () => {
        if (Math.floor(count % 2) == 1) {
            return (styles.button2);
        } if (Math.floor(count % 2) == 0) {
            return (styles.button);
        }
    };
    const ifSame2 = () => {
        if (count == 0) {
            return (styles.button);
        } if (Math.floor(count % 2) == 0) {
            return (styles.button2);
        } if (Math.floor(count % 2) == 1) {
            return (styles.button);
        }
    };


    return (
        <View style={props.style}>
            <TouchableOpacity onPress={onPress} >
                <View style={ifSame()} />
                <Text style={styles.h3}>
                    Organisation
            </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress} >
                <View style={ifSame2()} />
                <Text style={styles.h3}>
                    Kompisgrupp
            </Text>
            </TouchableOpacity>

            <Text style={styles.h31}>
                Organisation = En grupp så att tränare i olika
                idrottsgrupper och -lag kan se hur träningen går och lägga in adeptens program
            </Text>
            <Text style={styles.h31}>
                Kompisgrupp = En grupp för dig och dina vänner som vill
                följa varandras träning och som grupp jobba mot samma mål
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
        marginTop: -32,
        marginBottom: 20,
    },
    h31: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        width: normalize(40),
        height: normalize(40),
        marginTop: 10,
        backgroundColor: "skyblue",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button2: {
        width: normalize(40),
        height: normalize(40),
        marginTop: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red",
        flexDirection: 'row',
    },
});

export default toggleChoiceButton;