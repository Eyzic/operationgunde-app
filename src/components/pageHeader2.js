import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

//Detta är en pageheader utan progressview och utan taggad och redo 
import Normalize from "../Normalize";


//Props: style = css for the toplevel of the component.
//       hasImage = true or false depending on whether you want to render a picture or not.
//       image = the location of the image to be shown. Can be ignored if there is no image.

const PageHeader2 = (props) => {
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

                </View>
                {console.log(props.image)}
                {props.hasImage &&
                    <Image source={require('../assets/springa.png')} style={styles.image} />}

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    h1: {
        fontFamily: "Helvetica",
        fontSize: Normalize(30),
        lineHeight: 40
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

export default PageHeader2;