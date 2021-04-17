import React from 'react';
import { Text, View, PixelRatio, Platform, Dimensions, StyleSheet } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import FriendProfile from '../../components/FriendProfile';

import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';
import Sizes from '../../styles/Sizes';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 420;

function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

const friendGroupFriendScreen = ({ navigation }) => {
    const [groupName, setGroupName] = React.useState("");

    return (

        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 Image2={require('../../assets/menu/grupp2.png')} over="FriendGroup" inst="FriendGroupSettings" meny3='Gå tillbaka' text1='Hasses' text2='Kompisar' memberCount='6' style={[Style.item]} Image={require('../../assets/groups/HassesKompisar.png')} nav={navigation} >
            </PageHeader4>

            {/*TODO: Vet att dessa inte line:ar upp helt, men det blev lättare med strukturen. Vi kan lösa det senare med Grid tror jag.*/}
            <FriendProfile style={Style.item} hasProfil={true}>
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
        fontSize: normalize(25),
        textAlign: 'center',
        color: 'white',
    }
});

export default friendGroupFriendScreen;