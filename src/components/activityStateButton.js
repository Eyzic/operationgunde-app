import React, { useEffect, useState, useContext } from 'react';
import { Text, Dimensions, PixelRatio, StyleSheet, Platform, TouchableOpacity, Image } from 'react-native';
import ActivityContext from './activityContext';

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
    const context = useContext(ActivityContext);
    const [timer, setTimer] = useState(context.timer);
    const [time, setTime] = useState();

    console.log(timer.isPaused());

    const [activityOn, setActivityOn] = useState(!timer.isPaused());

    useEffect(() => {
        if (activityOn) {
            timer.start();
        }
        else {
            timer.pause();
        }
    }, [activityOn]);

    useEffect(() => {
        let formatedTime = () => timer.getTime();
        let i = setInterval(() => setTime(formatedTime), 100);
        return () => clearInterval(i);
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

export default activityStateButton;