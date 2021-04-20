import React from 'react';
import { Dimensions } from 'react-native';

import PageHeader from '../components/pageHeader';
import StandardTemplate from '../templates/StandardTemplate';


const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const Screen = ({ navigation }) => {
    return (
        <StandardTemplate navigation={navigation} showMenu={true}>


        </StandardTemplate>
    );
}

export default Screen;