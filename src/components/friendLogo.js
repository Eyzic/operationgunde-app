import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Normalize from "../Normalize";

const friendLogo = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style}>
            <Image
                source={props.Image}
                style={styles.kompis} />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
    },
    kompis: {
        width: Normalize(50),
        height: Normalize(50),
        borderRadius: 35,
        marginLeft: 10,
    }
});

export default friendLogo;