import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation';
import { Styles } from '../../styles';
import { Card, CardItem, Body, H3 } from 'native-base';
export default function Thongbao() {
    return (
        // <View style={localStyles.each}>
        //     <View style={localStyles.header}>
        //         <Foundation name="burst-new" size={48} color="hotpink" style={{marginTop: 3, flex: 1}}/>
        //         <Text style={localStyles.content}>Bạn chưa tìm được khóa học ưng ý ?</Text>
        //     </View>
        //     <View>
        //         <Text style={{fontSize: 20}}>Khám phá ngay TOP khóa học được nhiều người quan tâm</Text>
        //         <Text style={localStyles.date}>01/04/2020 - 19:01</Text>
        //     </View>
        // </View>
        <Card>
            <CardItem header>
                <H3>Bạn chưa tìm được khóa học ưng ý ?</H3>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                    Khám phá ngay TOP khóa học được nhiều người quan tâm
                    </Text>
                </Body>
            </CardItem>
            <CardItem footer>
                <Text>01/04/2020 - 19:01</Text>
            </CardItem>
     </Card>
    )
}
const localStyles = StyleSheet.create({
    each:{
        height: 152,
        justifyContent: "space-around",
        backgroundColor: "#B3E5FC",
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
    },
    header: { 
        flexDirection: "row",
        marginBottom: 8,
    },
    content: {
        flex: 8,
        fontSize: 24,
        fontWeight: "700"
    },
    date:{
        color: "#266A93",
        fontSize: 16,
    }
})