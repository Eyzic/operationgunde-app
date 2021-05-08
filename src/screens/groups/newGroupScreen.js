import React from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import ToggleChoiceButton from '../../components/toggleChoiceButton';
import StandardTemplate from '../../templates/StandardTemplate';
import UserContext from '../../components/UserContext';

import local_ip from '../../local_ip';

import Style from '../../styles/Style';
import Sizes from '../../styles/Sizes';
import BigButton from '../../components/BigButton';

const newGroupScreen = ({ navigation }) => {
    const [groupName, setGroupName] = React.useState("");
    const context = React.useContext(UserContext);

    let group = {
        user_id: context.user,
        group: groupName,
        logo: "lion"
    }

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 text1='Ny' text2='Grupp' style={[Style.item]} >
            </PageHeader4>
            <View style={[Style.item]}>

                <Text style={Sizes.h2}>Gruppnamn:</Text>
                <TextInput onChangeText={setGroupName} style={[Style.item, Style.pink, { margin: 10 }]} />

                <Text style={Sizes.h2}>Typ av grupp:</Text>

                <ToggleChoiceButton />
                <BigButton action={() => addUserToGroup(group)} text={"Create"} style={Style.item} />

            </View>

        </StandardTemplate>
    );
}


function addUserToGroup(data) {
    console.log(data);
    fetch(local_ip + "/api/user/group", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(res => alert(JSON.stringify(res)))
        .catch(error => console.log(error));
}

export default newGroupScreen;