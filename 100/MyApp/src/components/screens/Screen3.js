import React, { Component } from 'react'
import { View, Text, ScrollView, Modal, TouchableOpacity } from 'react-native'
import Moikhoahoc from '../components/Moikhoahoc';
import { Header, Body, Title, Content, Container, Card, List } from 'native-base';
import { connect } from 'react-redux';
class Screen3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false
        };
    }
    render() {
        const { navigation, courses, myCart } = this.props;
        return (
            <Container style={{flex: 1, justifyContent: "space-evenly"}}>
                <Header>
                    <Body>
                        <Title>Giỏ hàng</Title>
                    </Body>
                </Header>
                <Content scrollEnabled={false}>
                    <List>
                        {myCart.map( (item) => {
                            let course = courses.filter( (e)=>(e.id == item.key))
                            const DeleteCart = (item) => {
                                this.props.dispatch({
                                    type: 'DELETE_CART',
                                    payload: item
                                })
                            }
                            return(
                                <Moikhoahoc
                                GoEach={()=> navigation.navigate('EachCourses', {course: course[0]})}
                                OnDeCart = {() => DeleteCart(item)}
                                course = {course[0]}
                                key={item.id}
                            />
                            );
                        })}
                    </List>
                        
                    
                   
                </Content>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <View style={{
                        width: "100%",
                        height: 60,
                        backgroundColor: "#42A5F5",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text style={{color: "#212121", fontSize: 24, fontWeight: "600"}}>Thanh toán</Text>
                    </View>
                </TouchableOpacity>
            </Container>
        )
    }
}
function mapStateToProps(state){
    return{ 
        courses: state.courses,
        myCart: state.myCart,
    };
}
export default connect(mapStateToProps)(Screen3);