import * as React from 'react';
import { StyleSheet, Image, View, ActivityIndicator, Text} from 'react-native';

import logo from '../assets/images/class-icon.png'

export default function signIn({navigation})  {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <ActivityIndicator size={80} color="#55CAED" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    marginBottom: '20%',
    height: 150,
    width: 150,
  }
});