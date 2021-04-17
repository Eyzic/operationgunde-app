import React from 'react';
import { Dimensions } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';


const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const createdGroupScreen = ({ navigation }) => {
    const [groupName, setGroupName] = React.useState("");

    return (

        <StandardTemplate navigation={navigation} showMenu={true}>
            <PageHeader4 text1='"Grupp' text2='namn"' style={[Style.item]}>
            </PageHeader4>
        </StandardTemplate>

    );
}
export default createdGroupScreen;