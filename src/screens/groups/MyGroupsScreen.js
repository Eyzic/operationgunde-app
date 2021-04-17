import React from 'react';
import { } from 'react-native';

import Group from '../../components/group';
import AddGroup from '../../components/addGroup';
import PageHeader4 from '../../components/pageHeader4';

import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';

const MyGroupsScreen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 text1='Mina' text2='Grupper' Image={require('../../assets/groups/Hasse.png')} style={[Style.item]} />
            <Group
                text1='Hasses'
                text2='Kompisar'
                memberCount='5'
                groupType='Grupp'
                Image={require('../../assets/groups/HassesKompisar.png')}
                style={[Style.item]}
                nav={() => navigation.navigate("FriendGroup")}>
            </Group>

            <Group
                text1='IFK'
                text2='Göteborg'
                memberCount='6'
                groupType='Organisation - tränare'
                Image={require('../../assets/groups/IFK.png')}
                style={[Style.item]}
                nav={() => navigation.navigate("OrganisationCoach")}>
            </Group>

            <Group
                text1='IFK'
                text2='Göteborg'
                memberCount='6'
                groupType='Organisation - adept'
                Image={require('../../assets/groups/IFK.png')}
                style={[Style.item]}
                nav={() => navigation.navigate("OrganisationAthlete")}>
            </Group>

            <AddGroup style={Style.item} nav={navigation} />

        </StandardTemplate>
    );
}

export default MyGroupsScreen;