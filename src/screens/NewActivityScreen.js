import React from 'react';
import { TextInput, Dimensions } from 'react-native';

import PageHeader2 from '../components/pageHeader2';
import ConnectedHardware from '../components/connectedHardware';
import StartActivity from '../components/startActivity';
import StandardTemplate from '../templates/StandardTemplate';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const NewActivityScreen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader2 text1='Ny' text2='Aktivitet' style={[Style.item]}>
            </PageHeader2>

            <TextInput title="Aktivitetsnamn:" style={[Style.item]}></TextInput>

            <ConnectedHardware style={Style.item} />

            <StartActivity style={Style.item} nav={navigation} />

        </StandardTemplate>
    );
}

export default NewActivityScreen;