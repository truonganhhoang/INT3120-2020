import React from "react";
import  {
    View, 
    Text, 
    TouchableOpacity,
    StyleSheet
 } from 'react-native';

export default function KanjiChallenge (){
  return (
    <TouchableOpacity>
     <View style={styles.container}>
        <Text style={styles.text}>習</Text>
    </View>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        margin:3,
        height:80,
        width: 80,
        backgroundColor:'white',
        borderRadius:3
    },
    text: {
        color:'#006265',
        fontSize: 20,
    }
})