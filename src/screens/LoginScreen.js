import React from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Dimensions } from 'react-native';

import BigButton from '../components/BigButton';
import UserContext from '../components/UserContext';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = React.useState("");
    const context = React.useContext(UserContext);
    console.log(user);

    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT }}>
                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1, paddingTop: 250 }, Style.background]}>

                    <TextInput style={[Style.item]} onChangeText={setUser}></TextInput>

                    <BigButton text={"Logga in!"} style={Style.item} action={() => login(navigation, context, user)} />

                </ScrollView>
            </View>
        </SafeAreaView>);
}

function login(nav, context, user) {

    context.user = user;
    nav.navigate('FrontPage');
}

export default LoginScreen;