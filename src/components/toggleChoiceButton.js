import React, { useState } from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, Alert, View, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

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
    const whichType = () => {

        if (type == "Organisation") {
            return (
                "Organisation = En grupp så att tränare i olika idrottsgrupper och -lag kan se hur träningen går och lägga in adeptens program"
            );
        } if (type == "Kompisgrupp") {
            return ("Kompisgrupp = En grupp för dig och dina vänner som vill följa varandras träning och som grupp jobba mot samma mål");
        } else {
            return (" ");
        }
    };

    const [type, setType] = useState("");

    return (
        <View style={props.style}>

            <RNPickerSelect
                onValueChange={(type) => setType(type)}
                items={[
                    { label: "Organisation", value: "Organisation" },
                    { label: "Kompisgrupp", value: "Kompisgrupp" },
                ]}
                style={{ ...customPickerStyles }}
            />

            <Text style={styles.h31}>
                {whichType()}
            </Text>

        </View>
    );
}


const styles = StyleSheet.create({
    h31: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});

const customPickerStyles = StyleSheet.create({
    inputIOS: {
        marginTop: 15,
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        marginTop: 15,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default toggleChoiceButton;