import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { } from 'react-native';
import ActivityContext from './components/activityContext';
import UserContext from './components/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StopWatch from './components/stopWatch';

//Menu screens
import FrontScreen from './screens/FrontScreen';
import HistoryScreen from './screens/history/HistoryScreen';
import DailyHrvScreen from './screens/DailyHrvScreen';
import NewActivityScreen from './screens/NewActivityScreen';
import CurrentActivityScreen from './screens/CurrentActivityScreen';

//Group screens
import CreatedGroupScreen from './screens/groups/createdGroupScreen';
import FriendGroupFriendScreen from './screens/groups/friendGroupFriendScreen';
import FriendGroupScreen from './screens/groups/friendGroupScreen';
import FriendGroupSettingsScreen from './screens/groups/friendGroupSettingsScreen';
import MyGroupsScreen from './screens/groups/MyGroupsScreen';
import NewGroupScreen from './screens/groups/newGroupScreen';
import OrganisationAthleteFriendScreen from './screens/groups/organisationAthleteFriendScreen';
import OrganisationAthleteScreen from './screens/groups/organisationAthleteScreen';
import OrganisationCoachAthleteScreen from './screens/groups/organisationCoachAthleteScreen';
import OrganisationCoachScreen from './screens/groups/organisationCoachScreen';
import OrganisationCoachSettingsScreen from './screens/groups/organisationCoachSettingsScreen';

//History
import HistoryCalendarScreen from './screens/history/HistoryCalendarScreen';
import HistoryHrvScreen from './screens/history/HistoryHrvScreen';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';



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
                        <Stack.Screen name="Signup" component={SignupScreen} />

                        <Stack.Screen name="FrontPage" component={FrontScreen} />
                        <Stack.Screen name="DailyHRV" component={DailyHrvScreen} />
                        <Stack.Screen name="NewActivity" component={NewActivityScreen} />
                        <Stack.Screen name="CurrentActivity" component={CurrentActivityScreen} />

                        <Stack.Screen name="MyGroups" component={MyGroupsScreen} />
                        <Stack.Screen name="NewGroup" component={NewGroupScreen} />
                        <Stack.Screen name="FriendGroup" component={FriendGroupScreen} />
                        <Stack.Screen name="OrganisationCoach" component={OrganisationCoachScreen} />
                        <Stack.Screen name="OrganisationAthlete" component={OrganisationAthleteScreen} />
                        <Stack.Screen name="CreatedGroup" component={CreatedGroupScreen} />
                        <Stack.Screen name="FriendGroupSettings" component={FriendGroupSettingsScreen} />
                        <Stack.Screen name="FriendGroupFriend" component={FriendGroupFriendScreen} />
                        <Stack.Screen name="OrganisationCoachSettings" component={OrganisationCoachSettingsScreen} />
                        <Stack.Screen name="OrganisationCoachAthlete" component={OrganisationCoachAthleteScreen} />
                        <Stack.Screen name="OrganisationAthleteFriend" component={OrganisationAthleteFriendScreen} />

                        <Stack.Screen name="History" component={HistoryScreen} />
                        <Stack.Screen name="HistoryCalendar" component={HistoryCalendarScreen} />
                        <Stack.Screen name="HistoryHrv" component={HistoryHrvScreen} />



                    </Stack.Navigator>
                </ActivityContext.Provider>
            </UserContext.Provider>
        </NavigationContainer>
    );
}

