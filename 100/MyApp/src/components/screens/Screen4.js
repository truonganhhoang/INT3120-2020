import React, { Component } from 'react'
import { View, Text, ScrollView} from 'react-native'
import { Styles } from '../../styles'
import Thongbao from '../components/Thongbao'
export default class Screen4 extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.h1text}>Thông báo</Text>
                <Text style={{fontSize: 26}}>Gần đây</Text>
                <ScrollView>
                    <Thongbao />
                    <Thongbao />
                    <Thongbao />
                    <Thongbao />
                    <Thongbao />
                </ScrollView>
            </View>
        )
    }
}
