import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import Provideo from '../components/Provideo'
import Header from '../components/Header'

export default class Screen1 extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex: 1.5}}>
                    <Header></Header>
                </View>
                <View style={{flex: 8, flexDirection: "row", backgroundColor: "#ddd"}}>
                    <Text style={{fontSize: 30}}>Màn hình home</Text>
                   <Provideo />
                   <Provideo />
                </View>
            </View>
        )
    }
}
