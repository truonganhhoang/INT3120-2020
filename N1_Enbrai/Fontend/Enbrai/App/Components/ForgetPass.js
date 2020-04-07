import React, { Component , useState,  } from 'react';
import {View, Text,StatusBar, ToastAndroid, AsyncStorage} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';
const ForgetPass = props =>{
   const [email,setEmail] = useState('');
   const handleConfirm = async(email) => {
     // const auth = firebase.auth();
      //auth.sendPasswordResetEmail(email).then(() => {
       console.log(email)
       // Email sent.
     //  }).catch(() => {console.log('Có gì đó sai')})
   }
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
            <Text style = {{marginLeft: 30, fontSize: 20, color: '#fff'}}>Quên mật khẩu</Text>
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
          onChangeText = {email => setEmail(email)}
        />
        </View>
        <View style = {{flex: 5,marginTop: 40, flexDirection: 'column',alignItems: 'center'}}>
          <Button
            onPress = {handleConfirm(email)}
            title = 'Gửi'
            buttonStyle = {{backgroundColor: '#FFB74D',width: 300}}
          />
        </View>
      </View>
    );
  }

export default withNavigation(ForgetPass);