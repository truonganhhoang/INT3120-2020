import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image} from 'react-native';

export default class TrangChu extends Component{
    render(){
        return(
            <View>  
                <Text>helll</Text>
                <Image source={require('../assets/thi.png')} />
                <Image source={{uri: 'https://znews-photo.zadn.vn/w1024/Uploaded/kbd_bcvi/2019_11_23/5d828e8d6f24eb1eb5148f5c.jpg' }} />
            </View>
        );
    }
    
   }