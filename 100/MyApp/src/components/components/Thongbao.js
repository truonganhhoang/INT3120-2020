import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation';
import { Styles } from '../../styles';
export default function Thongbao() {
    return (
        <View style={localStyles.each}>
            <View style={localStyles.header}>
                <Foundation name="burst-new" size={50} color="hotpink" style={{marginTop: 3, flex: 1}}/>
                <Text style={localStyles.content}>Bạn chưa tìm được khóa học ưng ý ?</Text>
            </View>
            <View>
                <Text style={{fontSize: 20}}>Khám phá ngay TOP khóa học được nhiều người quan tâm</Text>
                <Text style={localStyles.date}>01/04/2020 - 19:01</Text>
            </View>
        </View>
    )
}
const localStyles = StyleSheet.create({
    each:{
        height: 150,
        justifyContent: "space-around",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 5,
        marginBottom: 10,
    },  
    header: { 
        flexDirection: "row",
        marginBottom: 10,
    },
    content: {
        flex: 8,
        fontSize: 26,
        fontWeight: "700"
    },
    date:{
        color: "#266A93",
        fontSize: 16,
    }
})