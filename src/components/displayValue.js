import React, { Component } from 'react';
import { Text } from 'react-native';

export default class DisplayValue extends Component {

    //Fixa ett varnligt ordentligt state med useState().
    state = {
        value: 0
    };


    //TODO: Byt namn och fixa variabelnamn
    async componentDidMount() {
        try {
            const apiCall = await fetch('http://localhost:5000/database');
            const response = await apiCall.json();
            this.setState({ value: response.value });
        } catch (err) {
            console.log("Error fetching data", err);
        }
    }

    render() {
        const { value } = this.state;
        return <Text>Value in database: {this.state.value}</Text>
    }
} 