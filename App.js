import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, Text } from 'react-native';
import { ScrollView } from 'react-native';
import PageHeader from './components/pageHeader';
import WeekOverview from './components/weekOverview';
import DayOverview from './components/dayOverview';
import NavMenu from './components/navMenu';
import DailyMeasure from './components/dailyMeasure';
import HistoryItem from './components/historyItem';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

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

          <PageHeader text1="Din" text2="Dagsform" style={[styles.item]} hasImage={true}>
          </PageHeader>

          <WeekOverview style={[styles.item]} />
          <DayOverview style={[styles.item]} />

          <DailyMeasure path={'DailyHRV'} text={"Daily measure!"} style={styles.item} nav={navigation} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function history({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader text1='Din' text2='Historik' style={[styles.item]} hasImage={false}>
          </PageHeader>

          <HistoryItem style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function dailyHRV({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader text1='Daglig' text2='HRV-mätning' style={[styles.item]} hasImage={false}>
          </PageHeader>

          <TextInput style={[styles.item]}>Namn:</TextInput>
          <TextInput style={[styles.item]}>HRV:</TextInput>
          <TextInput style={[styles.item]}>Sömn:</TextInput>
          <TextInput style={[styles.item]}>Stressnivå:</TextInput>
          <TextInput style={[styles.item]}>Humör:</TextInput>
          <TextInput style={[styles.item]}>Muskeltrötthet:</TextInput>
          <TextInput style={[styles.item]}>Skador:</TextInput>
          <TextInput style={[styles.item]}>Energinivå:</TextInput>

          <DailyMeasure path={'DailyHRV'} text={"Daily measure!"} style={styles.item} nav={navigation} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function loginPage({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1, paddingTop: 250 }, styles.background]}>

          <TextInput style={[styles.item]}>Användarnamn:</TextInput>

          <DailyMeasure path={'FrontPage'} text={"Logga in!"} style={styles.item} nav={navigation} />

        </ScrollView>

      </View>
    </SafeAreaView >
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginPage" screenOptions={{ headerShown: false, animationEnabled: false }}>
        <Stack.Screen name="LoginPage" component={loginPage} />
        <Stack.Screen name="FrontPage" component={frontPage} />
        <Stack.Screen name="History" component={history} />
        <Stack.Screen name="DailyHRV" component={dailyHRV} />
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
  }
});
