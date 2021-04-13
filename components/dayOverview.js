import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, PixelRatio, StyleSheet, Platform } from 'react-native';
import EvalBar from './evalBar';

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

const dayOverview = (props) => {
    const [temperature, setTemp] = useState('0');

    useEffect(() => {
        getPosition(6)
            .then((position) => getTemperature(position))
            .then((temp) => setTemp(temp))
    }, []);

    return (
        <View style={[props.style, { flexDirection: 'row' }]}>
            <View style={ { flexDirection: 'column' }}>

                <Text style={styles.h2}>
                    Prognos:
                
                </Text>
                <Text style={styles.h3}>
                    HRV imorgon:
                
                </Text>
                <View style={styles.box2}/>

                <Text style={styles.h3}>
                    {'Din träningsintensitet'}
                    {'\nimorgon bör vara:'}
                </Text>
                <View style={styles.box2}>
                    <Text style={{textAlign:'center', marginTop:8}}>
                        lugnt, normalt, max
                    </Text>
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
    box: {
        width: normalize(10),
        height: normalize(10),
        marginRight: 4,
        backgroundColor: "skyblue"
    },
    h1: {
        fontFamily: "Helvetica",
        fontSize: normalize(40),
    },
    h2: {
        fontFamily: "Helvetica",
        fontSize: normalize(30),
        lineHeight: 28
    },
    h3: {
        fontFamily: "Helvetica",
        fontSize: normalize(20),
        marginTop:15,
    },
    box2: {
        flexDirection: 'column',
        width: normalize(170),
        height: normalize(35),
        borderRadius:10,
        marginTop:10,
        backgroundColor: 'hsla(316,47%,73%,1)',
    },
});

export default dayOverview;