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
          style={{width: 125, height: 125, left:230, top: -95}} />
        <Text style={{fontFamily: "MarkerFelt-Wide",fontSize: 20, top:-115, left: 10}} >
          {'Taggad och redo'}
        </Text>
      </View>

      <View style={{ flex: 0.35, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
      <ScrollView horizontal = {true} >
        <Text style={styles.text2}>
          {'Denna text går att skrolla i sidled, här kommer vi lägga in dom olika målen '}
          {'personen har och hur långt man kommit med dom i procent tror jag, tex dagens steg, '} 
          {'hur långt man har kommit med antalet timmar man planerat att träna, antal km man tänkt springa'}
          {'\nOBS: har inte orkat kolla ännu vad de typsnittet vi valt i figma motsvarar i react native'}
        </Text>
      </ScrollView>
      </View>

      <View style={{ flex: 0.04, backgroundColor: "'hsla(268, 67%, 89%,1)'" }} />

      <View style={{ flex: 0.4, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
        <Text style ={styles.text}>
          {'\nVecka 12'}
          {'\n \nMån     Tis     Ons     Tor      Fre      Lö       Sö'}
        </Text>
      </View>
    
      <View  style={styles.row} >
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.box, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.box, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.box, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.box, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.box, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.box, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.box, { backgroundColor: "skyblue" }]} />
    
      </View>
      <View style={{ flex: 0.07, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} />
      <View style={{ flex: 0.04, backgroundColor: "'hsla(268, 67%, 89%,1)'" }} />
      <View style={{ flex: 0.9, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} />

      <View style={styles.menu} >
      <Button
        title=" Menyrad"
        onPress={() => Alert.alert('Funktion kommer snart')}
      />

      </View>

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
    left: 25,
  },
  text2: {
    fontFamily: "MarkerFelt-Wide",
    fontSize: 20,
    left: 15,
  },
  box: {
    width: 30,
    height: 30,
  },

  box2: {
    width: 26,
    height: 35,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  
  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.30, 
    backgroundColor: 'hsla(0, 0%, 100%,1)',
  },
});
