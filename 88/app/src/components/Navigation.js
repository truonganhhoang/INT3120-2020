import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Animated, StatusBar, TouchableNativeFeedback, ClippingRectangle } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { changeNavIcon } from '../actions/navbarActions';

const RotateAndChangeView = (props) => {
  const [ angle ] = useState(new Animated.Value(0));
  const [ v_opacity ] = useState(new Animated.Value(props.opacityValue[0]))

  useEffect(() => {
    console.log('refresh')
    Animated.parallel([
      Animated.timing(
        angle,
        {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        v_opacity,
        {
          toValue: props.opacityValue[1],
          duration: 300,
          useNativeDriver: true
        }
      )
    ]).start();
  }, []);

  return (
    <Animated.View style={{
      ...props.style,
      transform: [{
        rotate: angle.interpolate({
          inputRange: [0, 1],
          outputRange: [props.angleValue[0], props.angleValue[1]]
        })
      }],
      opacity: v_opacity
    }}>
      {props.children}
    </Animated.View>
  )
}

const Navigation = (props) => {
  const [angleValue, setAngleValue] = useState([['0deg', '180deg']]);
  const [opacityValue1, setOpacityValue1] = useState([1, 0]);
  const [opacityValue2, setOpacityValue2] = useState([0, 1]);

  const navbar = useSelector(state => state.navbar, shallowEqual);
  
  const dispatch = useDispatch();
  const changeIcon = () => {
    dispatch(changeNavIcon(!navbar.isArrow));
  }

  useEffect(() => {
    console.log('avbadf')
    if (navbar.isArrow) {
      setAngleValue(['0deg', '180deg']);
      setOpacityValue1([1, 0]);
      setOpacityValue2([0, 1]);
    } else {
      setAngleValue(['180deg', '360deg']);
      setOpacityValue1([0, 1]);
      setOpacityValue2([1, 0]);
    }
  });


  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.iconContainer}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .32)', true)}
            onPress={props.openDrawer}
          >
            <View style={{width: 25, height: 25 }}>
              <RotateAndChangeView style={styles.navIcon} angleValue={angleValue} opacityValue={opacityValue1} >
                <Icon name='menu' size={25} style={{color: '#fff'}} />
              </RotateAndChangeView>
              <RotateAndChangeView style={styles.navIcon} angleValue={angleValue} opacityValue={opacityValue2} >
                <Icon name='arrow-right' size={25} style={{color: '#fff'}} />
              </RotateAndChangeView>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.navHeader}>JavaScript Tutorial</Text>
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
    fontSize: 25,
    color: '#ffffff',
    fontWeight: '600',
  }
})

export default Navigation;