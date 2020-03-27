import React, { Component, useState, useEffect } from 'react';
import {View, Text, KeyboardAvoidingView, Button,TextInput} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';
const SignIn = props =>{
    const [email,setEmail] = useState(0);
    const [pass,setPass] = useState(0);
    const handleSignUp = (email, pass) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email,pass)
        .then(() => props.navigation.navigate('HomeScreen')) 
        .catch(error => this.setState({ errorMessage: error.message }))
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
        <Button onPress = {()=>{handleSignUp(email,pass)}} title = "Đăng nhập"></Button>
        </View>
      </View>
    );
  }

export default withNavigation( SignIn);