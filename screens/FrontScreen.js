import React from 'react';
import { SafeAreaView, View, ScrollView, Dimensions, StyleSheet } from 'react-native';

import DailyMeasure from '../components/dailyMeasure';
import PageHeader from '../components/pageHeader';
import WeekOverview from '../components/weekOverview';
import DayOverview from '../components/dayOverview';
import NavMenu from '../components/navMenu';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const FrontScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>

                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, Style.background]}>

                    <PageHeader text1="Din" text2="Dagsform" style={[Style.item]} hasImage={true}>
                    </PageHeader>

                    <WeekOverview style={[Style.item]} />
                    <DayOverview style={[Style.item]} />

                    <DailyMeasure path={'DailyHRV'} text={"Daily measure!"} style={Style.item} nav={navigation} />

                </ScrollView>

                <NavMenu nav={navigation} />

            </View>
        </SafeAreaView >
    );
}

export default FrontScreen;