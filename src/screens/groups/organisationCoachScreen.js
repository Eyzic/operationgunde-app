import React from 'react';
import { Dimensions } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import HistoryItem from '../../components/historyItem';
import GroupMembers from '../../components/groupMembers';

import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const organisationCoachScreen = ({ route, navigation }) => {
    const [groupName, setGroupName] = React.useState("");
    const { group } = route.params;
    console.log(group);

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 Image2={require('../../assets/menu/group.png')} over="OrganisationCoach" inst="OrganisationCoachSettings" color1='red' color2='black' text1='IFK' text2='Göteborg' Image={require('../../assets/groups/IFK.png')} style={[Style.item]} meny1='Översikt  ' meny2='Inställningar' memberCount='6' nav={navigation} >
            </PageHeader4>

            <GroupMembers group={group} nav={navigation}></GroupMembers>

            <HistoryItem text='Janne' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

            <HistoryItem text='Jeremy' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

            <HistoryItem text='Magnus' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

            <HistoryItem text='Ali' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

        </StandardTemplate>
    );
}
export default organisationCoachScreen;