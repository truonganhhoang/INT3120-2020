import React, { Component , useState, useEffect } from 'react';
import {View, Text,  Button,TextInput, Alert} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';
const SignIn = props =>{
    const [email,setEmail] = useState(0);
    const [pass,setPass] = useState(0);
    const handleSignIn = (email, pass) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email,pass)
        .then(() => {props.navigation.navigate('HomeScreen')
      }) 
        .catch(error => console.log(error))
    }
    return (    
      <View style = {{flex : 1}}>
        <View style = {{flex : 3}}>
        <Text style = {{alignSelf :"center"}}>Embrai</Text>
        </View>
        <View style = {{flex: 1}}>
        <TextInput onChangeText = {email => setEmail(email)} placeholder = "Email"></TextInput>
        <TextInput onChangeText = {pass => setPass(pass)} placeholder = "Pass"></TextInput>
        </View>
        <View style = {{flex : 3}}>
         <View>
        <Button onPress = {() => {handleSignIn(email,pass)}} title = "Đăng nhập"></Button>
        </View> 
        </View>
      </View>
    );
  }

export default withNavigation(SignIn);