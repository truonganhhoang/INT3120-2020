/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
export default function DrawerComponent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headercontainer}>
        <ImageBackground
          source={require('../images/lolo.png')}
          style={{width: 280, height: 120, marginTop: -5}}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headercontainer: {
    height: 100,
    marginBottom: 30,
  },
  screencontainer: {
    paddingTop: 20,
    width: '100%',
  },
});
