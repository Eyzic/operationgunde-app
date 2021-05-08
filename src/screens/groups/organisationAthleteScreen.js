import React from 'react';
import { Text, View, Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import GroupMembers from '../../components/groupMembers';

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

const organisationAthleteScreen = ({ route, navigation }) => {
    const [groupName, setGroupName] = React.useState("");
    const { group } = route.params;
    console.log(group);

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 Image2={require('../../assets/menu/group.png')} text1='IFK' text2='Göteborg' Image={require('../../assets/groups/IFK.png')} style={[Style.item]} memberCount='6' nav={navigation} >
            </PageHeader4>

            <GroupMembers group={group} nav={navigation}></GroupMembers>

            <View style={Style.item}>

                {/*TODO - Byt ut mot en Button*/}
                <View style={styles.ruta}>
                    <Text style={styles.rutaText}>
                        Mitt träningsprogram
            </Text>
                </View>


                {/*TODO - Byt ut mot en Button*/}
                <View style={styles.ruta}>
                    <Text style={styles.rutaText}>
                        Meddelande från tränare
                </Text>
                </View>
            </View>

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

export default organisationAthleteScreen;