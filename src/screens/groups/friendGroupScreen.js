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
    const [historyItems, setHistoryItems] = React.useState([]);
    const { group } = route.params;

    console.log("HISTORY");
    console.log(historyItems);

    React.useEffect(() => {
        fetch(local_ip + `/api/group?group=${group}`)
            .then(res => res.json())
            .then(async members => {
                let activities = await Promise.all(members.map(member => {
                    return getHistory({ user: member.user_id, numberOfItems: 5 })
                        .then(res => createHistoryItems(res, member.username, navigation))
                }));
                const flattened = activities.flat();
                const sorted = flattened.sort((currentItem, nextItem) => {
                    return currentItem.props.date < nextItem.props.date
                });
                setHistoryItems(sorted);
            })
    }, [])

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 Image2={require('../../assets/menu/group.png')} over="FriendGroup" inst="FriendGroupSettings" color1='red' color2='black' text1={group} meny1='Översikt  ' meny2='Inställningar' memberCount='6' style={[Style.item]} Image={require('../../assets/groups/HassesKompisar.png')} nav={navigation} >
            </PageHeader4>

            <GroupMembers group={group} nav={navigation}></GroupMembers>
            {historyItems}

        </StandardTemplate>
    );
}

function createHistoryItems(data, username, nav) {
    const items = [];
    if (data) {
        for (const element of data) {
            items.push(<HistoryItem
                date={element.start_date_local}
                duration={element.elapsed_time}
                title={username}
                key={element.activity_id}
                avgHR={element.average_heartrate}
                distance={element.distance}
                type={element.type}
                style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }}
                action={() => nav.navigate("SingleActivity", { activity_id: element.activity_id })}
            />);
        }
    }
    return items
}

function getHistory(data) {
    let user = encodeURIComponent(data.user);
    let number = encodeURIComponent(data.numberOfItems);
    let base = "http://localhost:5000/"
    return fetch(local_ip + `/api/activities?user_id=${user}&nb_activities=${number}`)
        .then(res => res.json())
        .catch(error => console.error(error));
}


export default friendGroupScreen;