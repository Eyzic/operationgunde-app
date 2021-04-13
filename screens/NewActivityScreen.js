import React from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Dimensions, StyleSheet } from 'react-native';

import PageHeader2 from '../components/pageHeader2';
import ConnectedHardware from '../components/connectedHardware';
import StartActivity from '../components/startActivity';
import NavMenu from '../components/navMenu';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const NewActivityScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>
                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, Style.background]}>

                    <PageHeader2 text1='Ny' text2='Aktivitet' style={[Style.item]}>
                    </PageHeader2>

                    <TextInput title="Aktivitetsnamn:" style={[Style.item]}></TextInput>

                    <ConnectedHardware style={Style.item} />

                    <StartActivity style={Style.item} nav={navigation} />

                </ScrollView>

                <NavMenu nav={navigation} />
            </View>
        </SafeAreaView >
    );
}

export default NewActivityScreen;