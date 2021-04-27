import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import UserContext from './UserContext';

import local_ip from '../local_ip';

const form = (props) => {
    const userState = React.useContext(UserContext);
    const [hrv, onChangeHrv] = React.useState(68);
    const [sleep, onChangeSleep] = React.useState(7);
    const [stress, onChangeStress] = React.useState(4);
    const [mood, onChangeMood] = React.useState(8);
    const [soreness, onChangeSoreness] = React.useState(6);
    const [injuries, onChangeInjuries] = React.useState(2);
    const [energy, onChangeEnergy] = React.useState(9);

    console.log(UserContext);

    let base = "http://localhost:5000/"

    let data = {
        user_id: userState.user,
        date: new Date().toISOString().substr(0, 10),
        hrv: hrv,
        sleeping_hours: sleep,
        stress_level: stress,
        muscle_ache: soreness,
        mood_level: mood,
        injury_level: injuries,
        energy_level: energy
    }

    function saveMeasure() {
        console.log("SaveMeasure");
        fetch(local_ip + "/api/form/stats", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(res => alert(JSON.stringify(res)))
            .catch(error => console.log(error));
    }

    return (
        <View style={props.item} >
            <Text>HRV:</Text>
            <TextInput style={[props.style]} onChangeText={onChangeHrv} value={hrv}></TextInput>

            <Text>Sömn:</Text>
            <TextInput style={[props.style]} onChangeText={onChangeSleep} value={sleep}></TextInput>

            <Text>Stressnivå:</Text>
            <TextInput style={[props.style]} onChangeText={onChangeStress} value={stress}></TextInput>

            <Text>Humör:</Text>
            <TextInput style={[props.style]} onChangeText={onChangeMood} value={mood}></TextInput>

            <Text>Muskeltrötthet:</Text>
            <TextInput style={[props.style]} onChangeText={onChangeSoreness} value={soreness}></TextInput>

            <Text>Skador:</Text>
            <TextInput style={[props.style]} onChangeText={onChangeInjuries} value={injuries}></TextInput>

            <Text>Energinivå:</Text>
            <TextInput style={[props.style]} onChangeText={onChangeEnergy} value={energy}></TextInput>
            <Button style={props.style} color="#BB22AA" title="Daily Measure!" onPress={() => saveMeasure()} />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        margin: 5
    }
});

export default form;