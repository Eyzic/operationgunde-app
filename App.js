import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions } from 'react-native';
import { ScrollView } from 'react-native';
import PageHeader from './components/pageHeader';
import WeekOverview from './components/weekOverview';
import DayOverview from './components/dayOverview';
import NavMenu from './components/navMenu';
import DailyMeasure from './components/dailyMeasure';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import PageHeader4 from './pageHeader4';


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 420;

function frontPage({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 style={[styles.item]} text1="HRV - " text2="8 maj 2021">
          </PageHeader4>

          <View style={styles.item}>

            <Text style={styles.texten}>
              {'\nToppen! \nDu har fyllt i dagens formulär. \n\nFör varje dag du fyller i formuläret kommer HRV prognosen förbättras.\n'}

            </Text>
          </View>

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}




const Stack = createStackNavigator();

export default function App() {

  let info = 'Din dagsform';
  let space = ' ';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FrontPage" screenOptions={{ headerShown: false, animationEnabled: false }}>
        <Stack.Screen name="FrontPage" component={frontPage} />

      </Stack.Navigator>
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
  },
  texten: {
    fontFamily: "Helvetica",
    fontSize: 23,
    justifyContent: "center",
    textAlign: "center",
  }
});
