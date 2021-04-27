import React, { useEffect, useState, useContext } from 'react';
import { View, Dimensions, Text, PixelRatio, StyleSheet, Platform, TouchableOpacity, Image } from 'react-native';

import PageHeader2 from '../../components/pageHeader2';
import StandardTemplate from '../../templates/StandardTemplate';

import UserContext from '../../components/UserContext';
import ActivityContext from '../../components/activityContext';
import Style from '../../styles/Style';
import Sizes from '../../styles/Sizes';
import BigButton from '../../components/BigButton';
import StopWatch from '../../components/stopWatch';

import local_ip from '../../local_ip';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 420;

const CurrentActivityScreen = ({ navigation }) => {
    const context = useContext(ActivityContext);
    const userState = useContext(UserContext);
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader2 text1='Aktiv' text2='aktivitet' style={[Style.item]} >
            </PageHeader2>

            <ActivityStateButton style={[Style.item]} />
            <View style={[Style.item, styles.activity]}>
                <Text style={Sizes.h3}>HR: 65</Text>
                <Text style={Sizes.h3}>Max HR: 116</Text>
            </View>
            <View style={[Style.item, styles.activity]}>
                <Text style={Sizes.h3}>Avg. HR: 83</Text>
                <Text style={Sizes.h3}>Km: 3.5</Text>
            </View>
            <BigButton style={Style.item} text={"End activity"} action={() => endActivity(navigation, context, userState.user)} />

        </StandardTemplate>
    );
}

function endActivity(nav, context, userID) {
    context.timer.stop();

    const activity = {
        user_id: userID,
        activity_id: "11", //Ta bort när FILIP har implementerat detta i servern istället.
        title: context.activityTitle,
        average_heartrate: 75,
        start_date_local: new Date().toISOString().substr(0, 10),
        distance: 500,
        moving_time: context.timer.getRawTime(),
        elapsed_time: context.timer.getRawTime(),
        type: "Running"
    }

    postActivity(activity)
        .then(resetTimer(context))
        .then(nav.navigate("HistoryItemScreen"));

}

function resetTimer(context) {
    context.timer = new StopWatch;
    context.activityRunning = false;
}

function postActivity(activity) {

    return fetch(local_ip + '/api/activity', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(activity)
    })
        .then(res => res.json())

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

    const chooseImage = () => activityOn ? (require('../../assets/paus.png')) : (require('../../assets/play.png'));
    return (
        <View style={[Style.item, styles.activity]}>
            <TouchableOpacity onPress={() => setActivityOn(!activityOn)} >
                <Image source={chooseImage()} style={styles.image} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', width: '50%' }}>
                <Text style={Sizes.h2}>Workout time:</Text>
                <Text style={Sizes.h3}>{time}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: normalize(150),
        height: normalize(150),
    },
    activity: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    }

});

export default CurrentActivityScreen;