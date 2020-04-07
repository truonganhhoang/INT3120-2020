import React, { Component } from 'react'
import { View, Text, ScrollView} from 'react-native'
import { Styles } from '../../styles'
import Moikhoahoc from '../components/Moikhoahoc'
export default class Screen3 extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.h1text}>Giỏ hàng</Text>
                <ScrollView>
                    <Moikhoahoc />
                    <Moikhoahoc />
                    <Moikhoahoc />
                    <Moikhoahoc />
                    <Moikhoahoc />
                    <Moikhoahoc />
                    <Moikhoahoc />
                </ScrollView>
                
            </View>
        )
    }
}
