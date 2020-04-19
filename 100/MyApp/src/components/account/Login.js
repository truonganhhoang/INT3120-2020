import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { firebaseApp } from '../../firebaseconfig';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }
    Dangnhap(){
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            Alert.alert(
                'Thong bao',
                'Dang nhap thanh cong',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    { text: 'Ok', onPress: () => this.props.navigation.navigate('Home')},
                ],
            );
            this.setState({
                email: '',
                password: ''
            })
        })
        .catch(function(error) {
            Alert.alert(
                'Thong bao',
                'Dang nhap That bai',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    { text: 'Ok'},
                ],
            );
          });
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize: 24, fontWeight: "bold"}}>Dang nhap</Text>
            <TextInput
            style={Styles.input}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email} placeholder="Nhap email"
            />
            <TextInput
            style={Styles.input}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password} placeholder="Nhap mat khau"
            secureTextEntry={true}
            />
            <TouchableOpacity style={{alignItems:"center"}}
            onPress={()=> (this.Dangnhap())}
            >
                <Text style={Styles.input}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center"}}
                onPress = {() => this.props.navigation.navigate('Signup')}
            ><Text style={Styles.input}>Sign Up</Text></TouchableOpacity>
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