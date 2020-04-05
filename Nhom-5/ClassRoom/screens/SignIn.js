import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons/';

import {AuthContext} from '../Context';

export default function signIn({navigation})  {
  const {signIn} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Feather name="users" size={100} color="#3498db" style={styles.logo}/>
      <Text style={styles.appName}>Classroom by N5</Text>
      <View style={styles.form}>
        <Input
          placeholder='Số điện thoại'
          leftIcon={
            <Feather
              name='phone'
              size={24}
              color='grey'
              style={{marginRight: 15}}
            />
          }
        />
        <Input
          placeholder='Mật khẩu'
          leftIcon={
            <Feather
              name='lock'
              size={24}
              color='grey'
              style={{marginRight: 15}}
            />
          }
        />
        <View style={styles.buttonSignin}>
          <Button
            title="Sign In"
            onPress={() => signIn()}
          />
          <Button title="Sign up" type="clear" />
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
    width: '70%',
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
  logo: {
    marginBottom: 0,
  },
  buttonSignin: {
    alignSelf: 'stretch',
    paddingLeft: 60,
    paddingRight: 60,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
  }
});