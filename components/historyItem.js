import React from 'react'
import { Text, View, TouchableWithoutFeedback, Button, Platform, Dimensions, PixelRatio, StyleSheet } from 'react-native'
import StatsDisplay from './statsDisplay';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

const radie = normalize(10);
const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
};

function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

const historyItem = (props) => {
    return (
        <>
            <View style={styles.superstyle}>
                <Text style={{ fontSize: normalize(30) }}>Din {"\n"}
                Historik
                </Text>

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: normalize(5)
                    }}>

                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around"

                }}>
                    <Button
                        title="Feed"
                        color='hsla(324, 53%, 50%,1)'

                    //onPress={() => Alert.alert('Left button pressed')}
                    />
                    <Button
                        onPress={() => Alert.alert('till översikt')}
                        title="Översikt"
                        color="black"
                    />


                </View>
            </View>
            <TouchableWithoutFeedback onPress={() => Alert.alert('till passets sida')}>
                <View style={styles.container}>
                    <View style={{ flexGrow: 4 }}>
                        <View style={styles.title}>
                            <Text style={styles.h4}>Måndag löpning</Text>
                            <Text style={styles.h4}>23 feb 2020</Text>
                        </View>
                        <View style={styles.statsRow}>
                            <StatsDisplay statsTitle={"Avg HR"} value={150} textStyle={styles.h3} />
                            <StatsDisplay statsTitle={"Min/km"} value={"4:25"} textStyle={styles.h3} />

                        </View>
                    </View>

                    <View style={styles.time}>
                        <Text style={styles.h2}>08:00</Text>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </>
    )
};

const styles = StyleSheet.create({
    superstyle: {
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        height: normalize(115),
        width: '100%',
        flexDirection: "column",
        marginBottom: normalize(10),
        // paddingTop:normalize(20),
        paddingLeft: normalize(20),
        paddingRight: normalize(100)
    },
    container: {
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-between'
    },
    statsRow: {
        backgroundColor: 'hsla(324, 53%, 66%,0.65)',
        flexDirection: "row",
        borderTopRightRadius: normalize(15),
        padding: 1,
    },
    time: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexGrow: 1,
        margin: 10,
        padding: 10
    },
    h2: {
        fontSize: normalize(20)
    },
    h3: {
        color: 'white',
        fontSize: normalize(15)
    },
    h4: {
        fontSize: normalize(18)
    }
});

export default historyItem;



