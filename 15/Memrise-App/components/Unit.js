import React from 'react'
import {
    Text ,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from "react-native";
import * as Progress from 'react-native-progress';
 

import planet from '../assets/planet.png';
import flash from '../assets/splash.png';
import wateringCan from '../assets/watering-can.png';

export default function Unit (props){
    const { id ,unitName  } = props.unit;
    const  onPress  = props.onPress;

    return( 
        <TouchableOpacity 
            activeOpacity ={0.5}
          onPress={onPress}
        >
            <View style ={styles.container}>
                    <Image style={styles.unitImange} source = {planet} />
                    <Progress.Bar progress={0.3}  />
                    <Text style={styles.unitTitle}> {id} - {unitName} </Text>
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
        shadowRadius: 1,
        shadowOffset:{width:0, height:0},
        marginBottom :2,
        // backgroundColor :'#00f'
    },
    unitImange:{
        width:100,
        height:100,
        marginBottom:10

    },
    unitTitle:{
        textTransform:'uppercase',
        marginTop :10 ,
        fontWeight: '700'

    }
});
