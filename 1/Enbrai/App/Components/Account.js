import React, {Component,useState, useEffect} from 'react';
import {View, Text, Dimensions,Á} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import firebase from 'react-native-firebase'
const Account = props => {
    const maxWidth = Dimensions.get('window').width;
    const [login, setLogin] = useState()
    useEffect(() => {
      setLogin(props.login)
      console.log(props.login)
      return () => {
        
      }
    }, [props.login])
    if(login!=false){
      return(
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Button
            buttonStyle={{height:50, borderRadius: 25,backgroundColor:'#FFB74D'}}
            title="Đăng xuất"
            titleStyle = {{fontSize: 20, marginHorizontal:20}}
            onPress={() => {
              firebase
              .auth()
              .signOut()
              .then(() => {
                props.navigation.navigate('HomeScreen');
              })
              .catch(error => console.log(error))
              
            }}></Button>
          </View>
      )
    }else {
    return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="account-circle"
            size={40}
            color="#BDBDBD"
            containerStyle={{}}
            onPress={() => props.navigation.goBack()}
          />
        </View>
      </View>
      <View style={{flex: 9, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', color: '#9E9E9E', fontSize:16}}>
          Tạo một tài khoản để bảo vệ dữ liệu của bạn
        </Text>
        <Button
          containerStyle={{marginTop: maxWidth*0.1, width: '50%'}}
          buttonStyle={{alignContent: 'center', height:50, borderRadius: 25,backgroundColor:'#0592D2'}}
          title="Tạo một tài khoản"
          onPress={() => {
            props.navigation.navigate('SignUpScreen');
          }}></Button>
      </View>
    </View>
  );
  }
};
export default withNavigation(Account);
