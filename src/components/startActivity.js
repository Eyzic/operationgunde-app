import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ActivityContext from './activityContext';
import Normalize from "../Normalize";

const startActivity = (props) => {
    const context = useContext(ActivityContext);

    return (
        <TouchableOpacity style={[props.style, { backgroundColor: '#BB22AA', marginBottom: 30 }]} onPress={() => goToNext(props.nav, context)}  >
            <Text style={[styles.h2, { textAlign: 'center' }]}>Starta aktivitet</Text>
        </TouchableOpacity>
    )
};

function goToNext(nav, context) {
    context.activityRunning = true;
    nav.navigate("CurrentActivity");
}

const styles = StyleSheet.create({
    h2: {
        fontFamily: "Helvetica",
        fontSize: Normalize(30),
    }
});

export default startActivity;