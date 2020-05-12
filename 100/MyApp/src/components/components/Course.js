import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
import { Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right } from 'native-base';
import { Image, View, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import onBookmark from '../../redux/action';
class Course extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { id, onMark, date, price, image, beta, name, hot } = this.props.course;
        const colorMark = onMark ? "#90CAF9" : "gray";
        const colorHot = hot ? "#90CAF9" : "#fff";
        const author = this.props.author[0];
        return (
            <Animatable.View animation="zoomInRight" style={{marginBottom: 20}}>
                <Card style={{flex: 0}}>
                    <CardItem cardBody button onPress={this.props.GoAuthor}>
                        <Left style={{margin: 4}}>
                            <Thumbnail source={author.avt} />
                            <Body>
                                <Text style={{width: 200}}>{author.name} </Text>
                                <View style={{flexDirection: "row"}}>
                                    <Text note style={{paddingHorizontal: 0}}>{date}</Text>   
                                    <Icon name="md-flame" style={{color: colorHot, fontSize: 18}} />
                                </View>
                            </Body>
                        </Left>
                        <Right style={{marginRight: 16}}>
                            <TouchableOpacity
                            onPress={()=> this.props.onBookmark(id)}
                            >
                                <Icon name="md-bookmark" style={{fontSize: 28, color: colorMark }} />
                            </TouchableOpacity>
                        </Right>
                    </CardItem>
                    <CardItem cardBody button>
                        <Left style={{marginTop: 4, marginBottom: 4}}>
                            <Body>
                                <Text style={{fontWeight: "700", fontSize: 18, color:"#90CAF9"}}>{name}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody button onPress={this.props.GoEach}>
                        <Image source={image} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem cardBody button>
                        <Left style={{marginTop: 4}}>
                            <Body>
                                <Text>{beta}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem button>
                        <Left>
                            <Text>{price}</Text>
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
function mapStateToProps(state){
    return{ 
        authors: state.authors
    };
}
export default connect(mapStateToProps, {onBookmark})(Course);