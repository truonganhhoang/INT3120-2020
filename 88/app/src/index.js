import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

import Navigation from './components/Navigation';
import Drawer from './components/Drawer'

const Main = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <DrawerLayout
        drawerWidth={280}
        drawerPosition={DrawerLayout.positions.Left}
        drawerType='front'
        drawerBackgroundColor='#ddd'
        renderNavigationView={Drawer}>
        <Navigation/>
      </DrawerLayout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
})

export default Main;