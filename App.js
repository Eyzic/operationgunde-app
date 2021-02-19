import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultInput from './defaultInput';
import DisplayValue from './displayValue';

export default function App() {

  console.log("Application running!");

  return (
    <View style={styles.container}>
      <DefaultInput>Placeholder</DefaultInput>
      <DisplayValue />
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


//How to do a regular fetch.

/* fetch('http://localhost:5000')
   .then(response => response.json())
   .then((data) => {
    #Do stuff here
   })
   .catch((error) => {
     console.error(error);
   }); */