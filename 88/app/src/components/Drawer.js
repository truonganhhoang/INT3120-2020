import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';

const Drawer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <ImageBackground source={require('../assets/img/google-background.jpg')} style={styles.userBackground} resizeMode='cover' >
          <Image source={require('../assets/img/google-background.jpg')} resizeMode='cover' style={styles.userIcon} />
          <Text style={styles.userName}>Vũ Chức</Text>
          <View style={styles.userFooter}>
            <Text>vuchuc781999@gmail.com</Text>
            <Text>SIGN OUT</Text>
          </View>
        </ImageBackground>
      </View>
      {/* <View style={styles.featureContainer}>
        <Text>abcdefgh</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  userContainer: {
    height: 180,
  },
  userBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingHorizontal: 15
  },
  userIcon: {
    width: 70,
    height: 70,
    backgroundColor: 'blue',
    borderRadius: 40
  },
  userFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    marginTop: 4
  },
  userName: {
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 0.5
  },
  featureContainer: {
    backgroundColor: 'blue'
  }
});

export default Drawer;