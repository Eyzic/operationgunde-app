import React from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Dimensions, StyleSheet } from 'react-native';

import PageHeader2 from '../components/pageHeader2';
import ConnectedHardware from '../components/connectedHardware';
import StartActivity from '../components/startActivity';
import NavMenu from '../components/navMenu';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const NewActivityScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>
                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

                    <PageHeader2 text1='Ny' text2='Aktivitet' style={[styles.item]}>
                    </PageHeader2>

                    <TextInput title="Aktivitetsnamn:" style={[styles.item]}></TextInput>

                    <ConnectedHardware style={styles.item} />

                    <StartActivity style={styles.item} nav={navigation} />

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

export default NewActivityScreen;