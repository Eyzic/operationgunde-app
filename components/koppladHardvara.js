import React from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, Alert, View, TouchableOpacity } from 'react-native';

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

const koppladHardvara = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style}>
            <Text style={styles.h4}>
                Välj hårdvara du vill använda:
            </Text>
            <ScrollView horizontal={true} >

                <TouchableOpacity onPress={() => Alert.alert('Hårdvara vald')}>
                    <View style={styles.button}>
                        <Text style={styles.h3}>
                            Polar pulsband
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Alert.alert('Hårdvara vald')}>
                    <View style={styles.button}>
                        <Text style={styles.h3}>
                            Klocka
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Alert.alert('Hårdvara vald')}>
                    <View style={styles.button}>
                        <Text style={styles.h3}>
                            Filips kondis
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Alert.alert('Hårdvara vald')}>
                    <View style={styles.button}>
                        <Text style={styles.h3}>
                            Runkeeper rösten
                        </Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        textAlign: 'center',
    },
    h4: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
    },
    button: {
        width: normalize(100),
        height: normalize(100),
        marginTop: 20,
        marginRight: 4,
        backgroundColor: "skyblue",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default koppladHardvara;