import React from 'react';
import { SafeAreaView, View, ScrollView, Dimensions, StyleSheet } from 'react-native';

import PageHeader2 from '../components/pageHeader2';
import NavMenu from '../components/navMenu';
import ActivityStateButton from '../components/activityStateButton';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const CurrentActivityScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>
                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, Style.background]}>

                    <PageHeader2 text1='Aktiv' text2='aktivitet' style={[Style.item]} >
                    </PageHeader2>

                    <View style={[Style.item, { alignItems: 'center' }]}>
                        <ActivityStateButton style={[Style.item]} />
                    </View>

                </ScrollView>

                <NavMenu nav={navigation} />

            </View>
        </SafeAreaView >
    );
}

export default CurrentActivityScreen;