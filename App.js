import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Image, Button, SafeAreaView, Alert } from 'react-native';
import DefaultInput from './defaultInput';
import { ScrollView } from 'react-native';

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

      <View style={{ flex: 0.7, left:25,top:45, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
        <Text style={styles.Rubrik} >
          {'Din \ndagsform '}
        </Text>
        <Image source={require( './Springa.png')}
          style={{width: 100, height: 100, left:240, top: -100}} />
        <Text style={{fontFamily: "MarkerFelt-Wide",fontSize: 20, top:-90, left: 10}} >
          {'Taggad och redo'}
        </Text>
      </View>

      <View style={{ flex: 0.35, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
      <ScrollView horizontal = {true} >
        <Text style={styles.text}>
          {'Denna text går att skrolla i sidled, här kommer vi lägga in dom olika målen '}
          {'personen har och hur långt man kommit med dom i procent tror jag, tex dagens steg, '} 
          {'hur långt man har kommit med antalet timmar man planerat att träna, antal km man tänkt springa'}
          {'\nOBS: har inte orkat kolla ännu vad de typsnittet vi valt i figma motsvarar i react native'}
        </Text>
      </ScrollView>
      </View>

      <View style={{ flex: 0.04, backgroundColor: "'hsla(268, 67%, 89%,1)'" }} />
      <View style={{ flex: 0.7, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} />
      <View style={{ flex: 0.04, backgroundColor: "'hsla(268, 67%, 89%,1)'" }} />
      <View style={{ flex: 0.7, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} />
      <View style={{ flex: 0.30, backgroundColor: "'hsla(0, 0%, 100%,1)'" }} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,
    backgroundColor: 'hsla(272, 100%, 97%,1)',
  },
  container2: {
    paddingVertical:20
  },
  Rubrik: {
    fontFamily: "MarkerFelt-Wide",
    fontSize: 40,
  },
  text: {
    fontFamily: "MarkerFelt-Wide",
    fontSize: 20,
  }
  
});
