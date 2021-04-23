import React from "react"
import { View, Text } from "react-native"

const statsDisplay = (props) => {
    return (
        <View style={{ margin: 5, alignItems: 'center' }}>
            <Text style={props.textStyle}>{props.statsTitle}</Text>
            <Text style={[props.textStyle, { fontSize: 20 }]}>{props.value}</Text>
        </View>
    )
};

export default statsDisplay;