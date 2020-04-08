// Core
import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

//Layout
import Header from '../Layout/Header'

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={mainLayout.header}>
                    <Header />
                </View>
                <View style={mainLayout.content}>
                    <View>
                        <Text style={mainLayout.text}>Chưa có từ vựng nào trong danh sách từ vựng của bạn</Text>
                    </View>
                </View>
            </View>
        )
    }
}

var mainLayout = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row"
    },
    header:{
        flex: 1,
    },
    content:{
        flex: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        fontSize: 20,
        textAlign: "center"
    }
})

