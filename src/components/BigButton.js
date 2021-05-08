import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Normalize from "../Normalize";

const BigButton = (props) => {

    return (
        <TouchableOpacity style={[props.style, { backgroundColor: '#BB22AA', marginBottom: 30 }]} onPress={props.action}  >
            <Text style={[styles.h2, { textAlign: 'center' }]}>{props.text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        margin: 5
    },
    h2: {
        fontFamily: "Helvetica",
        fontSize: Normalize(25),
    }
});



export default BigButton;