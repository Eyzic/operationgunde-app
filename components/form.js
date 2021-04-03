import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const form = (props) => {
    const [name, onChangeName] = React.useState('Anders');
    const [hrv, onChangeHrv] = React.useState(68);
    const [sleep, onChangeSleep] = React.useState(7);
    const [stress, onChangeStress] = React.useState(4);
    const [mood, onChangeMood] = React.useState(8);
    const [soreness, onChangeSoreness] = React.useState(6);
    const [injuries, onChangeInjuries] = React.useState(2);
    const [energy, onChangeEnergy] = React.useState(9);

    let base = "http://localhost:5000/"

    let data =
        JSON.stringify({
            user: 2,
            date: new Date().toISOString().substr(0, 10),
            hrv: hrv,
            sleeping_hours: sleep,
            stress_level: stress,
            muscle_ache: soreness,
            mood_level: mood,
            injury_level: injuries,
            energy_level: energy
        })

    function saveMeasure() {
        console.log("SaveMeasure");
        fetch(base + "api/stats", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: data
        })
            .then(response => response.json())
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }

    return (
        <View style={props.item} >
            <Text>Namn:</Text>
            <TextInput style={[styles.item]} onChangeText={(text) => onChangeName(text)} value={name}></TextInput>

            <Text>HRV:</Text>
            <TextInput style={[styles.item]} onChangeText={onChangeHrv} value={hrv}></TextInput>

            <Text>Sömn:</Text>
            <TextInput style={[styles.item]} onChangeText={onChangeSleep} value={sleep}></TextInput>

            <Text>Stressnivå:</Text>
            <TextInput style={[styles.item]} onChangeText={onChangeStress} value={stress}></TextInput>

            <Text>Humör:</Text>
            <TextInput style={[styles.item]} onChangeText={onChangeMood} value={mood}></TextInput>

            <Text>Muskeltrötthet:</Text>
            <TextInput style={[styles.item]} onChangeText={onChangeSoreness} value={soreness}></TextInput>

            <Text>Skador:</Text>
            <TextInput style={[styles.item]} onChangeText={onChangeInjuries} value={injuries}></TextInput>

            <Text>Energinivå:</Text>
            <TextInput style={[styles.item]} onChangeText={onChangeEnergy} value={energy}></TextInput>
            <Button onPress={() => saveMeasure()}></Button>
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