import React, { Component , useState, useEffect } from 'react';
import {View, Text,TextInput, Alert} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';
const SignUp = props =>{
    const [email,setEmail] = useState(0);
    const [pass,setPass] = useState(0);
    const handleSignUp = (email, pass) => {
      if (pass.length < 6 ) Alert.alert('Mật khẩu quá ngắn')
      else if (email.length === 0) Alert.alert('Email không hợp lệ')
      else { 
      firebase
        .auth()
        .createUserWithEmailAndPassword(email,pass)
        .then(() =>{
                Alert.alert("Đăng kí thành công")
                props.navigation.navigate('HomeScreen')
      }) 
        .catch(error => console.log(error))
    }}
    return (    
      <View style = {{flex : 1}}>
        <View style = {{flex : 3}}>
        <Text style = {{alignSelf :"center"}}>Embrai</Text>
        </View>
        <View style = {{flex: 1}}>
        <TextInput style = {{width :'90%', marginLeft : '5%', borderBottom : '1px solid black'}} onChangeText = {email => setEmail(email)} placeholder = "Email"></TextInput>
        <TextInput style = {{width :'90%', marginLeft : '5%'}} onChangeText = {pass => setPass(pass)} placeholder = "Pass"></TextInput>
        </View>
        <View style = {{flex : 3}}>
        <Button
            buttonStyle = {{height : 30, marginTop : 10, width : '90%', marginLeft : '5%', marginBottom : 20}}
            onPress = {()=>{handleSignUp(email,pass)}} 
            title = "Đăng ký" ></Button>
        <Text style = {{textAlign: "center"}}>-hoặc-</Text>
        <Button
            buttonStyle = {{width : 200, marginLeft : 100, marginTop : 10, backgroundColor : 'none'}}  
            onPress = {()=> {props.navigation.navigate('SignInScreen')}} 
            title = "Đăng nhập"></Button>
        </View>
      </View>
    );
  }

export default withNavigation( SignUp);