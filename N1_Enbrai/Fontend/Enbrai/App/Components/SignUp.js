import React, { Component , useState, useEffect } from 'react';
import {View, Text,TextInput, Alert,Dimensions, StatusBar, ToastAndroid} from 'react-native';
import {Input, Icon, Button, Header} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';
const SignUp = props =>{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [confimPass,setConfimPass] = useState('');
    const handleSignUp = (email, pass, confirm) => {
      if(email =='' || pass==''||confirm ==''){
        ToastAndroid.showWithGravity(
          'Điền đầy đủ thông tin',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        )
      }
      else if (pass.length < 8 ) {
        ToastAndroid.showWithGravity(
          'Mật khẩu có ít nhất 8 kí tự',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        )
      }
      else if (pass != confirm){
        ToastAndroid.showWithGravity(
          'Mật khẩu không khớp',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        )
      } 
      else { 
      firebase
        .auth()
        .createUserWithEmailAndPassword(email,pass)
        .then(() =>{
          ToastAndroid.showWithGravity(
            'Đăng kí thành công.',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          )
          setTimeout(()=> props.navigation.navigate('HomeScreen'), 1000)
      }) 
        .catch(error => console.log(error))
    }}
    return (    
      <View style = {{flex : 1}}>
        <StatusBar backgroundColor='#0592D2' barStyle='light-content'></StatusBar>
        <View style = {{flex : 1, backgroundColor: '#0592D2', flexDirection: 'row', alignItems:'flex-end'}}>
          <View style = {{marginBottom: 15, marginLeft: 15, flexDirection: 'row'}}>
            <Icon
                name = "arrow-back"
                size = {25}
                color = '#fff'
                containerStyle ={{}}
                onPress = {()=>props.navigation.goBack()}
            />
            
            <Text style = {{marginLeft: 30, fontSize: 20, color: '#fff'}}> Đăng ký</Text>
            </View>
        </View>
        <View style = {{flex: 4,flexDirection: 'column',justifyContent:'flex-end'}}>
        <Input
          placeholder='Email'
          leftIcon={
            <Icon
              name='email'
              size={20}
              color='#E0E0E0'
            />
          }
          keyboardType = 'email-address'
          leftIconContainerStyle = {{marginLeft:0}}
          inputContainerStyle = {{width: '80%', marginLeft: '10%'}}
          onChangeText = {value => setEmail(value)}
        />
        <Input
          placeholder='Mật khẩu'
          leftIcon={
            <Icon
              name='lock'
              size={20}
              color='#E0E0E0'
            />
          }
          secureTextEntry
          leftIconContainerStyle = {{marginLeft:0}}
          inputContainerStyle = {{width:  '80%', marginTop: 10, marginLeft: '10%'}}
          onChangeText = {value => setPass(value)}
        />
        <Input
          placeholder='Nhập lại mật khẩu'
          leftIcon={
            <Icon
              name='lock'
              size={20}
              color='#E0E0E0'
            />
          }
          secureTextEntry
          leftIconContainerStyle = {{marginLeft:0}}
          inputContainerStyle = {{width:  '80%', marginTop: 10, marginLeft: '10%'}}
          onChangeText = {value => setConfimPass(value)}
        />
        </View>
        <View style = {{flex: 5,marginTop: 40, flexDirection: 'column',alignItems: 'center'}}>
          <Button
            title = 'Đăng ký'
            buttonStyle = {{backgroundColor: '#FFB74D',width: 300}}
            onPress={()=>{handleSignUp(email,pass,confimPass)}}
          />
          <Text style ={{marginTop: 10,marginBottom:10, color: '#9E9E9E'}}>--Hoặc--</Text>
          <Button
            title = 'Đăng nhập'
            type= 'clear'
            buttonStyle = {{width: 300}}
            onPress={()=>props.navigation.navigate('SignInScreen')}
          />
        </View>
      </View>
    );
  }

export default withNavigation( SignUp);