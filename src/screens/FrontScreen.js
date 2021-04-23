import React from 'react';
import { Dimensions } from 'react-native';

import BigButton from '../components/BigButton';
import PageHeader from '../components/pageHeader';
import WeekOverview from '../components/weekOverview';
import DayOverview from '../components/dayOverview';
import ProgressView from '../components/progressView';
import StandardTemplate from '../templates/StandardTemplate';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const FrontScreen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader text1="Din" text2="Dagsform" style={[Style.item]} hasImage={true}>

            </PageHeader>

            <WeekOverview style={[Style.item]} />
            <DayOverview style={[Style.item]} />

            <BigButton text={"Daily measure!"} style={Style.item} action={() => navigation.navigate('DailyHRV')} />

        </StandardTemplate>
    );
}

export default FrontScreen;