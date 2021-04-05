import React, { useEffect, useState } from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, ScrollView, Platform, Alert, View, TouchableOpacity, Image } from 'react-native';

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

const activityStateButton = (props) => {
    const [activityOn, setActivityOn] = useState(props.activity);

    const [time, setTime] = useState();
    const [timer, setTimer] = useState(new stopWatch());

    const [startTime, setStartTime] = useState();
    const [interval, refInterval] = useState();

    useEffect(() => {
        if (activityOn) {
            timer.start();
        }
        else {
            timer.pause();
        }
    }, [activityOn]);

    useEffect(() => {
        let i = setInterval(() => setTime(timer.getTime()), 100);
        //return clearInterval(i);

    }, []);

    const chooseImage = () => activityOn ? (require('../assets/paus.png')) : (require('../assets/play.png'));
    return (
        <TouchableOpacity onPress={() => setActivityOn(!activityOn)} >
            <Image source={chooseImage()} style={styles.image} />
            <Text>{time}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: normalize(300),
        height: normalize(300),
    },

});

class stopWatch {
    constructor() {
        this.startTime = null;
        this.running = false;
        this.stopTime = null;
        this.interval = null;
        this.currentTime = 0;
    }

    start() {
        if (!this.running) {
            this.startTime = Date.now();
            this.running = true;
            this.interval = setInterval(this.time.bind(this), 100);
        }
    };

    time() {
        this.currentTime = Date.now() - this.startTime;
        console.log("TIME: " + this.currentTime);
    }

    getTime() { return this.currentTime }

    pause() {
        clearInterval(this.interval);
        this.stopTime = Date.now();
        this.running = false;
        console.log(Date.now());
    };


}

export default activityStateButton;