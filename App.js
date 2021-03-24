import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Image, Button, SafeAreaView, Alert } from 'react-native';
import DefaultInput from './defaultInput';
import { ScrollView } from 'react-native';
// lägg till safeAreaView

export default function App() {
  let info = 'Din dagsform' ;
  let space = ' ';
  console.log("Application running!");
  return (
    <SafeAreaView >
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

      <View style={{ flex: 0.37, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
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
      <View style={{ flex: 0.17, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
        <Text style = {styles.text3}>
          {'Muskeltrötthet'} {'                22 Mars 2021'}
        </Text>
      </View>
      <View style={styles.row} >
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
      </View>

      <View style={{ flex: 0.17, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
        <Text style = {styles.text3}>
          {'Mentalt'} {'                                    5 C °'}
        </Text>
      </View>
      <View style={styles.row} >
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          <Text style = {styles.text3}>
          {'            Göteborg'}
        </Text>
      </View>
      
      <View style={{ flex: 0.17, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
        <Text style = {styles.text3}>
          {'Energi'} 
        </Text>
      </View>
      
      <View style={styles.row} >
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
      </View>

      <View style={{ flex: 0.17, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
        <Text style = {styles.text3}>
          {'Sömn'} 
        </Text>
      </View>
      <View style={styles.row} >
          <View  style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          <View  style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'"  }]} />
          <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
      </View>

      <View style={styles.menu} >
      <Button
        title=" Menyrad"
        onPress={() => Alert.alert('Funktion kommer snart')}
      />

      </View>

    </View>
    </SafeAreaView>
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
  text3: {
    fontFamily: "MarkerFelt-Wide",
     fontSize: 20,
     top:10,
     left:25
  },
  text4: {
    fontFamily: "MarkerFelt-Wide",
     fontSize: 60,
     top:10,
     left:70,
  },

  box: {
    width: 30,
    height: 30,
  },

  box2: {
    width: 26,
    height: 35,
  },
  boxis: {
    width: 10,
    height: 10,
  },

  boxis2: {
    width: 6,
    height: 13,
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
