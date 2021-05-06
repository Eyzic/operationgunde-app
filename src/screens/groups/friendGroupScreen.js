import React from 'react';
import { Dimensions, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import HistoryItem from '../../components/historyItem';
import FriendLogo from '../../components/friendLogo';

import StandardTemplate from '../../templates/StandardTemplate';

import local_ip from '../../local_ip';
import Style from '../../styles/Style';
import GroupMembers from '../../components/groupMembers';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const friendGroupScreen = ({ route, navigation }) => {

    const { group } = route.params;
    console.log(group);

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 Image2={require('../../assets/menu/group.png')} over="FriendGroup" inst="FriendGroupSettings" color1='red' color2='black' text1={group} meny1='Översikt  ' meny2='Inställningar' memberCount='6' style={[Style.item]} Image={require('../../assets/groups/HassesKompisar.png')} nav={navigation} >
            </PageHeader4>

            <GroupMembers group={group} nav={navigation}></GroupMembers>

            <HistoryItem text='Jessica' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

            <HistoryItem text='Frida' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

            <HistoryItem text='Einar' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

            <HistoryItem text='Filip' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

        </StandardTemplate>
    );
}

export default friendGroupScreen;