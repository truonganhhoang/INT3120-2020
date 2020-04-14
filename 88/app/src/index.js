import React, { useRef, useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, DrawerLayoutAndroid } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import HomeTabView from './components/HomeTabView';

/**
 * Contains all components of this application
 */
const Main = () => {
  const drawer = useRef(null);

  const openDrawer = () => {
    drawer.current.openDrawer();
  }
  
  const closeDrawer = () => {
    drawer.current.closeDrawer();
  }

  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      <SafeAreaView style={styles.mainContainer}>
        <DrawerLayout
          drawerWidth={280}
          drawerType='front'
          drawerBackgroundColor='#ddd'
          renderNavigationView={() => <Drawer closeDrawer={closeDrawer}/>}
          ref={drawer}
        >
          <Navigation openDrawer={openDrawer}/>
          <HomeTabView/>
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