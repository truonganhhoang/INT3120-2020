import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Icon } from 'react-native-vector-icons/Feather';
import { TouchableNativeFeedback } from 'react-native';

const DrawerItem = (props) => {
  const { iconName, title } = props;

  return (
    <View>
      <Icon name={iconName} />
      <Text>{title}</Text>
    </View>
  );
}

/**
 * All contents of drawer.
 */
const Drawer = () => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback 
        background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .2)', false)}
      >
        <View style={styles.userContainer}>
          <ImageBackground source={require('../assets/img/google-background.jpg')} imageStyle={{ opacity: 0.7 }} style={styles.userBackground} resizeMode='cover' >
            <Image source={require('../assets/img/user_icon.png')} resizeMode='cover' style={styles.userIcon} />
            <Text style={styles.userName}>Vũ Chức</Text>
            <View style={styles.userFooter}>
              <Text style={styles.userEmail}>vuchuc781999@gmail.com</Text>
              <Text style={styles.signOut}>SIGN OUT</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableNativeFeedback>
      <View style={styles.featureContainer}>
        <Text>abcdefgh</Text>
      </View>
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
    paddingHorizontal: 15
  },
  userIcon: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: '#ff7777',
    marginBottom: 17
  },
  userFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    color: '#fff'
  },
  userName: {
    color: '#fff',
    // fontWeight: '700',
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
    marginTop: 10,
    flex: 1,
    backgroundColor: '#ffc5c5'
  }
});

export default Drawer;