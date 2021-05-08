import React from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Normalize from "../Normalize";


//Props: style = css for the toplevel of the component.
//       hasImage = true or false depending on whether you want to render a picture or not.
//       image = the location of the image to be shown. Can be ignored if there is no image.

const group = (props) => {
    return (

        <TouchableWithoutFeedback onPress={props.nav}>
            <View style={props.style} >
                <View style={[styles.header]} >
                    <Image source={props.image} style={styles.image} />
                    <View>
                        <Text style={styles.h1} >
                            {props.title}
                        </Text>
                    </View>
                </View>

                <Text style={styles.h2}>
                    {props.groupType}
                </Text>
                <Text style={styles.h3}>
                    {props.memberCount}
                    {' '}
                    <Image source={require('../assets/menu/group.png')} style={styles.image2} />
                </Text>

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    h1: {
        fontFamily: "Helvetica",
        fontSize: Normalize(25),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 9,
    },
    h2: {
        fontFamily: "Helvetica",
        fontSize: Normalize(15),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginBottom: -25,

    },
    h3: {
        fontFamily: "Helvetica",
        fontSize: Normalize(20),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        width: Normalize(100),
        height: Normalize(100),
        borderRadius: 20
    },
    image2: {
        width: Normalize(15),
        height: Normalize(15),
        borderRadius: 0,
        alignSelf: 'flex-end',
    }
});

export default group;