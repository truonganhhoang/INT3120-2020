import React, { Component } from 'react';
import { Text, View ,StyleSheet,ScrollView} from 'react-native';
class Greeting extends Component {
    render() {
      return (
        
        <View style={{marginTop:10,marginLeft:20,marginRight:20,backgroundColor:'#FFFFFF',borderRadius:5}}>
        <View style={{marginTop:10,marginLeft:10,marginBottom:10,marginRight:10}}>
            <Text style={{fontSize:17}}>{this.props.name}</Text>
            <Text>{this.props.value}</Text>
        </View>          
    </View>
        
      );
    }
  }
export default class TrangChu extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:'#F5ECCE'}}>
               <Greeting name="helo"/>
               <Greeting/>
               
            </ScrollView>
        );
    }
    
   }
   