import React from 'react';
import { Dimensions } from 'react-native';

import PageHeader from '../components/pageHeader';
import StandardTemplate from '../templates/StandardTemplate';
import Form from '../components/form';

import Style from '../styles/Style';

const DailyHrvScreen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader text1='Daglig' text2='HRV-mätning' style={[Style.item]} hasImage={false}>
            </PageHeader>

            <Form style={Style.item} nav={navigation} />

        </StandardTemplate>
    );
}

export default DailyHrvScreen;