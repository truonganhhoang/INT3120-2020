import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from '../utils/StatusBar';

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
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '600',
    height: 50,
    paddingTop: 10,
    letterSpacing: 1
  }
})

export default Navigation;