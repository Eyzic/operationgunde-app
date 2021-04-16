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
import PageHeader4 from './components/pageHeader4';
import AddGroup from './components/addGroup';
import Group from './components/group';
import ThisOrThat from './components/thisOrThat';
import Skapa from './components/skapa'
import ProgressView from './components/progressView';
import GruppMedlemmar from './components/gruppMedlemmar';
import HassesKompis from './components/hassesKompis';
import Settings from './components/settings';
import Adepter from './components/adepter';
import AdeptKompis from './components/adeptKompis';
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

function myGroups({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>



          <PageHeader4 text1='Mina' text2='Grupper' Image={require('./assets/Hasse.png')} style={[styles.item]} />
          <Group text1='Hasses' text2='Kompisar' antal='5' OrgGrupp='Grupp' knapp='FriendGroup' Image={require('./assets/HassesKompisar.png')} style={[styles.item]} nav={navigation}>
          </Group>

          <Group text1='IFK' text2='Göteborg' antal='6' OrgGrupp='Organisation - tränare' knapp='IFKGBG-T' Image={require('./assets/IFK.png')} style={[styles.item]} nav={navigation}>
          </Group>

          <Group text1='IFK' text2='Göteborg' antal='6' OrgGrupp='Organisation - adept' knapp='IFKGBG-A' Image={require('./assets/IFK.png')} style={[styles.item]} nav={navigation}>
          </Group>

          <AddGroup style={styles.item} nav={navigation} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function newGroup({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 text1='Ny' text2='Grupp' style={[styles.item]} >
          </PageHeader4>
          <View style={[styles.item]}>

            <Text style={styles.h2}>Gruppnamn:</Text>
            <TextInput style={styles.item2} />

            <Text style={styles.h2}>Typ av grupp:</Text>

            <ThisOrThat />

            <Skapa style={styles.item} nav={navigation} />
          </View>

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function createdGroup({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 text1='"Grupp' text2='namn"' style={[styles.item]}>
          </PageHeader4>


        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function friendGroup({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="FriendGroup" inst="FriendGroupSettings" color1='red' color2='black' text1='Hasses' text2='Kompisar' meny1='Översikt  ' meny2='Inställningar' antal='6' style={[styles.item]} Image={require('./assets/HassesKompisar.png')} nav={navigation} >
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
function friendGroupSettings({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="FriendGroup" inst="FriendGroupSettings" color1='black' color2='red' text1='Hasses' text2='Kompisar' meny1='Översikt  ' meny2='Inställningar' antal='6' style={[styles.item]} Image={require('./assets/HassesKompisar.png')} nav={navigation} >
          </PageHeader4>

          <Settings text1='Ändra gruppbild' text2='Lägg till kompis' text3='Ändra gruppmål' />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function friendGroupFriend({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="FriendGroup" inst="FriendGroupSettings" meny3='Gå tillbaka' text1='Hasses' text2='Kompisar' antal='6' style={[styles.item]} Image={require('./assets/HassesKompisar.png')} nav={navigation} >
          </PageHeader4>

          <HassesKompis />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function IFKgbgT({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="IFKGBG-T" inst="IFKGBGInst-T" color1='red' color2='black' text1='IFK' text2='Göteborg' Image={require('./assets/IFK.png')} style={[styles.item]} meny1='Översikt  ' meny2='Inställningar' antal='6' nav={navigation} >
          </PageHeader4>

          <Adepter adeptAT="AdeptT" image1={require('./assets/Hasse.png')} image2={require('./assets/HassesKompisar.png')}
            image3={require('./assets/Hasse.png')} image4={require('./assets/HassesKompisar.png')}
            image5={require('./assets/Hasse.png')} image6={require('./assets/HassesKompisar.png')} nav={navigation}> </Adepter>

          <HistoryItem text='Janne' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

          <HistoryItem text='Jeremy' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

          <HistoryItem text='Magnus' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

          <HistoryItem text='Ali' style={{ backgroundColor: 'hsla(272, 100%, 97%,1)', borderRadius: 15 }} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function IFKgbgInstT({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="IFKGBG-T" inst="IFKGBGInst-T" color1='black' color2='red' text1='IFK' text2='Göteborg' meny1='Översikt  ' meny2='Inställningar' antal='6' style={[styles.item]} Image={require('./assets/IFK.png')} nav={navigation} >
          </PageHeader4>

          <Settings text1='Lägg till tränare' text2='Lägg till adept' text3='Ändra gruppbild' />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function adeptT({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="IFKGBG-T" inst="IFKGBGInst-T" meny3='Gå tillbaka' text1='IFK' text2='Göteborg' antal='6' style={[styles.item]} Image={require('./assets/IFK.png')} nav={navigation} >
          </PageHeader4>

          <AdeptKompis hasRuta={true} hasProfil={true} text1='Lägg till träningsprogram' />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function IFKgbgA({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} text1='IFK' text2='Göteborg' Image={require('./assets/IFK.png')} style={[styles.item]} antal='6' nav={navigation} >
          </PageHeader4>

          <Adepter adeptAT="AdeptA" image1={require('./assets/Hasse.png')} image2={require('./assets/HassesKompisar.png')}
            image3={require('./assets/Hasse.png')} image4={require('./assets/HassesKompisar.png')}
            image5={require('./assets/Hasse.png')} image6={require('./assets/HassesKompisar.png')} nav={navigation}> </Adepter>

          <AdeptKompis hasRuta={true} text1='Mitt träningsprogram' />

          <AdeptKompis hasRuta={true} text1='Meddelande från tränare' />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function adeptA({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="IFKGBG-A" inst="IFKGBGInst-A" meny3='Gå tillbaka' text1='IFK' text2='Göteborg' antal='6' style={[styles.item]} Image={require('./assets/IFK.png')} nav={navigation} >
          </PageHeader4>

          <AdeptKompis hasProfil={true} text2='Gick med i IFK Göteborg för
                    0 år 2 mån och 23 dagar sen'/>

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
        <Stack.Screen name="MyGroups" component={myGroups} />
        <Stack.Screen name="NewGroup" component={newGroup} />
        <Stack.Screen name="FriendGroup" component={friendGroup} />
        <Stack.Screen name="IFKGBG-T" component={IFKgbgT} />
        <Stack.Screen name="IFKGBG-A" component={IFKgbgA} />
        <Stack.Screen name="CreatedGroup" component={createdGroup} />
        <Stack.Screen name="FriendGroupSettings" component={friendGroupSettings} />
        <Stack.Screen name="FriendGroupFriend" component={friendGroupFriend} />
        <Stack.Screen name="IFKGBGInst-T" component={IFKgbgInstT} />
        <Stack.Screen name="AdeptT" component={adeptT} />
        <Stack.Screen name="AdeptA" component={adeptA} />
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
