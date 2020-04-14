import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Main from './src/index';
import rootReducer from './src/reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
};

export default App;


/* import React, { useState, useRef } from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';

import PlatformTouchable from './src/utils/touchable';
import runTiming from './src/utils/animation';

const {
  Value,
  Clock,
  useCode,
  set,
  interpolate,
  sub
} = Animated;

const App = () => {
  const didMountRef = useRef(false);

  const [direction, setDirection] = useState(false);
  const [animation] = useState(new Value(0));

  const clock = new Clock();

  const rotate = interpolate(
    animation,{
      inputRange: [0, 1],
      outputRange: direction ?[0, Math.PI] : [2 * Math.PI, Math.PI]
    }
  )

  useCode(
    () => {
      if(didMountRef.current) {
        return set(animation, runTiming(clock, animation, direction ? 1 : 0, 1000))
      } else {
        didMountRef.current = true;
      }
    },
    [direction]
  )

  return (
    <>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <SafeAreaView style={styles.mainContainer}>
        <PlatformTouchable
          style={styles.iconContainer}
          onPress={() => setDirection(!direction)}
          rippleOverflow
        >
          <Animated.View style={[styles.iconLayer, { opacity: sub(1, animation) ,transform: [{ rotate }] }]}>
            <Icon name='menu' size={50} color='#fff' />
          </Animated.View>
          <Animated.View
            style={
              [styles.iconLayer, {
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: animation,
                transform: [{ rotate }]
              }]
            }
          >
            <Icon name='arrow-right' size={50} color='#fff' />
          </Animated.View>
        </PlatformTouchable>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bcd4'
  },
  iconContainer: {
    position: 'relative'
  },
  iconLayer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App; */