import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Header} from 'react-native-elements';
import {Icon} from 'react-native-elements';
export default class Top extends Component {
    render() {
        return (
            <View>
                <Header leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Ôn thi giấy phép lái xe', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>
        );
    }
}
