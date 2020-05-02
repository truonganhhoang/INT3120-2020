import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
import { Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right } from 'native-base';
import { Image, View, TouchableOpacity, TouchableHighlight } from 'react-native';
export default class Course extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Animatable.View animation="zoomInRight" style={{marginBottom: 20}}>
                <Card style={{flex: 0}}>
                    <CardItem cardBody button>
                        <Left style={{margin: 4}}>
                            <Thumbnail source={require('../../img/005.jpg')} />
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>20/02/2020</Text>
                            </Body>
                        </Left>
                        <Right style={{margin: 16}}>
                            <TouchableOpacity>
                                <Icon name="md-bookmark" style={{fontSize: 28 }} />
                            </TouchableOpacity>
                        </Right>
                    </CardItem>
                    <CardItem cardBody button onPress={this.props.GoEach}>
                        <Image source={require('../../img/005.jpg')} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem cardBody button>
                        <Left style={{marginTop: 4}}>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, impedit. Accusantium culpa quos aperiam delectus iure veniam ab
                            </Text>
                        </Left>
                    </CardItem>
                    <CardItem button>
                        <Left>
                            <Text>
                                200.000 ₫
                            </Text>
                        </Left>
                        <Right>
                            <View style={{flexDirection: "row"}}>
                                <Icon name="md-star" style={{fontSize: 28, color:"#FFFF00" }} />
                                <Icon name="md-star" style={{fontSize: 28, color:"#FFFF00" }} />
                                <Icon name="md-star" style={{fontSize: 28, color:"#FFFF00" }} />
                                <Icon name="md-star-half" style={{fontSize: 28, color:"#FFFF00" }} />
                                <Icon name="md-star-outline" style={{fontSize: 28, color:"#FFFF00" }} />
                            </View>
                        </Right>
                    </CardItem>
                </Card>
            </Animatable.View>
        )
    }
}
