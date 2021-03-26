import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, Dimensions, PixelRatio } from 'react-native';
import { ScrollView } from 'react-native';
import PageHeader from './components/pageHeader';
import WeekOverview from './components/weekOverview';
import DayOverview from './components/dayOverview';
import NavMenu from './components/navMenu';
import DailyMeasure from './components/dailyMeasure';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 420;

export default function App() {

  let info = 'Din dagsform';
  let space = ' ';

  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader style={[styles.item]} image={'./assets/springa.png'} hasImage={true}>
          </PageHeader>

          <WeekOverview style={[styles.item]} />
          <DayOverview style={[styles.item]} />

          <DailyMeasure style={styles.item} />

        </ScrollView>

        <NavMenu style={styles.menu} />

      </View>
    </SafeAreaView >

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
