import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import HardwareButton from './hardwareButton';
import Normalize from "../Normalize";

const connectedHardware = (props) => {
    return (
        <View style={props.style}>
            <Text style={styles.h4}>
                Välj hårdvara du vill använda:
            </Text>
            <ScrollView horizontal={true} >
                <HardwareButton text={'Polar pulsband'} />
                <HardwareButton text={'Klocka'} />
                <HardwareButton text={'Filips kondis'} />
                <HardwareButton text={'Einars snabba fötter'} />
            </ScrollView>
        </View >
    )
};

const styles = StyleSheet.create({
    h4: {
        fontFamily: "Helvetica",
        fontSize: Normalize(18),
    },
});

export default connectedHardware;