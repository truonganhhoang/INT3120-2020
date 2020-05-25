import { Linking } from "react-native";
import React, { Component } from "react";
import {
  View,
  Button
} from "native-base";

export default class Rate extends Component {
    render(){
        return(
            <View>
                <Button onPress = {() => {
                   Linking.openURL("market://details?id=com.bkit.congthuctienganh");}} />
            </View>
        );
    }
}