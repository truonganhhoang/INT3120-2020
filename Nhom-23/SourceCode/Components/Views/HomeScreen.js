// Core
import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

//library
import { SearchBar } from 'react-native-elements'

//Layout
import Header from '../Layout/Header'
import Content from '../Layout/Content'

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

