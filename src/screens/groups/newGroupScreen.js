import React from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import CreatGroup from '../../components/creatGroup';
import ToggleChoiceButton from '../../components/toggleChoiceButton';
import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';
import Sizes from '../../styles/Sizes';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const newGroupScreen = ({ navigation }) => {
    const [groupName, setGroupName] = React.useState("");

    return (
        <StandardTemplate navigation={navigation} showMenu={true}>

            <PageHeader4 text1='Ny' text2='Grupp' style={[Style.item]} >
            </PageHeader4>
            <View style={[Style.item]}>

                <Text style={Sizes.h2}>Gruppnamn:</Text>
                <TextInput onTextChanged={setGroupName} style={[Style.item, Style.pink, { margin: 10 }]} />

                <Text style={Sizes.h2}>Typ av grupp:</Text>

                <ToggleChoiceButton />

                <CreatGroup style={Style.item} nav={navigation} />
            </View>

        </StandardTemplate>
    );
}
export default newGroupScreen;