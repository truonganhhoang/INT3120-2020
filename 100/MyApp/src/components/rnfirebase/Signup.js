import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert  } from 'react-native'
import auth from '@react-native-firebase/auth';
import { Container, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
export default class Signup extends Component {
    constructor(props) {
        super(props);
        // this.unsubscriber = null;
        this.state={
            isAuthenticated: false,
            email: '',
            password: '',
        }
    }
    onLogin(){
      auth().createUserWithEmailAndPassword( this.state.email, this.state.password)
      .then(() => {
          Alert.alert(
            'Thong bao',
            'Dang ky thanh cong',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
        );
        this.setState({
            email: '',
            password: ''
        })
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
    }
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()} >
                    <Icon name='arrow-back' size={32} />
                    </Button>
                </Left>
                <Body>
                    <Title>Đăng ký</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen3')} >
                            <Text style={{fontSize: 16, color: "#fff"}}>Cancel</Text>
                        </TouchableOpacity>
                    </Button>
                </Right>  
                </Header>
                <TextInput
                style={Styles.input}
                autoCapitalize='none'
                onChangeText={(email) => this.setState({email})}
                value={this.state.email} placeholder="Nhap email"
                />
                <TextInput
                style={Styles.input}
                autoCapitalize='none'
                onChangeText={(password) => this.setState({password})}
                value={this.state.password} placeholder="Nhap mat khau"
                secureTextEntry={true}
                />
                <TouchableOpacity style={{alignItems:"center"}}
                onPress={()=> (this.onLogin())}
                >
                    <Text style={Styles.input}> Đăng ký </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center"}}
                    onPress = {() => this.props.navigation.navigate('Login')}
                >
                    <Text style={Styles.input}>Quay ve dang nhap</Text>
                </TouchableOpacity>
            </Container>
        )
    }
}

const Styles = StyleSheet.create({
    input:{
        width: 300, padding: 20, margin: 10, fontSize: 24, fontWeight: "800", borderRadius: 8,
        backgroundColor: "#0288B1",
        color: "white"
    }
    
})