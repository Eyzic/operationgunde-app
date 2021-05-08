import React from 'react'
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import StatsDisplay from './statsDisplay';
import Normalize from "../Normalize";

const radie = Normalize(10);
const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
};



const valueItem = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => Alert.alert('till passets sida')}>
            <View style={[styles.container, props.style]}>
                <View style={{ flexGrow: 4 }}>
                    <View style={styles.title}>
                        <Text style={styles.h4}>{props.date}</Text>

                    </View>
                    <View style={styles.statsRow}>
                        <StatsDisplay statsTitle={"HRV"} value={props.hrv} textStyle={styles.h3} />
                        <StatsDisplay statsTitle={"nåt annat"} value={3} textStyle={styles.h3} />

                    </View>
                </View>



            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-between'
    },
    statsRow: {
        backgroundColor: 'hsla(324, 53%, 66%,0.65)',
        flexDirection: "row",
        borderTopRightRadius: Normalize(15),
        borderBottomLeftRadius: 0,
        padding: 1,
    },
    h3: {
        color: 'white',
        fontSize: Normalize(15)
    },
    h4: {
        fontSize: Normalize(18)
    }
});

export default valueItem;



