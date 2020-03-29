import React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from '../utils/StatusBar';

const ReverseIcon = () => {
  return (
    <Animated.View>
      
    </Animated.View>
  )
}

const Navigation = () => {
  return (
    <View style={styles.navContainer}>
      <Icon name='navicon' size={20} style={styles.navIcon} />
      <Text style={styles.navHeader}>JavaScript Tutorial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    backgroundColor: '#00BCD4',
    alignItems: 'flex-end',
    paddingTop: getStatusBarHeight()
  },
  navIcon: {
    flex: 1,
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: 15,
    height: 50
  }, 
  navHeader: {
    flex: 6,
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    height: 50,
    paddingTop: 11
  }
})

export default Navigation;