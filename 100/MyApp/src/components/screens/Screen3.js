import React, { Component } from 'react'
import { View, Text, ScrollView, Modal, TouchableOpacity, Alert, StyleSheet, TouchableHighlight } from 'react-native'
import Moikhoahoc from '../components/Moikhoahoc';
import { Header, Body, Title, Content, Container, Card, List } from 'native-base';
import { connect } from 'react-redux';
class Screen3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            onLogin: true,
            allPrice: 0,
        };
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
    onCheckCart = () =>{
        if (this.state.onLogin === true){
            this.setState({
                modalVisible: true
            });
        }
        else{
            return this.props.navigation.navigate('Login')
        }
    }
    allPrice = () =>{
        const { courses, myCart } = this.props;
        for(let i = 0; i< myCart.length; i++){
            for(let j = 0; j< courses.length; j++){
                if (myCart[i].key===courses[j].id){
                    this.setState({
                        allPrice: this.state.allPrice + courses[j].price
                    })
                }
            }
        }
    }
    render() {
        const { modalVisible } = this.state;
        const { navigation, courses, myCart } = this.props;
        const setColor = modalVisible? "#ddd" : "white"
        return (
            <Container style={{flex: 1, justifyContent: "space-evenly", backgroundColor: setColor}}>
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
                <TouchableOpacity onPress={() => this.onCheckCart()}>
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
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.moneyBox}>
                            <Text style={styles.modalText}>Tổng đơn hàng: </Text>
                            <Text>{this.allPrice()}.000 ₫</Text>
                        </View>
                        <View style={styles.moneyBox}>
                            <Text style={styles.modalText}>Khuyến mãi</Text>
                            <Text>{myCart[0].key}</Text>
                        </View>
                        <View style={styles.moneyBox}>
                            <Text style={styles.modalText}>Tổng thanh toán</Text>
                            <Text>{this.allPrice()}.000 ₫</Text>
                        </View>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                            this.setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Thanh toán</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                </Modal>
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
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      width: 300,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 1,
        height: 3
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    moneyBox:{
        width: 250,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    modalText: {
      marginBottom: 15,
    }
  });