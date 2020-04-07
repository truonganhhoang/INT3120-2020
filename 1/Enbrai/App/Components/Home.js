import React, { useState, useEffect } from 'react';
import { View, AsyncStorage,StatusBar } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import HomeSetting from './HomeSetting'
import HomeStudy from './HomeStudy'
import HomeTabBar from './HomeTabBar'
import Account from './Account'
import firebase from 'react-native-firebase'
import SplashScreen from 'react-native-splash-screen'
const Home = ()=> {
    useEffect(()=>{
        SplashScreen.hide();
        return()=>{}
    },[])
        var user = firebase.auth().currentUser;
        return (
            <View style={{ flex: 1 }}>
                 <StatusBar backgroundColor='#0592D2' barStyle='light-content'></StatusBar>
                <ScrollableTabView
                    tabBarPosition='bottom'
                    tabBarTextStyle={{ fontSize: 20 }}
                    initialPage={1}
                    renderTabBar={() => <HomeTabBar />}
                >
                    <Account login ={user?true:false}/>
                    <HomeStudy/>
                    <HomeSetting />
                </ScrollableTabView>
            </View>
        );
}

export default Home;