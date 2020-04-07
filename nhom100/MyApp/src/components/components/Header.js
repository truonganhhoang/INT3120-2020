import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Styles } from '../../styles'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export default class Header extends Component {
    render() {
        return (
            <View style={{height: 90, backgroundColor:"#fff", borderRadius: 8}}>
                <View style={{flex : 1}}>
                    <Text style={Styles.h1text}>Chào mừng bạn</Text>
                </View>
                <View style={{flex:1, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20}}>
                    <TextInput placeholder="Tìm kiếm">
                        <FontAwesome5Icon name="search" size={16} color="#333"/>
                    </TextInput>
                    <Text style={{fontSize:16}}>
                        Khóa học của tôi
                    </Text>
                </View>
            </View>
        )
    }
}
