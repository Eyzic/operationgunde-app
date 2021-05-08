import React from 'react';
import { Dimensions } from 'react-native';

import PageHeader4 from '../../components/pageHeader4';
import Settings from '../../components/settings';

import StandardTemplate from '../../templates/StandardTemplate';

import Style from '../../styles/Style';

const organisationCoachSettingsScreen = ({ navigation }) => {
  const [groupName, setGroupName] = React.useState("");

  return (
    <StandardTemplate navigation={navigation} showMenu={true}>

      <PageHeader4 Image2={require('../../assets/menu/group.png')} over="OrganisationCoach" inst="OrganisationCoachSettings" color1='black' color2='red' text1='IFK' text2='Göteborg' meny1='Översikt  ' meny2='Inställningar' memberCount='6' style={[Style.item]} Image={require('../../assets/groups/IFK.png')} nav={navigation} >
      </PageHeader4>

      <Settings text1='Lägg till tränare' text2='Lägg till adept' text3='Ändra gruppbild' />

    </StandardTemplate>
  );
}
export default organisationCoachSettingsScreen;