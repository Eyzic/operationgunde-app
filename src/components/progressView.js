import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Normalize from "../Normalize";

const progressView = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <ScrollView horizontal={true} >
            <View style={{ flexDirection: "row" }}>
                <Progress progress={75} strokeWidth={30} style={{ width: 80 }} />
                <Progress progress={75} strokeWidth={30} style={{ width: 80 }} />
                <Progress progress={75} strokeWidth={30} style={{ width: 80 }} />
            </View>
        </ScrollView>
    )
};
export default progressView;