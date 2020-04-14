import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class Splash extends Component  {
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#66bb6a', }}>
              <Text style={{color:'white', fontSize:20,}}>ÔN THI</Text>
              <Text style={{color:'white', fontSize:15,}}>GIẤY PHÉP LÁI XE B1</Text>
            </View>
          );
    }
}
