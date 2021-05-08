import React from 'react';
import { Text, StyleSheet } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import FriendProfile from '../../components/friendProfile';

import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';
import Normalize from "../../Normalize";

const organisationAthleteFriendScreen = ({ navigation }) => {
    const [groupName, setGroupName] = React.useState("");

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 Image2={require('../../assets/menu/group.png')} over="OrganisationAthlete" inst="OrganisationAthleteFriend" meny3='Gå tillbaka' text1='IFK' text2='Göteborg' memberCount='6' style={[Style.item]} Image={require('../../assets/groups/IFK.png')} nav={navigation} >
            </PageHeader4>

            <FriendProfile style={Style.item} hasProfil={true}>
                <Text>
                    Gick med i IFK Göteborg för
                    0 år 2 mån och 23 dagar sen
              </Text>
            </FriendProfile>
        </StandardTemplate>

    );
}

export default organisationAthleteFriendScreen;