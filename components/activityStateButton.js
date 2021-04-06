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

function formatTime(time) {
    let hours = Math.floor((time / (60 * 60 * 1000) % 60));
    hours = leftPad(hours, 2);

    let minutes = Math.floor((time / (60 * 1000)) % 60);
    minutes = leftPad(minutes, 2);

    let seconds = Math.floor((time / 1000) % 60);
    seconds = leftPad(seconds, 2);

    console.log("SEC: " + seconds);

    let displayTime = hours + ":" + minutes + ":" + seconds;
    return displayTime;
}

const leftPad = (value, length) => value.toString().length < length ? leftPad("0" + value, length) : value;

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
        let formatedTime = () => formatTime(timer.getTime());
        let i = setInterval(() => setTime(formatedTime), 100);
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