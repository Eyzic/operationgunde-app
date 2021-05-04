import React from "react";

import { Dimensions, View, Text } from "react-native";

import PageHeader5 from "../components/pageHeader5";
import StandardTemplate from "../templates/StandardTemplate";

import Style from "../styles/Style";
import UserInf from "../components/userInf";
import DataIX from "../components/dataIXButton";
import { ScrollView } from "react-native-gesture-handler";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const ProfileInst = ({ navigation }) => {
  return (
    <StandardTemplate navigation={navigation} showMenu={true}>
      <PageHeader5
        meny1="Mål"
        meny2="Inställningar"
        color1="black"
        color2="#C631CA"
        text1="Din"
        text2="Profil"
        over="Profile"
        inst="ProfileInst"
        // val="HistoryHrv"
        style={[Style.item]}
        nav={navigation}
      ></PageHeader5>

      <UserInf infoType="Namn" value="frida"></UserInf>

      <UserInf infoType="Användarnamn" value="friday"></UserInf>

      <UserInf infoType="Mejl" value="saturday"></UserInf>

      <UserInf infoType="Lösenord" value="sunday"></UserInf>

      <UserInf infoType="Födelsedatum" value="ÅÅ/MM/DD"></UserInf>

      <UserInf infoType="Längd" value="lång"></UserInf>

      <UserInf infoType="Vikt" value="en del"></UserInf>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 10,
        }}
      >
        <DataIX name="Importera data"></DataIX>
        <DataIX name="Exportera data"></DataIX>
      </View>
    </StandardTemplate>
  );
};

export default ProfileInst;
