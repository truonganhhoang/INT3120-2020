import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image, Button,FlatList} from 'react-native';
import bienbaocam from '../Data/bienbaocam';
 
class Bienbaocam extends Component{
    render(){
        return(
           <View>
                <View style={{flexDirection:'row'}}>
                <View style={{flex:1,height:100,width:50}}><Image source={{uri: this.props.item.Img}}  style={{marginTop:10,width:"100%",height:"91%",paddingBottom:10} }>
                    </Image></View>
                    <View style={{flex:3.3,marginTop:5,marginRight:10,marginLeft:10}}>
                        <Text style={{fontSize:20}}>{this.props.item.Name}</Text>
                        <Text style={{fontSize:17,color:"#A4A4A4"}}>{this.props.item.Noidung}</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'#A4A4A4',height:2,marginTop:10}}></View>
           </View>
        );
    }
}
export default class BienCam extends Component{
    render(){
        return(
            <View style={{marginTop:10,marginLeft:10,marginRight:10}}>
               <FlatList
                data={bienbaocam}
                renderItem={({item, index})=>{
                    return(
                      <Bienbaocam item={item} index={index}>

                      </Bienbaocam>  
                    );
                }}>

               </FlatList>
            </View>
        )}}