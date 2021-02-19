import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultInput from './defaultInput';
import DisplayValue from './displayValue';

export default function App() {

  let info = 'Värde i databasen: ';
  console.log("Application running!");

  /* fetch('http://localhost:5000')
     .then(response => response.json())
     .then((data) => {
       info += data.value;
       console.log(data);
       console.log(info);
 
     })
     .catch((error) => {
       console.error(error);
     }); */

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
