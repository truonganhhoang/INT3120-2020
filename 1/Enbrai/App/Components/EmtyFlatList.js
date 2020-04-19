import React, { Component } from "react";
import { View, AsyncStorage, StatusBar} from "react-native";
import {Text, Button, Icon} from "react-native-elements";

export default class EmptyFlatlist extends Component {
    
  render() {
    return (
      <View style={{padding: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Không có dữ liệu</Text>
      </View>
    );
  }
}
