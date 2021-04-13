import React from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Dimensions, StyleSheet } from 'react-native';

import DailyMeasure from '../components/dailyMeasure';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT }}>
                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1, paddingTop: 250 }, Style.background]}>

                    <TextInput style={[Style.item]}></TextInput>

                    <DailyMeasure path={'FrontPage'} text={"Logga in!"} style={Style.item} nav={navigation} />

                </ScrollView>
            </View>
        </SafeAreaView>);
}

export default LoginScreen;