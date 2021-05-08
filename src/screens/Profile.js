import React from "react";

import { Dimensions } from "react-native";

import PageHeader5 from "../components/pageHeader5";
import StandardTemplate from "../templates/StandardTemplate";

import Style from "../styles/Style";
import Goal from "../components/goal";

const Profile = ({ navigation }) => {
  return (
    <StandardTemplate navigation={navigation} showMenu={true}>
      <PageHeader5
        meny1="Mål"
        meny2="Inställningar"
        color1="#C631CA"
        color2="black"
        text1="Din"
        text2="Profil"
        over="Profile"
        inst="ProfileInst"
        style={[Style.item]}
        nav={navigation}
      ></PageHeader5>
      <Goal goalType="10000 steg" value="12034"></Goal>

      <Goal goalType="50 km/vecka" value="37"></Goal>
    </StandardTemplate>
  );
};

export default Profile;
