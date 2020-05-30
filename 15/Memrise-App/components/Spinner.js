import React from 'react'
import {
    Text ,
    Image,
    View,
    StyleSheet,
} from "react-native";

import spin from '../assets/spin.gif'

export default function Spinner (props){
   
    return( 
       <View style={styles.container}>
        <Image style ={styles.image} source ={spin}/> 
        <Text style={styles.text}> Loading .... </Text>
     </View>
    )
  
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        // backgroundColor :'#00f'
    },
    text:{
        fontSize:20,
    },
    image:{
        marginBottom:0,
        height:100,
        width:100,
    }
});
