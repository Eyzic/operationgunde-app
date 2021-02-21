import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import DefaultInput from './defaultInput';
import { Image } from 'react-native';

export default function App() {
  let info = 'Operation Gunde';
  console.log("Application running!");
  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('/Users/Jessica/Desktop/Chalmers/Kandidatarbete/operationgunde-app/167086572.png')}
      />
      <Text style={styles.Rubrik} >
        {info}
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: 250,
    height: 250,
  },
  container: {
    flex: 1,
    backgroundColor: 'hsla(205, 80%, 82%,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Rubrik: {
    fontFamily: "MarkerFelt-Wide",
    fontSize: 30,
  }
  
});
