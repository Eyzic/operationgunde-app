import React from 'react';

import { Dimensions } from 'react-native';

import PageHeader5 from '../../components/pageHeader5';
import StandardTemplate from '../../templates/StandardTemplate';
import ValueItem from '../../components/historyV';

import Style from '../../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const HistoryHrvScreen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader5
                meny1="flöde"
                meny2="översikt"
                meny4="värden"
                color1="black"
                color2="black"
                color4="#C631CA"
                text1="Din"
                text2="Historik"
                over="History"
                inst="HistoryCalendar"
                val="HistoryHrv"
                style={[Style.item]}
                nav={navigation}
            ></PageHeader5>

            <ValueItem></ValueItem>
        </StandardTemplate>
    );
}

export default HistoryHrvScreen;