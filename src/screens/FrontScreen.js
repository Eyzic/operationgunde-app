import React from 'react';
import { SafeAreaView, View, ScrollView, Dimensions, StyleSheet } from 'react-native';

import DailyMeasure from '../components/dailyMeasure';
import PageHeader from '../components/pageHeader';
import WeekOverview from '../components/weekOverview';
import DayOverview from '../components/dayOverview';
import NavMenu from '../components/navMenu';
import StandardTemplate from '../templates/StandardTemplate';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const FrontScreen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader text1="Din" text2="Dagsform" style={[Style.item]} hasImage={true}>
            </PageHeader>

            <WeekOverview style={[Style.item]} />
            <DayOverview style={[Style.item]} />

            <DailyMeasure path={'DailyHRV'} text={"Daily measure!"} style={Style.item} nav={navigation} />

        </StandardTemplate>
    );
}

export default FrontScreen;