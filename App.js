import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Image, Button, SafeAreaView, Alert, Platform, Dimensions, PixelRatio } from 'react-native';
import DefaultInput from './components/defaultInput';
import { ScrollView } from 'react-native';
import PageHeader from './components/pageHeader';
import WeekOverview from './components/weekOverview';
import EvalBar from './components/evalBar';
import DayOverview from './components/dayOverview';



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

  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT /*borderWidth: 5, borderColor: 'green' */ }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader style={[styles.item]}>
          </PageHeader>

          <WeekOverview style={[styles.item]} />
          <DayOverview style={[styles.item]} />

        </ScrollView>

        <View style={styles.menu}>

          <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
            <Image
              source={require('./1.png')}
              style={{ width: normalize(60), height: normalize(60) }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
            <Image
              source={require('./2.png')}
              style={{ width: normalize(60), height: normalize(60) }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
            <Image
              source={require('./3.png')}
              style={{ width: normalize(60), height: normalize(60) }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
            <Image
              source={require('./4.png')}
              style={{ width: normalize(60), height: normalize(60) }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
            <Image
              source={require('./5.png')}
              style={{ width: normalize(60), height: normalize(60) }} />
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'hsla(268, 67%, 89%,1)'
  },
  border: {
    borderColor: 'red',
    borderWidth: 3
  },
  item: {
    backgroundColor: 'hsla(272, 100%, 97%,1)',
    marginBottom: 10,
    padding: 20,
    borderRadius: 15
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
    marginLeft: 4
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
    backgroundColor: 'hsla(0, 0%, 100%,1)',
    padding: 5,
    paddingHorizontal: 20
  },
  btn: {
    width: 50,
    height: 50,
  },
});
