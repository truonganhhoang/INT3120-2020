import React, { Component , useState, useEffect } from 'react';
import {View, Text,TextInput, Alert,Dimensions, StatusBar, ToastAndroid, AsyncStorage} from 'react-native';
import {Input, Icon, Button, Header} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';
const UpdatePass = props =>{
   const [newpass,setNewpass] = useState('');
   const [confirmpass,setConfirmpass] = useState('');
   const handleConfirm = (pass,confirmpass) => {
        if (pass === confirmpass) {
          ToastAndroid.CENTER('Thay đổi mật khẩu thành công')
          props.navigation.navigate('HomeScreen')}
        else ToastAndroid.CENTER('Mật khẩu xác nhận chưa đúng!')
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
            <Text style = {{marginLeft: 30, fontSize: 20, color: '#fff'}}>Thay đổi mật khẩu</Text>
            </View>
        </View>
        <View style = {{flex: 4,flexDirection: 'column',justifyContent:'flex-end'}}>
        <Input
          placeholder='Mật khẩu mới'
          leftIcon={
            <Icon
              name='lock'
              size={20}
              color='#E0E0E0'
            />
          }
          leftIconContainerStyle = {{marginLeft:0}}
          inputContainerStyle = {{width: '80%', marginLeft: '10%'}}
          onChangeText = {value => setNewpass(value)}
        />
        <Input
          placeholder='Xác nhận mật khẩu'
          leftIcon={
            <Icon
              name='lock'
              size={20}
              color='#E0E0E0'
            />
          }
          secureTextEntry
          leftIconContainerStyle = {{marginLeft:0}}
          inputContainerStyle = {{width:'80%', marginTop: 10, marginLeft: '10%'}}
          onChangeText = {value => setConfirmpass(value)}
        />
        </View>
        <View style = {{flex: 5,marginTop: 40, flexDirection: 'column',alignItems: 'center'}}>
          <Button
            title = 'Xác nhận'
            type= 'clear'
            buttonStyle = {{width: 300}}
            onPress = {handleConfirm(pass,confirmpass)}
          />
        </View>
      </View>
    );
  }

export default withNavigation(UpdatePass);