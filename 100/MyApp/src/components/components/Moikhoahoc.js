import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Moikhoahoc() {
    return (
        <View style={localStyles.content}>
            <Image source={require("../../img/203.jpg") }  style={localStyles.anh}/>
            <View style={{flex: 8, paddingLeft: 8, justifyContent: "space-between"}}>
                <Text style={{fontSize: 20}}>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
                <Text style={{fontSize: 16, color: "#01579B"}}>299.000đ</Text>
            </View>
            <FontAwesome5 name="trash" size={24} color="#333" style={localStyles.icon} />
        </View>
    )
}

const localStyles = StyleSheet.create({
    content:{
        flexDirection: "row", 
        marginTop: 12, 
        backgroundColor:"#B3E5FC",
        padding: 8,
        borderRadius: 8,
    },
    anh:{
        width: 120,
        height: 120,
        borderRadius: 8,
        flex: 4,
        backgroundColor: "red"
    },
    icon:{
        flex: 1,
        // backgroundColor: "aqua",
        marginTop: 8,
    }
})