import React, { Component } from 'react'
import { View, Text, ScrollView, Modal, TouchableOpacity } from 'react-native'
import Moikhoahoc from '../components/Moikhoahoc';
import { Header, Body, Title, Content, Container, Card, List } from 'native-base';
import FooterScreen from '../components/Footer';
export default class Screen3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false
        };
    }
    // setModalVisible = (visible) => {
    //     this.setState({ modalVisible: visible });
    // }
    render() {
        const {navigation} = this.props;
        return (
            <Container style={{flex: 1, justifyContent: "space-evenly"}}>
                <Header>
                    <Body>
                        <Title>Giỏ hàng</Title>
                    </Body>
                </Header>
                <Content scrollEnabled={false}>
                    <List>
                        <Moikhoahoc />
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
                {/* <FooterScreen 
                active3={true}
                Go3={()=> navigation.navigate('Screen3')}
                Go1={()=> navigation.navigate('Screen1')}
                Go2={()=> navigation.navigate('Screen2')}
                Go4={()=> navigation.navigate('Screen4')}
                Go5={()=> navigation.navigate('Screen5')}
                /> */}
            </Container>
        )
    }
}
