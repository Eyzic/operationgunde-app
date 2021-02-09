import React from 'react';
import { TextInput } from 'react-native';

const DefaultInput = () => {
    const [value, onChangeText] = React.useState('Default Placeholder');

    return (
        <TextInput
            style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
    );

}

export default DefaultInput;