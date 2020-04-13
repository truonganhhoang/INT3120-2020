import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import { Feather } from '@expo/vector-icons/';
import classIcon from '../assets/images/class-icon.png';

export default function Class(props) {
  return(
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <View style={styles.avatar}>
        <Image source={classIcon} style={styles.icon}/>
      </View>
      <View style={styles.rightPart}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{props.name}</Text>
        </View>
        <View style={styles.code}>
          <Text style={styles.codeText}>Mã lớp: {props.id.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40,
    height: 60,
  },
  avatar: {
    height: 60,
    width: 60,
    alignItems:'center',
    justifyContent:'center',
  },
  avatarText: {
    fontSize: 25,
    color:  '#fff',
  },
  icon: {
    height: 70,
    width: 70,
  },
  rightPart: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomColor: '#555',
    borderBottomWidth: 0.5,
  },
  title: {
    width: 250,
    height: 30,
    justifyContent:'center',
    //backgroundColor: '#0f0',
  },
  titleText: {
    fontSize: 18,
    color: '#777',
    fontWeight: 'bold',
  },
  code: {
    width: 250,
    height: 25,
    //backgroundColor: '#00f',
  },
  codeText: {
    color: '#3498db',
  },
});