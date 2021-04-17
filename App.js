import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, Text, TextInput } from 'react-native';
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
import ToggleChoiceButton from './components/toggleChoiceButton';
import CreatGroup from './components/creatGroup'
import ProgressView from './components/progressView';
import Settings from './components/settings';
import GroupMembers from './components/groupMembers';
import FriendProfile from './components/FriendProfile';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';


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
          <Group
            text1='Hasses'
            text2='Kompisar'
            memberCount='5'
            groupType='Grupp'
            Image={require('./assets/HassesKompisar.png')}
            style={[styles.item]}
            nav={() => navigation.navigate("FriendGroup")}>
          </Group>

          <Group
            text1='IFK'
            text2='Göteborg'
            memberCount='6'
            groupType='Organisation - tränare'
            Image={require('./assets/IFK.png')}
            style={[styles.item]}
            nav={() => navigation.navigate("OrganisationCoach")}>
          </Group>

          <Group
            text1='IFK'
            text2='Göteborg'
            memberCount='6'
            groupType='Organisation - adept'
            Image={require('./assets/IFK.png')}
            style={[styles.item]}
            nav={() => navigation.navigate("OrganisationAthlete")}>
          </Group>

          <AddGroup style={styles.item} nav={navigation} />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function newGroup({ navigation }) {
  const [groupName, setGroupName] = React.useState("");

  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 text1='Ny' text2='Grupp' style={[styles.item]} >
          </PageHeader4>
          <View style={[styles.item]}>

            <Text style={styles.h2}>Gruppnamn:</Text>
            <TextInput onTextChanged={setGroupName} style={styles.item2} />

            <Text style={styles.h2}>Typ av grupp:</Text>

            <ToggleChoiceButton />

            <CreatGroup style={styles.item} nav={navigation} />
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

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="FriendGroup" inst="FriendGroupSettings" color1='red' color2='black' text1='Hasses' text2='Kompisar' meny1='Översikt  ' meny2='Inställningar' memberCount='6' style={[styles.item]} Image={require('./assets/HassesKompisar.png')} nav={navigation} >
          </PageHeader4>



          <GroupMembers groupMember="FriendGroupFriend" image1={require('./assets/Hasse.png')} image2={require('./assets/HassesKompisar.png')}
            image3={require('./assets/Hasse.png')} image4={require('./assets/HassesKompisar.png')}
            image5={require('./assets/Hasse.png')} image6={require('./assets/HassesKompisar.png')} nav={navigation} />


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

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="FriendGroup" inst="FriendGroupSettings" color1='black' color2='red' text1='Hasses' text2='Kompisar' meny1='Översikt  ' meny2='Inställningar' memberCount='6' style={[styles.item]} Image={require('./assets/HassesKompisar.png')} nav={navigation} >
          </PageHeader4>

          <Settings style={styles.item} text1='Ändra gruppbild' text2='Lägg till kompis' text3='Ändra gruppmål' />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function StatsBox(props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={[styles.h3, { flexGrow: 1 }]}>
        {props.text}
      </Text>
      <View style={styles.ruta}>
        <Text style={styles.rutaText}>
          {props.value}
        </Text>
      </View>
    </View>
  );
}

