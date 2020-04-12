import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons/';

import logo from '../assets/images/class-icon.png'

export default function signUp({navigation})  {
  const [phone, setPhone] = React.useState();
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();
  const [school, setSchool] = React.useState();
  const [name, setName] = React.useState();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.appName}>Sign up to Classroom</Text>
      <View style={styles.form}>
        <Input
          placeholder='Số điện thoại'
          leftIcon={
            <Feather
              name='phone'
              size={20}
              color='grey'
              style={{marginRight: 15}}
            />
          }
          onChangeText={(phone) => setPhone(phone)}
        />
        <Input
          placeholder='Họ tên'
          leftIcon={
            <Feather
              name='user'
              size={20}
              color='grey'
              style={{marginRight: 15}}
            />
          }
          onChangeText={(name) => setName(name)}
        />
        <Input
          placeholder='Email'
          leftIcon={
            <Feather
              name='mail'
              size={20}
              color='grey'
              style={{marginRight: 15}}
            />
          }
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          placeholder='Trường'
          leftIcon={
            <Feather
              name='home'
              size={20}
              color='grey'
              style={{marginRight: 15}}
            />
          }
          onChangeText={(school) => setSchool(school)}
        />
        <Input
          placeholder='Mật khẩu'
          leftIcon={
            <Feather
              name='lock'
              size={20}
              color='grey'
              style={{marginRight: 15}}
            />
          }
          onChangeText={(password) => setPassword(password)}
        />
        <View style={styles.buttonSignin}>
          <Button
            title="Sign Up"
            onPress={() => signUp(phone,password, name, email, school)}
          />
          <Button title="Sign in" type="clear" onPress={() => navigation.navigate('SignIn')} />
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
    height: 400,
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