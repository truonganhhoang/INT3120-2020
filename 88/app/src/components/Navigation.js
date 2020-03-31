import React, { useState } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from '../utils/StatusBar';

const ReverseIcon = () => {
  const [ arrow, isArrow ] = useState(false);

  return (
    <Animated.View>
      
    </Animated.View>
  )
}

const Navigation = () => {
  return (
    <View style={styles.navContainer}>
      <View>
        <Icon name='navicon' size={20} style={styles.navIcon} />
        <Icon name='arrow-right' size={20} style={[styles.navIcon, styles.arrow]} />
      </View>
      <Text style={styles.navHeader}>JavaScript Tutorial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    backgroundColor: '#00BCD4',
    alignItems: 'flex-end',
    paddingTop: getStatusBarHeight(),
    paddingLeft: 50
  },
  navIcon: {
    position: 'absolute',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: 15,
    height: 50,
    width: 50,
    marginTop: -50,
    marginLeft: -50,
  },
  arrow: {
    opacity: 0
  },
  navHeader: {
    flex: 1,
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    height: 50,
    paddingTop: 11,
    paddingLeft: 1
  }
})

export default Navigation;