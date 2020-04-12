import React, { Component } from 'react'
import { View, Text, ScrollView} from 'react-native'
import { Styles } from '../../styles'
import Moikhoahoc from '../components/Moikhoahoc'
export default class Screen3 extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={Styles.header}>
                    <Text style={[Styles.h1text, {color: "#E1F5FE", margin: 10}]}>Giỏ hàng</Text>
                </View>
                <View style={Styles.container}>
                    <ScrollView>
                        <Moikhoahoc />
                    </ScrollView>
                </View>
            </View>
        )
    }
}
