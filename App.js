import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import DefaultInput from './defaultInput';

export default function App() {

  let info = 'Filip!';
  console.log("Application running!");
  return (
    <View style={styles.container}>
      <DefaultInput>Placeholder</DefaultInput>
      <Text>Netinfo: {info}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsla(200, 50%, 50%,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
