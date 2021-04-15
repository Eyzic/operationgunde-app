import React from 'react';
import { View, StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 420;

function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

//To customize provide a Stylesheet with two styles named "Marked" and "Unmarked"

const evalBar = (props) => {

    const styles = StyleSheet.create({
        marked: {
            backgroundColor: "skyblue",
            width: normalize(10),
            height: normalize(10),
            marginRight: 5
        },
        unmarked: {
            backgroundColor: "grey",
            width: normalize(10),
            height: normalize(10),
            marginRight: 5
        }
    });

    const bar = [];
    const [customStyle, setCustomStyle] = React.useState(styles);

    React.useEffect(() => {
        props.style ? setCustomStyle(props.style) : setCustomStyle(styles)
    }, []);


    //Generate the boxes in the evalbar and fills color according to the values
    for (let i = 1; i <= props.limit; i++) {
        if (props.value > i) {
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