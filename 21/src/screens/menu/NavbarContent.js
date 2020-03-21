import React, { Component } from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
export default function CustomDrawerContent(props){
    return(
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
            label="Close drawer"
            onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
            label="Toggle drawer"
            onPress={() => props.navigation.toggleDrawer()}
        />
        </DrawerContentScrollView>
    )
}
