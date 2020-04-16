import React, { Component } from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

export default class ChaoHoi extends Component {
    render() {
        return (
            <View>
                <Icon
                    raised
                    name='fire'
                    type='font-awesome'
                    color='red'
                    onPress={() => navigation.navigate('List')}
                    size = {40}
                />
                
            </View>
        );
    }

}