import React from 'react';
import { TextInput, Dimensions } from 'react-native';

import PageHeader2 from '../../components/pageHeader2';
import ConnectedHardware from '../../components/connectedHardware';
import StartActivity from '../../components/startActivity';
import StandardTemplate from '../../templates/StandardTemplate';

import ActivityContext from '../../components/activityContext';

import Style from '../../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const NewActivityScreen = ({ navigation }) => {
    const context = React.useContext(ActivityContext);
    const [title, setTitle] = React.useState("Activity");

    React.useEffect(() => {
        context.activityTitle = title;
    }, [title]);

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader2 text1='Ny' text2='Aktivitet' style={[Style.item]}>
            </PageHeader2>

            <TextInput onChangeText={setTitle} style={[Style.item]}></TextInput>

            <ConnectedHardware style={Style.item} />

            <StartActivity style={Style.item} nav={navigation} />

        </StandardTemplate>
    );
}

export default NewActivityScreen;