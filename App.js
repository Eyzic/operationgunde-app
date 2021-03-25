import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Image, Button, SafeAreaView, Alert, Platform, Dimensions, PixelRatio } from 'react-native';
import DefaultInput from './components/defaultInput';
import { ScrollView } from 'react-native';
import PageHeader from './components/pageHeader';


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 420;

function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export default function App() {

  let info = 'Din dagsform';
  let space = ' ';
  console.log("Application running!");


  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT /*borderWidth: 5, borderColor: 'green' */ }}>
        <ScrollView vertical={true} style={{ padding: 10, flexGrow: 1, borderWidth: 3, borderColor: 'red' }, styles.light_transparent}>

          <PageHeader style={[styles.item]}>
          </PageHeader>

          <View style={{ flex: 0.35, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
            <ScrollView horizontal={true} >
              <Text style={styles.text2}>
                {'Denna text går att skrolla i sidled, här kommer vi lägga in dom olika målen '}
                {'personen har och hur långt man kommit med dom i procent tror jag, tex dagens steg, '}
                {'hur långt man har kommit med antalet timmar man planerat att träna, antal km man tänkt springa'}
                {'\nOBS: har inte orkat kolla ännu vad de typsnittet vi valt i figma motsvarar i react native'}
              </Text>
            </ScrollView>
          </View>

          <View style={{ flex: 0.37, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
            <Text style={styles.text}>
              {'\nVecka 12'}
              {'\n \nMån     Tis     Ons     Tor      Fre      Lö       Sö'}
            </Text>
          </View>

          <View style={styles.row} >
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.box, { backgroundColor: "skyblue" }]} />

          </View>
          <View style={{ flex: 0.07, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} />
          <View style={{ flex: 0.04, backgroundColor: "'hsla(268, 67%, 89%,1)'" }} />
          <View style={{ flex: 0.17, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
            <Text style={styles.text3}>
              {'Muskeltrötthet'} {'                22 Mars 2021'}
            </Text>
          </View>
          <View style={styles.row} >
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          </View>

          <View style={{ flex: 0.17, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
            <Text style={styles.text3}>
              {'Mentalt'} {'                                    5 C °'}
            </Text>
          </View>
          <View style={styles.row} >
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
            <Text style={styles.text3}>
              {'            Göteborg'}
            </Text>
          </View>

          <View style={{ flex: 0.17, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
            <Text style={styles.text3}>
              {'Energi'}
            </Text>
          </View>

          <View style={styles.row} >
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          </View>

          <View style={{ flex: 0.17, backgroundColor: "'hsla(272, 100%, 97%,1)'" }} >
            <Text style={styles.text3}>
              {'Sömn'}
            </Text>
          </View>
          <View style={styles.row} >
            <View style={[styles.box2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "skyblue" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
            <View style={[styles.boxis2, { backgroundColor: "'hsla(272, 100%, 97%,1)'" }]} />
            <View style={[styles.boxis, { backgroundColor: "'hsla(0, 0%, 100%,1)'" }]} />
          </View>

        </ScrollView>

        <View style={styles.menu} >

          <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
            <Image
              source={require('./1.png')}
              style={{ width: normalize(80), height: normalize(80) }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
            <Image
              source={require('./2.png')}
              style={{ width: normalize(80), height: normalize(80) }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
            <Image
              source={require('./3.png')}
              style={{ width: normalize(80), height: normalize(80) }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
            <Image
              source={require('./4.png')}
              style={{ width: normalize(80), height: normalize(80) }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
            <Image
              source={require('./5.png')}
              style={{ width: normalize(80), height: normalize(80) }} />
          </TouchableOpacity>

        </View>


      </View>
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  light_transparent: {
    backgroundColor: 'hsla(268, 67%, 89%,1)'
  },
  border: {
    borderColor: 'red',
    borderWidth: 3
  },
  item: {
    backgroundColor: 'hsla(272, 100%, 97%,1)',
    marginBottom: 10
  },
  container2: {
    paddingVertical: normalize(20)
  },
  text: {
    fontFamily: "Roboto",
    fontSize: normalize(20),
    left: normalize(25),
  },
  text2: {
    fontFamily: "Roboto",
    fontSize: normalize(20),
    left: normalize(15),
  },
  text3: {
    fontFamily: "Roboto",
    fontSize: normalize(20),
    top: normalize(10),
    left: normalize(25)
  },
  text4: {
    fontFamily: "Roboto",
    fontSize: normalize(60),
    top: normalize(10),
    left: normalize(70),
  },

  box: {
    width: normalize(30),
    height: normalize(30),
  },

  box2: {
    width: normalize(26),
    height: normalize(35),
  },
  boxis: {
    width: normalize(10),
    height: normalize(10),
  },

  boxis2: {
    width: normalize(6),
    height: normalize(13),
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  menu: {
    flexDirection: "row",
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    backgroundColor: 'hsla(0, 0%, 100%,1)',
    //borderColor: 'yellow',
    // borderWidth: 3
  },
  btn: {
    width: 50,
    height: 50,
  },
});
