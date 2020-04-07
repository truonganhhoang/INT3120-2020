import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, DrawerLayoutAndroid } from 'react-native';

import Navigation from './components/Navigation';
import Drawer from './components/Drawer'

const Main = () => {
  const drawer = useRef(null);

  const openDrawer = () => {
    drawer.current.openDrawer();
  }

  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      <SafeAreaView style={styles.mainContainer}>
        <DrawerLayoutAndroid
          drawerWidth={280}
          drawerBackgroundColor='#ddd'
          renderNavigationView={Drawer}
          ref={drawer}
        >
          <Navigation openDrawer={openDrawer}/>
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