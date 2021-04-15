import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { } from 'react-native';
import ActivityContext from './components/activityContext';
import UserContext from './components/UserContext';
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

export default function Main() {

    return (
        <NavigationContainer>
            <UserContext.Provider value={loginState}>
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
            </UserContext.Provider>
        </NavigationContainer>
    );
}

