import React from 'react';
import { View, StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native';
import Normalize from "../Normalize";

//To customize provide a Stylesheet with two styles named "Marked" and "Unmarked"

const evalBar = ({ limit, value, style }) => {

    const styles = StyleSheet.create({
        marked: {
            backgroundColor: "skyblue",
            width: Normalize(10),
            height: Normalize(10),
            marginRight: 5
        },
        unmarked: {
            backgroundColor: "grey",
            width: Normalize(10),
            height: Normalize(10),
            marginRight: 5
        }
    });

    const bar = [];
    const [customStyle, setCustomStyle] = React.useState(styles);

    React.useEffect(() => {
        style ? setCustomStyle(style) : setCustomStyle(styles)
    }, []);


    //Generate the boxes in the evalbar and fills color according to the values
    for (let i = 1; i <= limit; i++) {
        if (value > i) {
            bar.push(<View key={i} style={customStyle.marked} />)
        }
        else {
            bar.push(<View key={i} style={customStyle.unmarked} />)
        }
    }

    return (
        <View style={{ flexDirection: "row", margin: 5 }} >
            {bar}
        </View>
    )
};

export default evalBar;