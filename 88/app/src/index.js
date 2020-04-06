import React, { useRef, useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, DrawerLayoutAndroid } from 'react-native';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import { openDrawer } from './actions/drawer';

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
        <DrawerLayout
          drawerWidth={280}
          drawerType='front'
          drawerBackgroundColor='#ddd'
          renderNavigationView={() => <Drawer/>}
          ref={drawer}
          onDrawerOpen={() => dispatch(openDrawer(true))}
          onDrawerClose={() => dispatch(openDrawer(false))}
        >
          <Navigation />
        </DrawerLayout>
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