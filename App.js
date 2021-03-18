import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Image, Button, SafeAreaView, Alert } from 'react-native';
import DefaultInput from './defaultInput';

export default function App() {
  let info = 'Din dagsform' ;
  let space = ' ';
  console.log("Application running!");
  return (
    
    <View style={[styles.container, {
      // Try setting `flexDirection` to "row".
      flexDirection: "column"
      //flexDirection: "row"
    }]}>
      <View style={{ flex: 1, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
      <Text style={styles.Rubrik} >
        {space}
      </Text>
      <Text style={styles.Rubrik} >
        {space}
        {space}
        {'Din'}
      </Text>
      <Text style={styles.Rubrik} >
        {space}
        {space}
        {'dagsform'}
      </Text>
      </View>
      <View style={{ flex: 0.05, backgroundColor: "'hsla(268, 67%, 89%,1)'" }} />
      <View style={{ flex: 1, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} />
      <View style={{ flex: 0.05, backgroundColor: "'hsla(268, 67%, 89%,1)'" }} />
      <View style={{ flex: 1, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} />

      

    </View>
  );
}


const styles = StyleSheet.create({
  Logo: {
    flex:1,
    padding:100,
    width: 400,
    height: 100,
  },
  container: {
    flex: 1,
    padding:0,
    backgroundColor: 'hsla(272, 100%, 97%,1)',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  Rubrik: {
    fontFamily: "MarkerFelt-Wide",
    fontSize: 40,
  }
  
});
