import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image, Button,FlatList} from 'react-native';
import chidan from "../Data/chidan";
 
class Bienbaocam extends Component{
    render(){
        return(
           <View>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{height:100,flex:1.4}}><Image source={{uri: this.props.item.Img}}  style={{marginTop:10,width:"100%",height:"60%",paddingBottom:5} }>
                    </Image></View>
                    <View style={{flex:2.7,marginTop:5,marginRight:10,marginLeft:10}}>
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
                data={chidan}
                renderItem={({item, index})=>{
                    return(
                      <Bienbaocam item={item} index={index}>

                      </Bienbaocam>  
                    );
                }}>

               </FlatList>
            </View>
        )}}