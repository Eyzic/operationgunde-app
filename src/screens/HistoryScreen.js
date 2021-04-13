import React from 'react';
import { SafeAreaView, View, ScrollView, Dimensions, StyleSheet } from 'react-native';

import StandardTemplate from '../templates/StandardTemplate';
import HistoryItem from '../components/historyItem';
import PageHeader from '../components/pageHeader';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const HistoryScreen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader text1='Din' text2='Historik' style={[Style.item]} hasImage={false}>
            </PageHeader>

            <HistoryItem style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

        </StandardTemplate>
    );
}

export default HistoryScreen;