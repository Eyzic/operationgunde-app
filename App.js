import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, Text, ActivityIndicator } from 'react-native';
import ActivityContext from './components/activityContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StopWatch from './components/stopWatch';

import LoginScreen from './screens/LoginScreen';
import FrontScreen from './screens/FrontScreen';
import HistoryScreen from './screens/HistoryScreen';
import DailyHrvScreen from './screens/DailyHrvScreen';
import NewActivityScreen from './screens/NewActivityScreen';
import CurrentActivityScreen from './screens/CurrentActivityScreen';

const activityState = {
  activityRunning: false,
  timer: new StopWatch()
};

const loginState = {
  user: null
};

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <ActivityContext.Provider value={activityState}>
        <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false, animationEnabled: false }}>
          <Stack.Screen name="LoginPage" component={LoginScreen} />
          <Stack.Screen name="FrontPage" component={FrontScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="DailyHRV" component={DailyHrvScreen} />
          <Stack.Screen name="NewActivity" component={NewActivityScreen} />
          <Stack.Screen name="CurrentActivity" component={CurrentActivityScreen} />
        </Stack.Navigator>
      </ActivityContext.Provider>
    </NavigationContainer>
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
  menu: {
    flexDirection: "row",
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'hsla(0, 0%, 100%,1)',
    padding: 5,
    paddingHorizontal: 20
  }
});
