import React from 'react';
import { Text, Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import FriendProfile from '../../components/friendProfile';

import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';

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

const organisationAthleteFriendScreen = ({ navigation }) => {
    const [groupName, setGroupName] = React.useState("");

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 Image2={require('../../assets/menu/group.png')} over="OrganisationAthlete" inst="OrganisationAthleteFriend" meny3='Gå tillbaka' text1='IFK' text2='Göteborg' memberCount='6' style={[Style.item]} Image={require('../../assets/groups/IFK.png')} nav={navigation} >
            </PageHeader4>

            <FriendProfile style={Style.item} hasProfil={true}>
                <Text>
                    Gick med i IFK Göteborg för
                    0 år 2 mån och 23 dagar sen
              </Text>
            </FriendProfile>
        </StandardTemplate>

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

export default organisationAthleteFriendScreen;