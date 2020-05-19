import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import {useSelector, shallowEqual} from 'react-redux';

import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import HomeTabView from './components/HomeTabView';

/**
 * Contains all components of this application
 */
const Main = () => {
  const drawer = useRef(null);

  const currentPage = useSelector((state) => state.main.page, shallowEqual);

  const openDrawer = () => {
    drawer.current.openDrawer();
  };

  const closeDrawer = () => {
    drawer.current.closeDrawer();
  };

  const getMainView = (page) => {
    switch (page) {
      case 'Home':
        return <HomeTabView />;
      default:
        return <View style={styles.mainContainer} />;
    }
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView style={styles.mainContainer}>
        <DrawerLayout
          drawerWidth={280}
          drawerType="front"
          drawerBackgroundColor="#ddd"
          renderNavigationView={() => <Drawer closeDrawer={closeDrawer} />}
          ref={drawer}>
          <Navigation openDrawer={openDrawer} />
          {getMainView(currentPage)}
        </DrawerLayout>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Main;

