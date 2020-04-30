import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert  } from 'react-native'
import auth from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.unsubscriber = null;
        this.state={
            isAuthenticated: false,
            email: '',
            password: '',
            user: null,
        }
    }
    onLogin(){
      auth().signInWithEmailAndPassword( this.state.email, this.state.password)
      .then(() => {
          Alert.alert(
            'Thong bao',
            'Dang nhap thanh cong',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                // { text: 'Quay lai dang nhap', onPress: () => this.props.navigation.goBack()},
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
          <View 
          style={{flex: 1, justifyContent:"center", alignItems:"center", backgroundColor: "#E1F5FE"}}
          >
            <Text style={{fontSize: 24, fontWeight: "bold"}}>Dang nhap</Text>
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
                <Text style={Styles.input}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center"}}
                onPress = {() => this.props.navigation.navigate('Signup')}
            ><Text style={Styles.input}>Đăng ký</Text></TouchableOpacity>
        </View>
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