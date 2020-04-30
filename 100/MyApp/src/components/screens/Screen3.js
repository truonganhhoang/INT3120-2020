import React, { Component } from 'react'
import { View, Text, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { Styles } from '../../styles'
import Moikhoahoc from '../components/Moikhoahoc';
import { Header, Body, Title, Content, Container } from 'native-base';
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
        return (
            <Container style={{flex: 1, justifyContent: "space-evenly"}}>
                <Header>
                    <Body>
                        <Title>Giỏ hàng</Title>
                    </Body>
                </Header>
                <Content scrollEnabled={false}>
                    {/* <ScrollView > */}
                        <Moikhoahoc />
                    {/* </ScrollView> */}
                   
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
                {/* <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modalVisible}
                >
                    <View style={{flex:1}}>
                        <SignModal />
                    </View>
                    
                </Modal> */}
            </Container>
        )
    }
}
