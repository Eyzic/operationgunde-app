import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Normalize from "../Normalize";

const pluss = (props) => {

    return (
        <View style={styles.knapp} onStartShouldSetResponder={() => props.nav.navigate('NewGroup')}  >
            <Text style={styles.h2}> + </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    knapp: {
        flex: 1,
        backgroundColor: '#BB22AA',
        borderRadius: 20,
        width: Normalize(130),
        height: Normalize(50),
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
    },
    row: {
        flexDirection: "row",
        margin: 5
    },
    h2: {
        fontFamily: "Helvetica",
        fontSize: Normalize(30),
        textAlign: 'center',
        color: 'hsla(0, 0%, 100%,1)',
    }
});

export default pluss;