import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Image, Button, SafeAreaView, Alert } from 'react-native';
import DefaultInput from './defaultInput';

export default function App() {
  let info = 'Operation Gunde' ;
  let space = ' ';
  console.log("Application running!");
  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('./SvanBild.png')}
      />
      <Text style={styles.Rubrik} >
        {info}
        </Text>
      <StatusBar style="auto" />

      <Text style={styles.Rubrik} >
        {space}
      </Text>

      <Text style={styles.Rubrik} >
        {space}
      </Text>

      <Button
        title="Logga in"
        onPress={() => Alert.alert('Funktion kommer snart')}
      />
      
      <Button
        title="Registrera dig"
        onPress={() => Alert.alert('Funktion kommer snart')}
      />

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
    backgroundColor: 'hsla(207, 47%, 82%,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Rubrik: {
    fontFamily: "MarkerFelt-Wide",
    fontSize: 30,
  }
  
});
