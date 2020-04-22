import * as React from 'react';
import { View, Image, Text, TouchableOpacityBase } from 'react-native';
import { StyleSheet, Dimensions, ProgressBarAndroid } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export class Row extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.row}>
                    <Text style={styles.text}> {this.props.name} </Text>
                    <Image style={styles.image} source={require('../images/down_arrow.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

const Tab = createMaterialTopTabNavigator();

export function Meo_thi() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: "#66BB6A",
                },
            }}>

            <Tab.Screen name='MẸO LÍ THUYẾT' component={Li_thuyet} />
            <Tab.Screen name='MẸO THỰC HÀNH' component={Thuc_hanh} />
        </Tab.Navigator>
    )
}

export function Li_thuyet() {
    return (
        <View>
            <Row name='Khái niệm và quy tắc' />
            <Row name='Nghiệp vụ vận tải' />
            <Row name='Kỹ thuật lái xe' />
            <Row name='Cấu tạo và sửa chữa' />
            <Row name='Hệ thống biển báo' />
            <Row name='Sa hình' />
        </View>

    )
}

export function Thuc_hanh() {
    return (
        <Text> Thực hành nè </Text>
    )
}

const styles = StyleSheet.create({
    row: {
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },

    text: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 10,
    },

    image: {
        width: 20,
        height: 10,
        marginRight: 10,
    }
})