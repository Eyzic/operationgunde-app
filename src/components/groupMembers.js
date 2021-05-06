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

async function createMemberObjects(data, navigation, group) {
    const items = [];
    if (data instanceof Array) {
        for (const element of data) {
            items.push(
                <TouchableOpacity key={element} onPress={() => navigation.navigate("FriendGroupFriend", { memberName: element, group: group })}>
                    <FriendLogo Image={require('../assets/groups/Hasse.png')} />
                    <Text style={{ alignSelf: "center" }}>{element}</Text>
                </TouchableOpacity>
            )
        }
    }
    return items;
}

export default groupMembers;