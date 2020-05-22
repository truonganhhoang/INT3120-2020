import React, { Component } from 'react'
import { Container, Content, Header, Left, Button, Body, Right, Icon, Title, Card, CardItem, Fab } from 'native-base'
import {  ImageBackground, View, TouchableOpacity, ScrollView, StyleSheet, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
class EachCourses extends Component {
    constructor(props){
        super(props);
    }
    onAdd(){
        const { id, price } = this.props.route.params.course;
        this.props.dispatch({
            type: 'ADD_CART',
            key : id,
            price: price,
        });
    }
    goScreen3(){
        this.props.dispatch({
            type: 'CHANGE_SCREEN',
            key: 'Screen3'
        });
        // this.props.navigation.navigate('Main')
        this.props.navigation.navigate('Menu');
        
    }
    render() {
        const {navigation } = this.props;
        const { course } = this.props.route.params;
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
                        <TouchableOpacity onPress={()=>this.goScreen3()}>
                            <Icon name="md-basket" style={{color: "#fff"}}/>
                        </TouchableOpacity>
                        {/* <TouchableOpacity 
                        onPress={()=>{
                            this.props.navigation.navigate('Router');
                            Alert.alert(this.props.screenOn);
                        }}
                        >
                            <Icon name="md-basket" style={{color: "#fff"}}/>
                        </TouchableOpacity> */}
                    </Right>
                </Header>
                <ScrollView>
                    <Content>
                        <Card >
                            <CardItem cardBody >
                                <ImageBackground source={course.image} style={{height: 220, width: null, flex: 1}}>
                                    <ImageBackground style={localStyles.imgBack}>
                                        <View style={{marginHorizontal: 4, }}>
                                            <Text style={{color: "#fff", fontSize: 20, fontWeight:"700"}}>{course.name}</Text>
                                            <Text style={{color: "#fff", fontSize: 16}}>{course.author}</Text>
                                            <Text style={{color: "#fff", fontSize: 14, color: "hotpink", fontStyle:"italic"}}>{course.price}.000 ₫</Text>
                                        </View>
                                    </ImageBackground>
                                </ImageBackground> 
                            </CardItem>
                            <CardItem cardBody>
                                <View style={{marginTop: 16, marginHorizontal: 4 }}>
                                    <Text style={{color: "#000", fontSize: 18}}>{course.beta}</Text>
                                    <Text>Giáo trình</Text>
                                </View>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
                <Fab
                style={{backgroundColor:"#5067FF"}}
                onPress = {() => this.onAdd()}
                >
                    <Icon name="md-add" />
                </Fab>
            </Container>
        )
    }
}
function mapStateToProps(state){
    return{ 
      screenOn: state.screenOn
    };
  }
export default connect(mapStateToProps)(EachCourses);
const localStyles = StyleSheet.create({
    imgBack: {
        flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", justifyContent:"flex-end"
    }
})