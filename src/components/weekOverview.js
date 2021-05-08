import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Normalize from "../Normalize";

Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
        - 3 + (week1.getDay() + 6) % 7) / 7);
}

function weekNumber() {
    var date = new Date();
    console.log(date);
    var week = date.getWeek();
    return week;
}

const weekOverview = (props) => {

    return (
        <View style={props.style}>
            <View>
                <View style={[styles.row, { marginBottom: 10 }]}>
                    <Text style={styles.h2}>Vecka: {weekNumber()}</Text>
                    <Text style={styles.h2}>Idag</Text>
                </View>
                <View style={[styles.row, { marginBottom: 5 }]} >
                    <Text>Mån</Text>
                    <Text>Tis</Text>
                    <Text>Ons</Text>
                    <Text>Tor</Text>
                    <Text>Fre</Text>
                    <Text>Lör</Text>
                    <Text>Sön</Text>
                </View>
            </View>

            <View style={styles.row} >
                <View style={[styles.box]} />
                <View style={[styles.box]} />
                <View style={[styles.box]} />
                <View style={[styles.box]} />
                <View style={[styles.box]} />
                <View style={[styles.box]} />
                <View style={[styles.box]} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
        width: Normalize(20),
        height: Normalize(20),
        backgroundColor: "skyblue"
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'hsla(272, 100%, 97%,1)'
    },
    h2: {
        fontFamily: "Helvetica",
        fontSize: Normalize(20),
    },
});

export default weekOverview;