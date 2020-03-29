import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class Setting extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize:40 }}>Setting</Text>
            </View>
        );
    }
}
