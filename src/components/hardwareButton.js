import React, { useState } from 'react';
import { Text, StyleSheet, Alert, View, TouchableOpacity } from 'react-native';
import Normalize from "../Normalize";

const hardwareButton = (props) => {
    const [selected, setSelected] = useState(false);
    const firstUpdate = React.useRef(true);

    const onPress = () => {
        setSelected(!selected);
    };

    React.useEffect(() => {
        if (!firstUpdate.current) {
            selected ? Alert.alert('Hårdvara vald') : Alert.alert('Hårdvara borttagen');
        }
        firstUpdate.current = false;
    }, [selected]);

    const setSelectedColor = () => selected ? { backgroundColor: 'red' } : null;

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.button, setSelectedColor()]}>
                <Text style={styles.h3}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    h3: {
        fontFamily: "Helvetica",
        fontSize: Normalize(15),
        textAlign: 'center',
    },
    button: {
        width: Normalize(80),
        height: Normalize(80),
        marginTop: 20,
        marginRight: 4,
        backgroundColor: "skyblue",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default hardwareButton;