import React from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Dimensions } from 'react-native';

import BigButton from '../components/BigButton';
import UserContext from '../components/UserContext';

import Style from '../styles/Style';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const context = React.useContext(UserContext);


    let user = {
        "name": username,
        "email": email,
        "password": password
    }

    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT }}>
                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1, paddingTop: 250 }, Style.background]}>

                    <TextInput style={[Style.item]} placeholder={"Username"} onChangeText={setUsername}></TextInput>
                    <TextInput style={[Style.item]} placeholder={"E-mail"} onChangeText={setEmail}></TextInput>
                    <TextInput style={[Style.item]} secureTextEntry={true} placeholder={"Password"} onChangeText={setPassword}></TextInput>

                    <BigButton text={"Sign up!"} style={Style.item} action={() => registerUser(navigation, context, user)} />

                </ScrollView>
            </View>
        </SafeAreaView>);
}

function registerUser(nav, context, user) {
    signup(JSON.stringify(user))
        .then(res => context.user = res.user_id)
        .then(nav.navigate('FrontPage'))
        .catch(error => console.error(error));
}


function signup(user) {

    return fetch('http://localhost:5000/signup', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: user
    })
        .then(res => res.json())

}

export default SignupScreen;