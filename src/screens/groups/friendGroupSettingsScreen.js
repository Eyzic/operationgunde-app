import React from 'react';
import { Dimensions } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import Settings from '../../components/settings';

import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';

const friendGroupSettingsScreen = ({ navigation }) => {
    const [groupName, setGroupName] = React.useState("");

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 Image2={require('../../assets/menu/group.png')} over="FriendGroup" inst="FriendGroupSettings" color1='black' color2='red' text1='Hasses' text2='Kompisar' meny1='Översikt  ' meny2='Inställningar' memberCount='6' style={[Style.item]} Image={require('../../assets/groups/HassesKompisar.png')} nav={navigation} >
            </PageHeader4>

            <Settings style={Style.item} text1='Ändra gruppbild' text2='Lägg till kompis' text3='Ändra gruppmål' />
        </StandardTemplate>

    );
}
export default friendGroupSettingsScreen;