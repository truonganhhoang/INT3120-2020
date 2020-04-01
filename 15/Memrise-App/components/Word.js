import React from 'react'
import {
    Text ,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from "react-native";

import planet from '../assets/planet.png';
import flash from '../assets/splash.png';
import wateringCan from '../assets/watering-can.png';

import tree0 from '../assets/tree/tree0.png'
import tree1 from '../assets/tree/tree1.png'
import tree2 from '../assets/tree/tree2.png'
import tree3 from '../assets/tree/tree3.png'
import tree4 from '../assets/tree/tree4.png'
import tree5 from '../assets/tree/tree5.png'

export default function Word (props){
    const { id ,word ,mean , miss , level } = props.unit;
    return( 
        <TouchableOpacity 
            activeOpacity ={0.5}
            onPress={()=>{
                Alert.alert('Click')
            }}
        >
            <View style ={styles.container}>
                    <Image style={styles.unitImange} source = {tree4} />
                    <Text style={styles.word}> {word} </Text>
                    <Text style={styles.mean}> {mean} </Text>

            </View>
        </TouchableOpacity>

    )
  
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:16,
        borderRadius:4,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOpacity:0.3,
        shadowRadius: 10,
        shadowOffset:{width:0, height:0},
        marginBottom :30,
        // backgroundColor :'#00f'
    },
    wordImange:{
        width:5,
        height:5,
    },
    word:{
        textTransform:'lowercase',           
        fontWeight: '700'
    },
    mean:{
        textTransform:'uppercase',           
        fontWeight: '300'
    }

});
