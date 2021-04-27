import React from 'react';
import { Text, SafeAreaView, View, ScrollView, TextInput, Dimensions } from 'react-native';

import BigButton from '../components/BigButton';

import UserContext from '../components/UserContext';
import Style from '../styles/Style';

import local_ip from '../local_ip';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const context = React.useContext(UserContext);


    let user = {
        "email": email,
        "password": password
    }

    return (
        <SafeAreaView>
            <View style={{ display: 'flex', height: SCREEN_HEIGHT }}>
                <ScrollView vertical={true} style={[{ padding: 10, flexGrow: 1, paddingTop: 250 }, Style.background]}>

                    <TextInput style={[Style.item]} placeholder={"E-mail"} onChangeText={setEmail}></TextInput>
                    <TextInput style={[Style.item]} placeholder={"password"} secureTextEntry={true} onChangeText={setPassword}></TextInput>
                    <Text>{error}</Text>

                    <BigButton text={"Logga in!"} style={Style.item} action={() => login(navigation, user)} />

                    <BigButton text={"Sign up"} style={Style.item} action={() => navigation.navigate("Signup")} />

                </ScrollView>
            </View>
        </SafeAreaView>);

    function login(nav, user) {
        signup(JSON.stringify(user))
            .then(res => {
                console.log(res.user_id);
                context.user = res.user_id;
            })
            .then(nav.navigate('FrontPage'))
            .catch(error => console.log(error));
    }

}




function signup(user) {

    return fetch(local_ip + '/login', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: user
    })
        .then(res => res.json())

}

export default LoginScreen;