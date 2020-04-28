import React from 'react'
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Styles } from '../../styles';
export default function Boxlearn(props, { navigation }) {
    const urls = props.imglink;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View style={[Styles.vbox, {flexDirection:"column", justifyContent:"space-between"}]}>
                <View>
                    <Image style={Styles.minimg} source={urls}/>
                    <TouchableOpacity style={localStyles.button}>
                        <Text style={{color:"white"}}>Mới</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:"space-evenly", marginTop: 3}}>
                    <Text style={Styles.h4text}>Lorem ipsum dolor sit amet</Text>
                    <Text>Tên tác giả</Text>
                    <Text style={[Styles.h4text, {color: "hotpink"}]}>299.000đ</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const localStyles = StyleSheet.create({
    button:{
        width: 36, 
        marginTop: 4,
        backgroundColor:"#269361",
        padding: 4,
        borderRadius: 4,
    }
})