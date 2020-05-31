// Core
import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// style color
import {commonColor} from '../Common/Color';

export default class HeaderHomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.icon} source={require('../../assets/Image/circle.png')} />
                <Text style={[commonColor.labelColor,styles.title]}>Bộ từ vựng Giao tiếp trình độ Căn bản</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
        
    },
    icon:{
        height: 64,
        width: 64
    },
    title:{
        fontSize: 24,
        fontWeight: "bold"
    }
})


