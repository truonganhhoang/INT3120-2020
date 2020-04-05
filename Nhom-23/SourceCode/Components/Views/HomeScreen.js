// Core
import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

//library
import { SearchBar } from 'react-native-elements'

//View
import Header from './Header'
import Content from './Content'

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={mainLayout.header}>
                    <Header />
                </View>
                <View style={mainLayout.content}>
                    <Content />
                </View>
                <View style={mainLayout.footer}>
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
    },
    footer:{
        flex: 1,
    }
})

