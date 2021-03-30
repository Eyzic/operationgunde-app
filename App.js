import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, Image, TextInput, TouchableWithoutFeedback, View, SafeAreaView, TouchableOpacity, Alert, Platform, Dimensions, PixelRatio, ScrollView, Input } from 'react-native';
import HistoryItem from './components/historyItem';
import DefaultInput from './defaultInput';
//import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
//import LinearGradient from 'react-native-linear-gradient';
export default function App() {

  const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  const scale = SCREEN_WIDTH / 320;

  const radie = normalize(10);
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };

  function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }


  return (


    <SafeAreaView style={styles.container}>
      <ScrollView style={{
        width: '100%',

      }}>
        <HistoryItem />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'hsla(268, 41%, 68%,1)',
    alignItems: 'center',
    justifyContent: 'center',

  },

  buttonsar: {
    //display: 'flex',
    height: 50,
    borderRadius: 5,
    // justifyContent: 'center',
    // alignItems: 'center',

    backgroundColor: 'black',
    // shadowColor: '#2AC062',
    // shadowOpacity: 0.4,
    // shadowOffset: { height: 10, width: 0 },
    // shadowRadius: 20,
  },


});