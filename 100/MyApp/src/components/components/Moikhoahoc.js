import React, { Component } from 'react'
import {  Text, StyleSheet, TouchableOpacity } from 'react-native'
import {  Left, Thumbnail, Body, Right, H3, ListItem, Icon } from 'native-base';
import { connect } from 'react-redux';
import { Title } from 'react-native-paper';
class Moikhoahoc extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { image, name, price } = this.props.course
        return (
            <ListItem thumbnail>
                <Left>
                    <TouchableOpacity onPress={this.props.GoEach}>
                        <Thumbnail square large source={image} />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <TouchableOpacity onPress={this.props.GoEach}>
                        <Title>{name}</Title>
                        <Text note style={{fontStyle: "italic", color: "hotpink"}}>{price}</Text>
                    </TouchableOpacity>
                </Body>
                <Right>
                    <TouchableOpacity>
                        <Icon name="md-trash" style={{fontSize: 32, color:"#333"}}/>
                    </TouchableOpacity>
                </Right>
            </ListItem>
        )
    }
    
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
export default connect()(Moikhoahoc);