import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Image, PixelRatio, Platform } from 'react-native';
import PageHeader from './components/pageHeader';
import WeekOverview from './components/weekOverview';
import DayOverview from './components/dayOverview';
import NavMenu from './components/navMenu';
import DailyMeasure from './components/dailyMeasure';
import HistoryItem from './components/historyItem';
import PageHeader3 from './components/pageHeader3';
import PageHeader4 from './components/pageHeader4';
import Pluss from './components/pluss';
import Group from './components/group';
import ThisOrThat from './components/thisOrThat';
import Skapa from './components/skapa'
import ProgressView from './components/progressView';
import GruppMedlemmar from './components/gruppMedlemmar';
import HassesKompis from './components/hassesKompis';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 420;

function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

function frontPage({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader text1="Din" text2="Dagsform" style={[styles.item]} hasImage={true}>
          </PageHeader>

          <WeekOverview style={[styles.item]} />
          <DayOverview style={[styles.item]} />

          <DailyMeasure style={styles.item} nav={navigation} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function history({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
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
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
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

          <DailyMeasure style={styles.item} nav={navigation} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function minaGrupper({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader3 text1='Mina' text2='Grupper' style={[styles.item]} Image={require('./assets/Hasse.png')}>
          </PageHeader3>


          <Group text1='Hasses' text2='Kompisar' antal='5' OrgGrupp='Grupp' knapp='HassesKompisar' Image={require('./assets/HassesKompisar.png')} style={[styles.item]} nav={navigation}>
          </Group>

          <Group text1='IFK' text2='Göteborg' antal='16' OrgGrupp='Organisation' knapp='IFKGBG' Image={require('./assets/IFK.png')} style={[styles.item]} nav={navigation}>
          </Group>

          <Pluss style={styles.item} nav={navigation} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function nyGrupp({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader3 text1='Ny' text2='Grupp' style={[styles.item]} >
          </PageHeader3>

          <Text style={styles.h2}>Gruppnamn:</Text>
          <TextInput style={styles.item2} />

          <Text style={styles.h2}>Typ av grupp:</Text>

          <ThisOrThat />

          <Skapa style={styles.item} nav={navigation} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function skapadGrupp({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader3 text1='"Grupp' text2='namn"' style={[styles.item]}>
          </PageHeader3>


        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function hassesKompisar({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 color1='red' color2='black' text1='Hasses' text2='Kompisar' meny1='Översikt  ' meny2='Inställningar' antal='6' style={[styles.item]} Image={require('./assets/HassesKompisar.png')} nav={navigation} >
          </PageHeader4>

          <GruppMedlemmar image1={require('./assets/Hasse.png')} image2={require('./assets/HassesKompisar.png')}
            image3={require('./assets/Hasse.png')} image4={require('./assets/HassesKompisar.png')}
            image5={require('./assets/Hasse.png')} image6={require('./assets/HassesKompisar.png')} nav={navigation}> </GruppMedlemmar>


          <ProgressView />

          <HistoryItem text='Jessica' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

          <HistoryItem text='Frida' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

          <HistoryItem text='Einar' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

          <HistoryItem text='Filip' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function hassesKompisarInst({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 color1='black' color2='red' text1='Hasses' text2='Kompisar' meny1='Översikt  ' meny2='Inställningar' antal='6' style={[styles.item]} Image={require('./assets/HassesKompisar.png')} nav={navigation} >
          </PageHeader4>



        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function hassesVän({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 meny3='Gå tillbaka' text1='Hasses' text2='Kompisar' antal='6' style={[styles.item]} Image={require('./assets/HassesKompisar.png')} nav={navigation} >
          </PageHeader4>

          <HassesKompis />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function IFKgbg({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader3 text1='IFK' text2='Göteborg' Image={require('./assets/IFK.png')} style={[styles.item]} >
          </PageHeader3>


        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FrontPage" screenOptions={{ headerShown: false, animationEnabled: false }}>
        <Stack.Screen name="FrontPage" component={frontPage} />
        <Stack.Screen name="History" component={history} />
        <Stack.Screen name="DailyHRV" component={dailyHRV} />
        <Stack.Screen name="MinaGrupper" component={minaGrupper} />
        <Stack.Screen name="NyGrupp" component={nyGrupp} />
        <Stack.Screen name="HassesKompisar" component={hassesKompisar} />
        <Stack.Screen name="IFKGBG" component={IFKgbg} />
        <Stack.Screen name="SkapadGrupp" component={skapadGrupp} />
        <Stack.Screen name="HassesKompisarInst" component={hassesKompisarInst} />
        <Stack.Screen name="HassesVän" component={hassesVän} />
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
  item2: {
    backgroundColor: 'hsla(316, 47%, 73%,1)',
    marginBottom: 10,
    padding: 20,
    borderRadius: 15
  },
  item3: {
    backgroundColor: 'hsla(316, 47%, 73%,1)',
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
  h2: {
    fontFamily: "Helvetica",
    fontSize: normalize(20),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 5,
  },
});
