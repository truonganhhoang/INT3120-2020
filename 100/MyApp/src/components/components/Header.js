import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Styles } from '../../styles'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Header extends Component {
    render() {
        return (
            <View style={Styles.header}>
                    <TouchableOpacity>
                        
                    </TouchableOpacity>
                    <Text style={[Styles.h1text, {color: "#E1F5FE", margin: 8}]}>Knowledge store</Text>
                    <TouchableOpacity style={[localStyles.button, {marginLeft: 96}]} 
                    onPress={this.props.onPress1} >
                        <FontAwesome5Icon name="search" size={24} color="#E1F5FE"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[localStyles.button, {marginLeft: 8}]}
                    onPress={this.props.onPress2} >
                        <FontAwesome5Icon name="play-circle" size={24} color="#E1F5FE"/>
                    </TouchableOpacity>
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    button:{
        padding: 12,
        backgroundColor:"#303F9F",
        borderRadius: 48,
        alignItems: "center",
        justifyContent: "center",
    }
})