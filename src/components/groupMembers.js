import React from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import FriendLogo from './friendLogo';

import local_ip from '../local_ip';
import Style from '../styles/Style'

const groupMembers = (props) => {
    const [members, setMembers] = React.useState([]);

    React.useEffect(() => {
        fetch(local_ip + `/api/group?group=${props.group}`)
            .then(res => res.json())
            .then(members => createMemberObjects(members, props.nav, props.group))
            .then(membersObjects => setMembers([...membersObjects])
            )
    }, [])

    return (
        <View style={Style.item} >
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: "row" }}>
                    {members}
                </View>
            </ScrollView>
        </View>
    )
};

async function createMemberObjects(members, navigation, group) {
    const items = [];
    if (members instanceof Array) {
        for (const member of members) {
            items.push(
                <TouchableOpacity key={member.user_id} onPress={() => navigation.navigate("FriendGroupFriend", { memberName: member.username })}>
                    <FriendLogo Image={require('../assets/groups/Hasse.png')} />
                    <Text style={{ alignSelf: "center" }}>{member.username}</Text>
                </TouchableOpacity>
            )
        }
    }
    return items;
}

export default groupMembers;