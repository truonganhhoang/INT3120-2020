import React from 'react';
import { View, StyleSheet, Text, Animated, StatusBar, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, shallowEqual } from 'react-redux';

import useAnimation from '../utils/animationHook';

/**
 * Animation of icon
 * @param {Object} props
 * @property {boolean} direction - direction of icon 
 * @property {number[start, end]} opacityRange - range of opacity value  
 */
const RotateAndChangeView = (props) => {
  const { direction, opacityRange, children } = props;

  const animation = useAnimation({ doAnimation: direction, duration: 300 });

  return (
    <Animated.View style={{
      ...props.style,
      transform: [{
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: direction ? ['0deg', '180deg'] : ['360deg', '180deg']
        })
      }],
      opacity: animation.interpolate({
        inputRange: [0, 1],
        outputRange: opacityRange
      })
    }}>
      {children}
    </Animated.View>
  )
}

const Navigation = (props) => {
  const navbar = useSelector(state => state.navbar, shallowEqual);

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.iconContainer}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .1)', true)}
            onPress={props.openDrawer}
          >
            <View style={{width: 25, height: 25 }}>
              <RotateAndChangeView style={styles.navIcon} direction={navbar.isArrow} opacityRange={[1, 0]} duration={300} >
                <Icon name='menu' size={25} style={{color: '#fff'}} />
              </RotateAndChangeView>
              <RotateAndChangeView style={styles.navIcon} direction={navbar.isArrow} opacityRange={[0, 1]} duration={300} >
                <Icon name='arrow-right' size={25} style={{color: '#fff'}} />
              </RotateAndChangeView>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.navHeader}>{navbar.header}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#00BCD4'
  },
  navContainer: {
    flexDirection: 'row',
    height: 50
  },
  iconContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    position: 'absolute',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    justifyContent: 'center'
  },
  navHeader: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '600',
  }
})

export default Navigation;