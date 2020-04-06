// Core
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// style color
import {commonColor} from '../Common/Color';

export default class HeaderHomeScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={commonColor.mainColor}>abc</Text>
            </View>
        )
    }
}


