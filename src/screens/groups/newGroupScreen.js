import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

import PageHeader4 from '../../components/pageHeader4';
import StandardTemplate from '../../templates/StandardTemplate';
import UserContext from '../../components/UserContext';

import local_ip from '../../local_ip';

import Style from '../../styles/Style';
import Sizes from '../../styles/Sizes';
import BigButton from '../../components/BigButton';

const newGroupScreen = ({ navigation }) => {
    const [groupName, setGroupName] = React.useState("");
    const context = React.useContext(UserContext);
    const [type, setType] = React.useState("");

    let group = {
        user_id: context.user,
        group: groupName,
        logo: "lion"
    }

    const whichType = () => {

        if (type == "Organisation") {
            return (
                "Organisation = En grupp så att tränare i olika idrottsgrupper och -lag kan se hur träningen går och lägga in adeptens program"
            );
        } if (type == "Kompisgrupp") {
            return ("Kompisgrupp = En grupp för dig och dina vänner som vill följa varandras träning och som grupp jobba mot samma mål");
        } else {
            return (" ");
        }
    };

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 text1='Ny' text2='Grupp' style={[Style.item]} >
            </PageHeader4>
            <View style={[Style.item]}>

                <Text style={Sizes.h2}>Gruppnamn:</Text>
                <TextInput onChangeText={setGroupName} style={[Style.item, Style.pink, { margin: 10 }]} />

                <Text style={Sizes.h2}>Typ av grupp:</Text>

                <View style={Style.item}>
                    <RNPickerSelect
                        onValueChange={(type) => setType(type)}
                        items={[
                            { label: "Organisation", value: "Organisation" },
                            { label: "Kompisgrupp", value: "Kompisgrupp" },
                        ]}
                        style={{ ...customPickerStyles }}
                    />

                    <Text style={styles.h31}>
                        {whichType()}
                    </Text>
                </View>


                <BigButton action={() => addUserToGroup(group, type)} text={"Create"} style={Style.item} />

            </View>

        </StandardTemplate>
    );
}

const styles = StyleSheet.create({
    h31: {
        fontFamily: "Helvetica",
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});


const customPickerStyles = StyleSheet.create({
    inputIOS: {
        marginTop: 15,
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        marginTop: 15,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});


async function addUserToGroup(data, type) {
    console.log(data.user_id);
    await fetch(local_ip + `/api/${type == "Organisation" ? "organisation" : "group"}`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ group: data.group, logo: data.logo })
    })
        .then(response => response.ok ? response.json() : alert(response.error))
    fetch(local_ip + `/api/user/${type == "Organisation" ? "organisation" : "group"}`, {
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