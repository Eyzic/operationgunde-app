import React from 'react';
import { SafeAreaView, View, ScrollView, Dimensions, StyleSheet } from 'react-native';

import DailyMeasure from '../components/dailyMeasure';
import PageHeader from '../components/pageHeader';
import WeekOverview from '../components/weekOverview';
import DayOverview from '../components/dayOverview';
import NavMenu from '../components/navMenu';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const FrontScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>

                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

                    <PageHeader text1="Din" text2="Dagsform" style={[styles.item]} hasImage={true}>
                    </PageHeader>

                    <WeekOverview style={[styles.item]} />
                    <DayOverview style={[styles.item]} />

                    <DailyMeasure path={'DailyHRV'} text={"Daily measure!"} style={styles.item} nav={navigation} />

                </ScrollView>

                <NavMenu style={styles.menu} nav={navigation} />

            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'hsla(268, 67%, 89%,1)'
    },
    border: {
        borderColor: 'red',
        borderWidth: 3
    },
    item: {
        backgroundColor: 'hsla(272, 100%, 97%,1)',
        marginBottom: 10,
        padding: 20,
        borderRadius: 15
    },
    menu: {
        flexDirection: "row",
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'hsla(0, 0%, 100%,1)',
        padding: 5,
        paddingHorizontal: 20
    }
});

export default FrontScreen;