import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image} from 'react-native';

export default class TrangChu extends Component{
    render(){
        return(
            <View>  
                <Text>helll</Text>
                <Image source={require('../assets/thi.png')} />
                <Image source={require('../assets/car.png')} />
            </View>
        );
    }
    
   }