import React from 'react';
import { Dimensions, View, SafeAreaView } from 'react-native';

import PageHeader5 from '../../components/pageHeader5';
import HistoryOver from '../../components/historyO';
import NavMenu from '../../components/navMenu';
import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';

const HistoryCalendarScreen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>
            <PageHeader5
                meny1="flöde"
                meny2="översikt"
                meny4="värden"
                color1="black"
                color2="#C631CA"
                color4="black"
                text1="Din"
                text2="Historik"
                over="History"
                inst="HistoryCalendar"
                val="HistoryHrv"
                style={[Style.item]}
                nav={navigation}
            ></PageHeader5>

            <HistoryOver />

        </StandardTemplate>

    );
}

export default HistoryCalendarScreen;




