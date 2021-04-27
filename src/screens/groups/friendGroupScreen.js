import React from 'react';
import { Dimensions } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import HistoryItem from '../../components/historyItem';
import GroupMembers from '../../components/groupMembers';
import ProgressView from '../../components/progressView';

import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const friendGroupScreen = ({ navigation }) => {
    const [groupName, setGroupName] = React.useState("");

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 Image2={require('../../assets/menu/group.png')} over="FriendGroup" inst="FriendGroupSettings" color1='red' color2='black' text1='Hasses' text2='Kompisar' meny1='Översikt  ' meny2='Inställningar' memberCount='6' style={[Style.item]} Image={require('../../assets/groups/HassesKompisar.png')} nav={navigation} >
            </PageHeader4>



            <GroupMembers groupMember="FriendGroupFriend" image1={require('../../assets/groups/Hasse.png')} image2={require('../../assets/groups/HassesKompisar.png')}
                image3={require('../../assets/groups/Hasse.png')} image4={require('../../assets/groups/HassesKompisar.png')}
                image5={require('../../assets/groups/Hasse.png')} image6={require('../../assets/groups/HassesKompisar.png')} nav={navigation} />




            <HistoryItem text='Jessica' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

            <HistoryItem text='Frida' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

            <HistoryItem text='Einar' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

            <HistoryItem text='Filip' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

        </StandardTemplate>
    );
}
export default friendGroupScreen;