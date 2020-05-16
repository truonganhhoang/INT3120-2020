/* eslint-disable no-mixed-operators */
import React from 'react';
import {
  View, Text, StyleSheet, Image, Dimensions
} from 'react-native';
import kanji from '../assets/kanji.png';

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;
export default function Login(props) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          Chào mừng bạn đến với
        </Text>
        <Text style={styles.titleText}>
          Kanji45
        </Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.logoKanji}
          source={kanji}
        />
      </View>
      {
        props.children
      }
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    marginBottom: screen(20),
    marginTop: screen(5),
  },
  titleText: {
    fontSize: 24,
    color: '#006265',
    textAlign: 'center',
    fontWeight: '900'
  },
  logo: {
    marginLeft: screen(20)
  },
  logoKanji: {
    width: screen(60),
    height: screen(60)
  },
});
