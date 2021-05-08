import React from "react";

import { Dimensions, View, Text, Platform, PixelRatio } from "react-native";

import PageHeader5 from "../components/pageHeader5";
import StandardTemplate from "../templates/StandardTemplate";

import Style from "../styles/Style";
import UserInf from "../components/userInf";
import DataIX from "../components/dataIXButton";

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

      <UserInf infoType="Födelsedatum"></UserInf>

      <UserInf infoType="Längd"></UserInf>

      <UserInf infoType="Vikt"></UserInf>
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
