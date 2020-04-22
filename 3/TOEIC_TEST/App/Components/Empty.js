import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
const Empty = (props) => {
        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: props.theme === false ? '#F5F5F5' : '#263238', alignItems: 'center', justifyContent: 'center' }}
            >
                <Icon name="box-open" size={90} color="#9E9E9E" />
                <Text style={{ color: "#9E9E9E", fontSize: 18, paddingTop: 10 }}>Không có dữ liệu</Text>
            </SafeAreaView>
        )
}
export default Empty