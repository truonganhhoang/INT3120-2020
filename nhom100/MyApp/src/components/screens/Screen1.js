import React, { Component } from 'react'
import { View } from 'react-native'
import Menuf from './Menuf'
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
                   <Provideo />
                   <Provideo />
                </View>
                <Menuf></Menuf>
            </View>
        )
    }
}
