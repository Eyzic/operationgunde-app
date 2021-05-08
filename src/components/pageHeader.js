import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Normalize from "../Normalize";


//Props: style = css for the toplevel of the component.
//       hasImage = true or false depending on whether you want to render a picture or not.
//       image = the location of the image to be shown. Can be ignored if there is no image.

const PageHeader = (props) => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <View style={props.style}>
            <View style={[styles.header]}>
                <View>
                    <Text style={styles.h1} >
                        {props.text1}
                    </Text>
                    <Text style={styles.h1} >
                        {props.text2}
                    </Text>

                    <Text style={[styles.h3, styles.top_border]}>
                        Taggad och redo
                    </Text>
                </View>
                {props.hasImage &&
                    <Image source={require('../assets/springa.png')} style={styles.image} />}

            </View>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    h1: {
        fontFamily: "Helvetica",
        fontSize: Normalize(30),
        lineHeight: 40
    },
    h3: {
        fontFamily: "Helvetica",
        fontSize: Normalize(20),
    },
    top_border: {
        borderTopColor: '#000',
        borderTopWidth: 3,
        paddingTop: 10
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        width: Normalize(105),
        height: Normalize(105)
    }
});

export default PageHeader;