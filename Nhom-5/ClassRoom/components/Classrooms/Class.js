import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons/';

export default function Class(props) {
  return(
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <View style={styles.avatar}>
        <Feather
          name="calendar"
          color="#3498db"
          size={50}
        />
      </View>
      <View style={styles.leftPart}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Toán 1 (Thứ 2, tiết 1-3)</Text>
        </View>
        <View style={styles.code}>
          <Text style={styles.codeText}>ABC123</Text>
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
  leftPart: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    width: 260,
    height: 25,
    justifyContent:'center',
    //backgroundColor: '#0f0',
  },
  titleText: {
    fontSize: 18,
    color: '#777',
    fontWeight: 'bold',
  },
  code: {
    width: 260,
    height: 25,
    //backgroundColor: '#00f',
  },
  codeText: {
    color: '#3498db',
  },
});