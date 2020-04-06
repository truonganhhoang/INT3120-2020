import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

//library
import { SearchBar } from 'react-native-elements'

export default class Header extends Component {

    render() {
        return (
            <View>
                <SearchBar
                    containerStyle={{backgroundColor:"#1E90FF"}}
                    inputContainerStyle={{backgroundColor:"white"}}
                    placeholder="Type here ..."
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    
})