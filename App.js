import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, Image, TextInput, TouchableWithoutFeedback, View , SafeAreaView, TouchableOpacity, Alert, Platform, Dimensions} from 'react-native';
import DefaultInput from './defaultInput';
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
export default function App() {
  

    let info = 'historik sida';
    console.log("Application running!");
    return (

      <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'hsla(264, 16%, 100%,1)',
        height: '95%',
        width: '95%',
        borderRadius: 10,

       
      }}>
        <Button 
        
        color="blue"
  title="Solid Button"
/>
<Button
  title="2"
/>
      </View>
      </SafeAreaView>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'hsla(264, 16%, 47%,1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  //let info = 'historik';
  //console.log("Application running!");


  
  //return (
   // <SafeAreaView style={styles.container}>

    
    
 //   </SafeAreaView>
  //);
//}



// mina popups fungerar inte? Alert

//utmaxat från view
// <DefaultInput>Placeholder</DefaultInput>
//<Text>Netinfo: {info}</Text>
//<StatusBar style="auto" />

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: 'hsla(200, 50%, 50%,1)',
    //alignItems: 'center',
  //  justifyContent: 'center',
    //flex: 1,
    // flexDirection: "row",
   // backgroundColor: 'hsla(264, 16%, 47%,1)',
    //'hsla(285, 50%, 50%,1)'
   // alignItems: 'center',
    //justifyContent: 'center' ,
    //alignItems: "center" ,//secondary axis
   // paddingTop: Platform.OS == "ios"? 20 :30,
 // },




//});
