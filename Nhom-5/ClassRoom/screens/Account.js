import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';

import {AuthContext} from '../Context';

export default function Account({navigation}) {
  const {signOut} = React.useContext(AuthContext);
  const user = {
    name: "Nguyen Hoang Tuyen"
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Avatar size={100} rounded title={getName(user.name).charAt(0)} style={styles.avatar} overlayContainerStyle={{backgroundColor: '#3498db'}}/>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <View style={styles.footer}>
        <Button  
          title="Sign out"
          type="clear"
          titleStyle={{
            color: '#e74c3c'
          }}
          onPress={() => signOut()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  footer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 3,
    marginLeft: -10,
  },
  userName: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#777',
    lineHeight: 24,
    textAlign: 'center',
  },
});

function getName(name) {
  var array = name.split(" ");
  return array[array.length - 1];
}
