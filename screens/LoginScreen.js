import React from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Dimensions, StyleSheet } from 'react-native';

import DailyMeasure from '../components/dailyMeasure';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT }}>
                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1, paddingTop: 250 }, styles.background]}>

                    <TextInput style={[styles.item]}></TextInput>

                    <DailyMeasure path={'FrontPage'} text={"Logga in!"} style={styles.item} nav={navigation} />

                </ScrollView>
            </View>
        </SafeAreaView>);
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

export default LoginScreen;