import React from 'react';
import { SafeAreaView, View, ScrollView, Dimensions, StyleSheet } from 'react-native';

import NavMenu from '../components/navMenu';
import HistoryItem from '../components/historyItem';
import PageHeader from '../components/pageHeader';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const HistoryScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>
                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, Style.background]}>

                    <PageHeader text1='Din' text2='Historik' style={[Style.item]} hasImage={false}>
                    </PageHeader>

                    <HistoryItem style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

                </ScrollView>

                <NavMenu nav={navigation} />

            </View>
        </SafeAreaView >
    );
}

export default HistoryScreen;