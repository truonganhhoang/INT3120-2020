import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';

const Drawer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <ImageBackground source={require('../assets/img/google-background.jpg')} style={styles.userBackground} resizeMode='cover' >
          <Text style={styles.userName}>Vũ Chức</Text>
          <View style={styles.userFooter}>
            <Text style={styles.userEmail}>vuchuc781999@gmail.com</Text>
            <Text style={styles.signOut}>SIGN OUT</Text>
          </View>
        </ImageBackground>
        <Image source={require('../assets/img/user_icon.png')} resizeMode='cover' style={styles.userIcon} />
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
    backgroundColor: '#D3D3D3'
  },
  userBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingHorizontal: 15,
    opacity: 0.8
  },
  userIcon: {
    position: 'absolute',
    width: 65,
    height: 65,
    borderRadius: 40,
    marginTop: 40,
    marginLeft: 15,
    backgroundColor: '#ff7777'
  },
  userFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    color: '#fff'
  },
  userName: {
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 0.5
  },
  userEmail: {
    color: '#fff',
  },
  signOut: {
    color: '#fff',
    fontWeight: '700'
  },
  featureContainer: {
    backgroundColor: 'blue'
  }
});

export default Drawer;