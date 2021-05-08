import React from 'react';
import { Dimensions, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import HistoryItem from '../../components/historyItem';

import StandardTemplate from '../../templates/StandardTemplate';

import local_ip from '../../local_ip';
import Style from '../../styles/Style';
import GroupMembers from '../../components/groupMembers';
import GroupContext from '../../components/groupContext';

const friendGroupScreen = ({ route, navigation }) => {
    const [historyItems, setHistoryItems] = React.useState([]);
    const groupContext = React.useContext(GroupContext);

    console.log(groupContext);

    React.useEffect(() => {
        fetch(local_ip + `/api/group?group=${groupContext.groupName}`)
            .then(res => res.json())
            .then(async members => {
                let activities = await Promise.all(members.map(member => {
                    return getHistory({ user: member.user_id, numberOfItems: 5 })
                        .then(res => createHistoryItems(res, member.name, navigation))
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

            <PageHeader4 Image2={require('../../assets/menu/group.png')} over="FriendGroup" inst="FriendGroupSettings" color1='red' color2='black' text1={groupContext.groupName} meny1='Översikt  ' meny2='Inställningar' memberCount='6' style={[Style.item]} Image={{ uri: groupContext.logo }} nav={navigation} >
            </PageHeader4>

            <GroupMembers group={groupContext.groupName} nav={navigation}></GroupMembers>
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
                action={() => {
                    let historyDetails = {
                        activity_id: element.activity_id,
                        activity_title: username + " - " + element.title,
                        date: element.start_date_local,
                        duration: formatTime(element.elapsed_time),
                        avg_HR: element.average_heartrate,
                        meters: element.distance
                    }
                    nav.navigate("SingleActivity", historyDetails);
                }}
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

const leftPad = (value, length) => value.toString().length < length ? leftPad("0" + value, length) : value;

function formatTime(timeInSeconds) {
    let hours = Math.floor((timeInSeconds / (60 * 60) % 60));
    hours = leftPad(hours, 2);

    let minutes = Math.floor((timeInSeconds / (60)) % 60);
    minutes = leftPad(minutes, 2);

    let seconds = Math.floor(timeInSeconds % 60);
    seconds = leftPad(seconds, 2);

    let displayTime = hours + ":" + minutes + " h";
    return displayTime;
}


export default friendGroupScreen;