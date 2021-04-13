import React from 'react';
import { SafeAreaView, View, ScrollView, Dimensions, StyleSheet } from 'react-native';

import PageHeader from '../components/pageHeader';
import NavMenu from '../components/navMenu';
import Form from '../components/Form';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const DailyHrvScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>
                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, Style.background]}>

                    <PageHeader text1='Daglig' text2='HRV-mätning' style={[Style.item]} hasImage={false}>
                    </PageHeader>

                    <Form style={Style.item} />

                </ScrollView>

                <NavMenu nav={navigation} />

            </View>
        </SafeAreaView >
    );
}

export default DailyHrvScreen;