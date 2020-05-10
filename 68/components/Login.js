import React from 'react';
import {View,Text, Button, StyleSheet, Image,  Dimensions}from 'react-native';
import kanji from '../assets/kanji.png'

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;
export default function Login(props) {
    const {onPress} = props;
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
         <View style={styles.button} >
         <Button onPress={onPress}
            title="Tiếp tục đăng nhập bằng Facebook"
            color="#4267b2"
            />
         </View>
         <View style={styles.button} >
         <Button onPress={onPress}
            title="Tiếp tục đăng nhập bằng Google"
            color="#e73232"
            />
         </View>
         
         
        </View>
    )
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
    fontWeight: "900"
  }, 
  logo: {
    marginLeft:screen(20)
  },
  logoKanji: {
      width: screen(60),
      height: screen(60)
  },
  button: {
    marginTop: screen(5),
    width: screen(80),
    marginLeft: screen(10),
  }

});
