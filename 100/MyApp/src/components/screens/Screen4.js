import React, { Component } from 'react'
import { View, Text, ScrollView} from 'react-native'
import { Styles } from '../../styles'
import Thongbao from '../components/Thongbao'
export default class Screen4 extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={Styles.header}>
                    <Text style={[Styles.h1text, {color: "#E1F5FE", margin: 8}]}>Thông báo</Text>
                </View>
                <View style={Styles.container}>
                    <ScrollView>
                        <Thongbao />
                    </ScrollView>
                </View>
            </View>
        )
    }
}
