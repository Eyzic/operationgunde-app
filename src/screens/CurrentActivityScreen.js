import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, View, ScrollView, Dimensions, Text, PixelRatio, StyleSheet, Platform, TouchableOpacity, Image } from 'react-native';

import PageHeader2 from '../components/pageHeader2';
import NavMenu from '../components/navMenu';
import StandardTemplate from '../templates/StandardTemplate';

import ActivityContext from '../components/activityContext';
import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 420;

const CurrentActivityScreen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation}>

            <PageHeader2 text1='Aktiv' text2='aktivitet' style={[Style.item]} >
            </PageHeader2>

            <View style={[Style.item, { alignItems: 'center' }]}>
                <ActivityStateButton style={[Style.item]} />
            </View>

        </StandardTemplate>
    );
}

function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

const ActivityStateButton = (props) => {
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

export default CurrentActivityScreen;