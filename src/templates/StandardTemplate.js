import React from 'react';
import { SafeAreaView, View, ScrollView, Dimensions } from 'react-native';

import NavMenu from '../components/navMenu';
import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const StandardTemplate = ({ navigation, showMenu, children }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>

                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, Style.background]}>

                    {children}

                </ScrollView>
                {showMenu ? (
                    <NavMenu nav={navigation} />
                ) : <></>}

            </View>
        </SafeAreaView >
    );
}

export default StandardTemplate;