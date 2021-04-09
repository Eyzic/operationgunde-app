import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, Text, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native';
import PageHeader from './components/pageHeader';
import WeekOverview from './components/weekOverview';
import DayOverview from './components/dayOverview';
import NavMenu from './components/navMenu';
import DailyMeasure from './components/dailyMeasure';
import HistoryItem from './components/historyItem';
import Form from './components/form';
import PageHeader2 from './components/pageHeader2';
import ConnectedHardware from './components/connectedHardware';
import StartActivity from './components/startActivity';
import ActivityStateButton from './components/activityStateButton';
import ActivityContext from './components/activityContext';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import StopWatch from './components/stopWatch';


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// i SCREEN_HEIGHT så är -55 tillagd för på Jessicas telefon hamnar menybaren för långt ner

function frontPage({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>

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
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>
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
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader text1='Daglig' text2='HRV-mätning' style={[styles.item]} hasImage={false}>
          </PageHeader>

          <Form style={styles.item} />

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

          <TextInput title={"Användarnamn:"} style={[styles.item]}></TextInput>

          <DailyMeasure path={'FrontPage'} text={"Logga in!"} style={styles.item} nav={navigation} />

        </ScrollView>
      </View>
    </SafeAreaView>);
}

function newActivity({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader2 text1='Ny' text2='Aktivitet' style={[styles.item]}>
          </PageHeader2>

          <TextInput title="Aktivitetsnamn:" style={[styles.item]}></TextInput>

          <ConnectedHardware style={styles.item} />

          <StartActivity style={styles.item} nav={navigation} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />
      </View>
    </SafeAreaView >
  );
}

function currentActivity({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 55 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader2 text1='Aktiv' text2='aktivitet' style={[styles.item]} >
          </PageHeader2>

          <View style={[styles.item, { alignItems: 'center' }]}>
            <ActivityStateButton style={[styles.item]} />
          </View>

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function activity({ navigation }) {
  const context = React.useContext(ActivityContext);
  console.log(context);
  if (context.activityRunning) {
    return currentActivity({ navigation }, context.timer);
  } else {
    context.timer = new StopWatch();
    return newActivity({ navigation }, () => context.ActivityRunning = true);
  }
}

const activityState = {
  activityRunning: false,
  timer: new StopWatch()
};

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <ActivityContext.Provider value={activityState}>
        <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false, animationEnabled: false }}>
          <Stack.Screen name="LoginPage" component={loginPage} />
          <Stack.Screen name="FrontPage" component={frontPage} />
          <Stack.Screen name="History" component={history} />
          <Stack.Screen name="DailyHRV" component={dailyHRV} />
          <Stack.Screen name="NewActivity" component={newActivity} />
          <Stack.Screen name="CurrentActivity" component={currentActivity} />
        </Stack.Navigator>
      </ActivityContext.Provider>
    </NavigationContainer >
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
