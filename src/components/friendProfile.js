import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Normalize from "../Normalize";

const FriendProfile = (props) => {
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
    h5: {
        fontFamily: "Helvetica",
        fontSize: Normalize(30),
        marginRight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        borderRadius: 15,
        marginBottom: 20
    },
    kompis: {
        width: Normalize(150),
        height: Normalize(150),
        borderRadius: 50,
        marginLeft: 3,
    }
});

export default FriendProfile;