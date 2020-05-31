import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Styles } from '../../styles';
import React, { Component } from 'react'

export default class BoxLearn extends Component {
    render() {
    const { id, onMark, date, price, image, beta, name, hot } = this.props.course;
    return (
       
            <View style={[Styles.vbox, {flexDirection:"column", justifyContent:"space-between"}]}>
                <View>
                    <Image style={Styles.minimg} source={image} />
                    <TouchableOpacity style={localStyles.button}>
                        <Text style={{color:"white"}}>Mới</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:"space-evenly", marginTop: 3}}>
                    <Text style={Styles.h4text}>{name}</Text>
                    <Text>Tên tác giả</Text>
                    <Text style={[Styles.h4text, {color: "hotpink"}]}>{price}.000đ</Text>
                </View>
            </View>
    )
}}
const localStyles = StyleSheet.create({
    button:{
        width: 36, 
        marginTop: 4,
        backgroundColor:"#269361",
        padding: 4,
        borderRadius: 4,
    }
})