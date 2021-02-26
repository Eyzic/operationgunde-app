import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, Image, TextInput, TouchableWithoutFeedback, View , SafeAreaView, TouchableOpacity, Alert, Platform, Dimensions} from 'react-native';
import DefaultInput from './defaultInput';
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
export default function App() {

  let info = 'historik';
  //console.log("Application running!");


  
  return (
    <SafeAreaView style={styles.container}>

<view style={{backgroundColor: 'hsla(0, 50%, 50%,1)',
     width: 100,
     height: 70,
     alignSelf: "flex-start",
  }
}>
 
    </view>

    <view style={{
      backgroundColor: 'hsla(200, 50%, 50%,1)' ,
       width: 70,
       height: 90,
       
       }}>
 
    </view>

   
  
    
    </SafeAreaView>
  );
}



// mina popups fungerar inte? Alert

//utmaxat från view
// <DefaultInput>Placeholder</DefaultInput>
//<Text>Netinfo: {info}</Text>
//<StatusBar style="auto" />

const styles = StyleSheet.create({
  container: {
    flex: 1,
     flexDirection: "row",
    backgroundColor: 'hsla(264, 16%, 47%,1)',
    //'hsla(285, 50%, 50%,1)'
   // alignItems: 'center',
    justifyContent: 'center' ,
    alignItems: "center" ,//secondary axis
    //paddingTop: Platform.OS == "ios"? 20 :30,
  },
});
