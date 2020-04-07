import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Moikhoahoc() {
    return (
        <View style={{flexDirection: "row", marginTop: 15}}>
            <Image source={require("../../img/203.jpg") }  style={localStyles.anh}/>
            <View style={{flex: 9, paddingLeft: 8, justifyContent: "space-between"}}>
                <Text style={{fontSize: 21}}>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
                <Text style={{fontSize: 16, color: "#269361"}}>299.000đ</Text>
            </View>
            <FontAwesome5 name="trash" size={26} color="#333" style={localStyles.icon} />
        </View>
    )
}

const localStyles = StyleSheet.create({
    anh:{
        width: 120,
        height: 120,
        borderRadius: 10,
        flex: 5,
        backgroundColor: "red"
    },
    icon:{
        flex: 1,
        // backgroundColor: "aqua",
        marginTop: 10,
    }
})