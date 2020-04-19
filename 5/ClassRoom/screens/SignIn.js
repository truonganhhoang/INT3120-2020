import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons/';

import {AuthContext} from '../Context';
import logo from '../assets/images/class-icon.png'

export default function signIn({navigation})  {
  const {signIn} = React.useContext(AuthContext);
  const [phone, setPhone] = React.useState();
  const [password, setPassword] = React.useState();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.appName}>Sign in to Classroom</Text>
      <View style={styles.form}>
        <Input
          placeholder='Số điện thoại'
          keyboardType={'numeric'}
          leftIcon={
            <Feather
              name='phone'
              size={24}
              color='grey'
              style={{marginRight: 15}}
            />
          }
          onChangeText={(phone) => setPhone(phone)}
        />
        <Input
          placeholder='Mật khẩu'
          secureTextEntry={true}
          leftIcon={
            <Feather
              name='lock'
              size={24}
              color='grey'
              style={{marginRight: 15}}
            />
          }
          onChangeText={(password) => setPassword(password)}
        />
        <View style={styles.buttonSignin}>
          <Button
            title="Sign In"
            type="solid"
            onPress={() => signIn(phone,password)}
          />
          <Button title="Sign up" type="clear" onPress={() => navigation.navigate('SignUp')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '80%',
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: '5%',
  },
  logo: {
    height: 120,
    width: 120,
  },
  buttonSignin: {
    alignSelf: 'stretch',
    paddingLeft: 60,
    paddingRight: 60,
  },
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#55CAED',
  }
});