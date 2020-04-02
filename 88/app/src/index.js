import React, { useRef, useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, DrawerLayoutAndroid } from 'react-native';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import { openDrawer } from './actions/drawer'

/**
 * Contains all components of this application
 */
const Main = () => {
  const drawer = useRef(null);
  const drawerState = useSelector(state => state.drawer, shallowEqual);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    drawerState.isOpen ? drawer.current.openDrawer() : drawer.current.closeDrawer();
  }, [drawerState.isOpen]);

  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      <SafeAreaView style={styles.mainContainer}>
        <DrawerLayoutAndroid
          drawerWidth={280}
          drawerBackgroundColor='#ddd'
          renderNavigationView={() => <Drawer/>}
          ref={drawer}
          onDrawerOpen={() => dispatch(openDrawer(true))}
          onDrawerClose={() => dispatch(openDrawer(false))}
        >
          <Navigation />
        </DrawerLayoutAndroid>
      </SafeAreaView>
    </> 
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
})

export default Main;