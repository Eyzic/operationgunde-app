import React from 'react';
import { View, Text } from 'react-native';

import PageHeader4 from '../components/pageHeader4';
import StandardTemplate from '../templates/StandardTemplate';
import Form from '../components/form';

import Sizes from '../styles/Sizes';
import Style from '../styles/Style';

const DailyHrvScreen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 style={[Style.item]} text1="HRV - " text2="8 maj 2021">
            </PageHeader4>

            <View style={Style.item}>

                <Text style={Sizes.h3}>
                    {'\nToppen! \nDu har fyllt i dagens formulär. \n\nFör varje dag du fyller i formuläret kommer HRV prognosen förbättras.\n'}

                </Text>
            </View>

        </StandardTemplate>
    );
}

export default DailyHrvScreen;


