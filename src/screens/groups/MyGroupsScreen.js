import React from 'react';
import { } from 'react-native';

import Group from '../../components/group';
import AddGroup from '../../components/addGroup';
import PageHeader4 from '../../components/pageHeader4';

import StandardTemplate from '../../templates/StandardTemplate';
import UserContext from '../../components/UserContext';
import GroupContext from '../../components/groupContext';

import local_ip from '../../local_ip';
import Style from '../../styles/Style';

const MyGroupsScreen = ({ navigation }) => {
    const [groups, setGroups] = React.useState([]);
    const context = React.useContext(UserContext);
    const groupContext = React.useContext(GroupContext);

    React.useEffect(() => {
        fetch(local_ip + `/api/user/group?user_id=${context.user}`)
            .then(res => res.json())
            .then(groups => createGroupObjects(groups, navigation, groupContext))
            .then(groupObjects => setGroups([...groupObjects])
            )
    }, [])

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>
            <PageHeader4 text1='Mina' text2='Grupper' Image={require('../../assets/groups/Hasse.png')} style={[Style.item]} />
            {groups}
            <AddGroup style={Style.item} nav={navigation} />
        </StandardTemplate>
    );
}

async function createGroupObjects(data, navigation, groupContext) {
    const items = [];

    if (data instanceof Array) {
        for (const element of data) {
            items.push(<Group
                title={element[0]}
                key={element[0]}
                memberCount={element[1]}
                groupType={"Group"}
                style={Style.item}
                nav={() => {
                    groupContext.groupName = element[0];
                    groupContext.logo = local_ip + `/get_png?logo=${element[2]}`;
                    navigation.navigate("FriendGroup");
                }}
                image={{ uri: local_ip + `/get_png?logo=${element[2]}` }}
            />)
        }
    }
    return items
}

export default MyGroupsScreen;


/*
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
            */