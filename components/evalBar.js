import React from 'react';
import { View, StyleSheet } from 'react-native';

const evalBar = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={styles.row} >
            <View style={[props.style]} />
            <View style={[props.style]} />
            <View style={[props.style]} />
            <View style={[props.style]} />
            <View style={[props.style]} />
            <View style={[props.style]} />
            <View style={[props.style]} />
            <View style={[props.style]} />
            <View style={[props.style]} />
            <View style={[props.style]} />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        margin: 5
    }
});

export default evalBar;