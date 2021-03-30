import React from 'react';
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
    const [location, setLocation] = React.useState(['0', '0']);
    const [temp, setTemp] = React.useState(['0']);
    findCoords(setLocation);

    getTemperature(location, setTemp);


    return (
        <View style={[props.style, { flexDirection: 'row' }]}>
            <View style={{ flexGrow: 1, padding: 0 }}>
                <Text style={styles.h3}>
                    Muskeltrötthet
                </Text>
                <EvalBar style={styles.box} />

                <Text style={styles.h3}>
                    Mentalt
                </Text>
                <EvalBar style={styles.box} />

                <Text style={styles.h3}>
                    Energi
                </Text>
                <EvalBar style={styles.box} />

                <Text style={styles.h3}>
                    Sömn
                </Text>
                <EvalBar style={styles.box} />

            </View>

            <View style={[{ alignItems: 'flex-end', flexGrow: 1 }]}>
                <Text style={styles.h2}>
                    {today()}
                </Text>
                <Text style={styles.h1}>
                    {temp} C °
                </Text>
            </View>
        </View >
    )
};

function getTemperature(location, setTemp) {

    try {
        var url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/'
            + location[0] + '/lat/' + location[1] + '/data.json';
        //console.log(url)
        fetch(url)
            .then(response => response.json())
            //  .then(data => console.log("Data: " + data.timeSeries[0].parameters[10].values[0]))
            .then(data => setTemp(data.timeSeries[0].parameters[10].values[0]));
    } catch (error) {
        console.log("Couldn not fetch data: " + error);
    }
}

async function findCoords(setLocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            var coords = position.coords;
            var altitude = JSON.stringify(coords.altitude);
            var longitude = JSON.stringify(coords.longitude);
            setLocation([parseFloat(longitude).toFixed(6), parseFloat(altitude).toFixed(6)]);
        },
        error => { console.log("Could not get location!"); }
    );
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
        fontFamily: "Roboto",
        fontSize: normalize(40),
    },
    h2: {
        fontFamily: "Roboto",
        fontSize: normalize(30),
        lineHeight: 28
    },
    h3: {
        fontFamily: "Roboto",
        fontSize: normalize(20)
    }
});

export default dayOverview;