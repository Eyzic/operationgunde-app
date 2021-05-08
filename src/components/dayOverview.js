import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import local_ip from '../local_ip';
import Normalize from "../Normalize";
import UserContext from '../components/UserContext'

const dayOverview = (props) => {
    const userContext = React.useContext(UserContext);
    const [temperature, setTemp] = useState('0');
    const [hrvPrediction, setHrvPrediction] = useState("");

    useEffect(() => {
        getPosition(6)
            .then((position) => getTemperature(position))
            .then((temp) => setTemp(temp))
    }, []);

    useEffect(() => {
        fetch(local_ip + `/ml/neural?user_id=${userContext.user}`)
            .then(res => res.json())
            .then(hrv => setHrvPrediction(hrv.predicted_hrv))
    }, []);

    return (
        <View style={[props.style, { flexDirection: 'row' }]}>
            <View style={{ flexDirection: 'column', maxWidth: '50%' }}>

                <Text style={styles.h2}>Prognos:</Text>
                <Text style={styles.h3}>HRV imorgon: {hrvPrediction}</Text>
                <View style={styles.box2} />

                <Text style={styles.h3}>Din träningsintensitet imorgon bör vara:</Text>
                <View style={styles.box2}>
                    <Text style={{ textAlign: 'center', marginTop: 8, fontSize: Normalize(20) }}>lugnt, normalt, max</Text>
                </View>
            </View>

            <View style={[{ alignItems: 'flex-end', flexGrow: 1 }]}>
                <Text style={styles.h2}>
                    {today()}
                </Text>
                <Text style={styles.h1}>
                    {temperature} C °
                </Text>
            </View>
        </View >
    )
};

async function getTemperature(location) {
    var url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/'
        + location[0] + '/lat/' + location[1] + '/data.json';
    return fetch(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error("Status code not 200");
            }
            return response.json();
        })
        .then(data => {
            if ((!data || !data.timeSeries || !data.timeSeries[0].parameters || !data.timeSeries[0].parameters.values[0])) {
                return data.timeSeries[0].parameters.filter(p => p.name === "t")[0].values[0];
            } else { return null }
        })
        .catch(error => console.log("Could not fetch data: " + error));
}

function getPosition(precision) {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var altitude = JSON.stringify(position.coords.latitude);
                altitude = parseFloat(altitude).toFixed(precision);

                var longitude = JSON.stringify(position.coords.longitude);
                longitude = parseFloat(longitude).toFixed(precision);

                resolve([longitude, altitude]);
            }),
            (error) => {
                console.log("Could not get location! Error: " + error);
            };
    });
}

function today() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month == 1)
        month = "Januari"
    else if (month == 2)
        month = "Februari"
    else if (month == 3)
        month = "Mars"
    else if (month == 4)
        month = "April"
    else if (month == 5)
        month = "Maj"
    else if (month == 6)
        month = "Juni"
    else if (month == 7)
        month = "Juli"
    else if (month == 8)
        month = "Augusti"
    else if (month == 9)
        month = "September"
    else if (month == 10)
        month = "Oktober"
    else if (month == 11)
        month = "November"
    else if (month == 12)
        month = "December"

    return day + ' ' + month + ' ' + year;

}

const styles = StyleSheet.create({
    h1: {
        fontFamily: "Helvetica",
        fontSize: Normalize(30),
    },
    h2: {
        fontFamily: "Helvetica",
        fontSize: Normalize(20),
        lineHeight: 28
    },
    h3: {
        fontFamily: "Helvetica",
        fontSize: Normalize(15),
        marginTop: 15,
    },
    box2: {
        flexDirection: 'column',
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'hsla(316,47%,73%,1)',
    },
    fontSize: Normalize(15)
}
);

export default dayOverview;