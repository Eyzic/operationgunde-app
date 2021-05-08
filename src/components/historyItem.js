import React from 'react'
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import StatsDisplay from './statsDisplay';
import Normalize from "../Normalize";

const historyItem = (props) => {
    return (
        <TouchableWithoutFeedback id={props.activityId} onPress={props.action}>
            <View style={[styles.container, props.style]}>
                <View style={{ flexGrow: 4 }}>
                    <View style={styles.title}>
                        <Text style={styles.h4}>{props.title}</Text>
                        <Text style={styles.h4}>{props.date}</Text>
                    </View>
                    <View style={styles.statsRow}>
                        <StatsDisplay statsTitle={"Avg HR"} value={props.avgHR} textStyle={styles.h3} />
                        <StatsDisplay statsTitle={"Distance"} value={props.distance} textStyle={styles.h3} />
                        <StatsDisplay statsTitle={"Type"} value={props.type} textStyle={styles.h3} />

                    </View>
                </View>

                <View style={styles.time}>
                    <Text style={styles.h2}>{formatTime(props.duration)}</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
};

const leftPad = (value, length) => value.toString().length < length ? leftPad("0" + value, length) : value;

function formatTime(timeInSeconds) {
    let hours = Math.floor((timeInSeconds / (60 * 60) % 60));
    hours = leftPad(hours, 2);

    let minutes = Math.floor((timeInSeconds / (60)) % 60);
    minutes = leftPad(minutes, 2);

    let seconds = Math.floor(timeInSeconds % 60);
    seconds = leftPad(seconds, 2);

    let displayTime = hours + ":" + minutes + " h";
    return displayTime;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 12,

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
        borderBottomLeftRadius: Normalize(15),
        padding: 1,
    },
    time: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexGrow: 1,
        margin: 10,
        padding: 10
    },
    h2: {
        fontSize: Normalize(15)
    },
    h3: {
        color: 'white',
        fontSize: Normalize(15)
    },
    h4: {
        fontSize: Normalize(16)
    }
});

export default historyItem;



