import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import FriendProfile from '../../components/friendProfile';

import StandardTemplate from '../../templates/StandardTemplate';
import GroupContext from '../../components/groupContext';

import Style from '../../styles/Style';
import Sizes from '../../styles/Sizes';
import Normalize from "../../Normalize";

const friendGroupFriendScreen = ({ route, navigation }) => {
    const { memberName } = route.params;
    const groupContext = React.useContext(GroupContext);
    return (

        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 Image2={require('../../assets/menu/group.png')} over="FriendGroup" inst="FriendGroupSettings" meny3='Gå tillbaka' text1={groupContext.groupName} memberCount='6' style={[Style.item]} Image={groupContext.logo} nav={navigation} >
            </PageHeader4>

            {/*TODO: Vet att dessa inte line:ar upp helt, men det blev lättare med strukturen. Vi kan lösa det senare med Grid tror jag.*/}
            <FriendProfile style={Style.item} hasProfil={true} name={memberName}>
                <StatsBox text={'Antal steg \ndenna vecka: '} value={"37 309"} />
                <StatsBox text={'Antal km \ndenna vecka: '} value={"18.5"} />
                <StatsBox text={'Träningstid \ndenna vecka: '} value={"5.5 h"} />
            </FriendProfile>
        </StandardTemplate>

    );
}

function StatsBox(props) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[Sizes.h3, { flexGrow: 1 }]}>
                {props.text}
            </Text>
            <View style={styles.ruta}>
                <Text style={styles.rutaText}>
                    {props.value}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ruta: {
        padding: 10,
        backgroundColor: 'hsla(316, 47%, 73%, 1)',
        borderRadius: 10,
        margin: 10,
        flexGrow: 3
    },
    rutaText: {
        fontFamily: "Helvetica",
        fontSize: Normalize(25),
        textAlign: 'center',
        color: 'white',
    }
});

export default friendGroupFriendScreen;