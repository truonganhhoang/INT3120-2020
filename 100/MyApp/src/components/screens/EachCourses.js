import React, { Component } from 'react'
import { Container, Content, Header, Left, Button, Body, Right, Icon, Title, Card, CardItem, Text, Fab } from 'native-base'
import { Image, ImageBackground, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
class EachCourses extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' size={32} />
                    </Button>
                    </Left>
                    <Body>
                        <Title>Chi tiết khóa học</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Screen3", {nameScreen:"Screen3"})}}>
                            <Icon name="md-basket" style={{color: "#fff"}}/>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <ScrollView>
                    <Content>
                        <Card >
                            <CardItem cardBody button onPress={this.props.GoEach}>
                                <ImageBackground source={require('../../img/005.jpg')} style={{height: 220, width: null, flex: 1}}>
                                    <ImageBackground style={{flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                                        <Text style={{color: "#fff",  opacity: 1}}>Hello</Text>
                                    </ImageBackground>
                                </ImageBackground> 
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
                {/* <Fab>
                    
                </Fab> */}
            </Container>
        )
    }
}
export default connect(null,)(EachCourses);