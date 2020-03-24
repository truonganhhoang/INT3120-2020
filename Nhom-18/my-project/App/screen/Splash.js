import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class Splash extends Component  {
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#66bb6a', }}>
              <Text style={{color:'white', fontSize:20,}}>HẠNG A1,A2..,B1,B2,C,D,E..</Text>
              <Text style={{color:'white', fontSize:15,}}>ÔN THI GIẤY PHÉP LÁI XE</Text>
            </View>
          );
    }
}