function friendGroupFriend({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="FriendGroup" inst="FriendGroupSettings" meny3='Gå tillbaka' text1='Hasses' text2='Kompisar' memberCount='6' style={[styles.item]} Image={require('./assets/HassesKompisar.png')} nav={navigation} >
          </PageHeader4>

          {/*TODO: Vet att dessa inte line:ar upp helt, men det blev lättare med strukturen. Vi kan lösa det senare med Grid tror jag.*/}
          <FriendProfile style={styles.item} hasProfil={true}>
            <StatsBox text={'Antal steg \ndenna vecka: '} value={"37 309"} />
            <StatsBox text={'Antal km \ndenna vecka: '} value={"18.5"} />
            <StatsBox text={'Träningstid \ndenna vecka: '} value={"5.5 h"} />
          </FriendProfile>

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function organisationCoach({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="OrganisationCoach" inst="OrganisationCoachSettings" color1='red' color2='black' text1='IFK' text2='Göteborg' Image={require('./assets/IFK.png')} style={[styles.item]} meny1='Översikt  ' meny2='Inställningar' memberCount='6' nav={navigation} >
          </PageHeader4>

          <GroupMembers groupMember="OrganisationCoachAthlete" image1={require('./assets/Hasse.png')} image2={require('./assets/HassesKompisar.png')}
            image3={require('./assets/Hasse.png')} image4={require('./assets/HassesKompisar.png')}
            image5={require('./assets/Hasse.png')} image6={require('./assets/HassesKompisar.png')} nav={navigation} />

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
function organisationCoachSettings({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="OrganisationCoach" inst="OrganisationCoachSettings" color1='black' color2='red' text1='IFK' text2='Göteborg' meny1='Översikt  ' meny2='Inställningar' memberCount='6' style={[styles.item]} Image={require('./assets/IFK.png')} nav={navigation} >
          </PageHeader4>

          <Settings text1='Lägg till tränare' text2='Lägg till adept' text3='Ändra gruppbild' />

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}

function organisationCoachAthlete({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="OrganisationCoach" inst="OrganisationCoachSettings" meny3='Gå tillbaka' text1='IFK' text2='Göteborg' memberCount='6' style={[styles.item]} Image={require('./assets/IFK.png')} nav={navigation} >
          </PageHeader4>

          <FriendProfile style={styles.item} hasProfil={true}>
            {/*TODO - Byt ut mot en Button*/}
            <View style={styles.ruta}>
              <Text style={styles.rutaText}>
                Lägg till träningsprogram
                </Text>
            </View>
          </FriendProfile>

        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function organisationAthlete({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} text1='IFK' text2='Göteborg' Image={require('./assets/IFK.png')} style={[styles.item]} memberCount='6' nav={navigation} >
          </PageHeader4>

          <GroupMembers groupMember="OrganisationAthleteFriend" image1={require('./assets/Hasse.png')} image2={require('./assets/HassesKompisar.png')}
            image3={require('./assets/Hasse.png')} image4={require('./assets/HassesKompisar.png')}
            image5={require('./assets/Hasse.png')} image6={require('./assets/HassesKompisar.png')} nav={navigation} />

          <View style={styles.item}>

            {/*TODO - Byt ut mot en Button*/}
            <View style={styles.ruta}>
              <Text style={styles.rutaText}>
                Mitt träningsprogram
            </Text>
            </View>


            {/*TODO - Byt ut mot en Button*/}
            <View style={styles.ruta}>
              <Text style={styles.rutaText}>
                Meddelande från tränare
                </Text>
            </View>
          </View>


        </ScrollView>

        <NavMenu style={styles.menu} nav={navigation} />

      </View>
    </SafeAreaView >
  );
}
function organisationAthleteFriend({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', height: SCREEN_HEIGHT - 50 }}>
        <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1 }, styles.background]}>

          <PageHeader4 Image2={require('./assets/menu/grupp2.png')} over="OrganisationAthlete" inst="OrganisationAthleteFriend" meny3='Gå tillbaka' text1='IFK' text2='Göteborg' memberCount='6' style={[styles.item]} Image={require('./assets/IFK.png')} nav={navigation} >
          </PageHeader4>

          <FriendProfile style={styles.item} hasProfil={true}>
            <Text>
              Gick med i IFK Göteborg för
              0 år 2 mån och 23 dagar sen
              </Text>
          </FriendProfile>

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
        <Stack.Screen name="OrganisationCoach" component={organisationCoach} />
        <Stack.Screen name="OrganisationAthlete" component={organisationAthlete} />
        <Stack.Screen name="CreatedGroup" component={createdGroup} />
        <Stack.Screen name="FriendGroupSettings" component={friendGroupSettings} />
        <Stack.Screen name="FriendGroupFriend" component={friendGroupFriend} />
        <Stack.Screen name="OrganisationCoachSettings" component={organisationCoachSettings} />
        <Stack.Screen name="OrganisationCoachAthlete" component={organisationCoachAthlete} />
        <Stack.Screen name="OrganisationAthleteFriend" component={organisationAthleteFriend} />
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
  ruta: {
    padding: 10,
    backgroundColor: 'hsla(316, 47%, 73%, 1)',
    borderRadius: 10,
    margin: 10,
    flexGrow: 3
  },
  rutaText: {
    fontFamily: "Helvetica",
    fontSize: normalize(25),
    textAlign: 'center',
    color: 'white',
  },
  rutaText2: {
    fontFamily: "Helvetica",
    fontSize: normalize(20),
    textAlign: 'center',
    color: 'black',

  }
});
