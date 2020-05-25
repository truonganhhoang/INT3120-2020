import React, { Component } from "react";
import { View, AsyncStorage, StatusBar, Image } from "react-native";
import { Text, Button } from "react-native-elements";

const ChooseVieFromEngWord = (props) => {

  return (
    <View style={{flex: 1}}>
      <View style={{ flex: 3 }}></View>
      <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16 }}>Chọn bản dịch đúng</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{}}>hour</Text>
        </View>

        <View style={{ flex: 4, alignContent: 'center', justifyContent: 'space-around' }}>
          <Button title='phổ biến' type='outline' />
          <Button title='nạn nhân' type='outline' />
          <Button title='khó khăn' type='outline' />
          <Button title='giờ' type='outline' />
        </View>
      </View>
      <View style={{ flex: 3 }}></View>
    </View>
  );
}
export default ChooseVieFromEngWord