import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex : 1}}>
                    <Text>Chào mừng bạn</Text>
                </View>
                <View style={{flex:1, flexDirection: "row"}}>
                    <Text>
                        Tìm kiếm
                    </Text>
                    <Text>
                        Khóa học của tôi
                    </Text>
                </View>
            </View>
        )
    }
}
