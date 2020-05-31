import React, { Component } from "react";
import { View, AsyncStorage, StatusBar, Image} from "react-native";
import {Text, Button, Icon} from "react-native-elements";

const EmptyFlatlist= (props) => {
    
    return (
      <View style={{padding: 10,marginTop:100, alignItems: 'center', justifyContent: 'center'}}>
        <Icon
          name= 'cloud-off'
          size= {60}
          color='#BDBDBD'
        />
        <Text style={{marginTop:20,paddingLeft:30, paddingRight:30,fontSize:16}}>Không thể kết nối mạng  do cấu hình không chính xác hoặc tín hiệu yếu. Kiểm tra lại cài đặt mạng và thử lại</Text>
      </View>
    );
}
export default EmptyFlatlist