import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
import { Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right } from 'native-base';
import { Image, View, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';
class Course extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { author, onMark, date, price, image, beta } = this.props.course;
        const colorMark = onMark ? "#90CAF9" : "gray";
        return (
            <Animatable.View animation="zoomInRight" style={{marginBottom: 20}}>
                <Card style={{flex: 0}}>
                    <CardItem cardBody button onPress={this.props.GoAuthor}>
                        <Left style={{margin: 4}}>
                            <Thumbnail source={require('../../img/005.jpg')} />
                            <Body>
                                <Text style={{width: 200}}>{author}</Text>
                                <Text note>{date}</Text>
                            </Body>
                        </Left>
                        <Right style={{marginRight: 16}}>
                            <TouchableOpacity >
                                <Icon name="md-bookmark" style={{fontSize: 28, color: colorMark }} />
                            </TouchableOpacity>
                        </Right>
                    </CardItem>
                    <CardItem cardBody button onPress={this.props.GoEach}>
                        <Image source={require('../../img/005.jpg')} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem cardBody button>
                        <Left style={{marginTop: 4}}>
                            <Text>
                                {beta}
                            </Text>
                        </Left>
                    </CardItem>
                    <CardItem button>
                        <Left>
                            <Text>
                                {price}
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

export default connect()(Course);