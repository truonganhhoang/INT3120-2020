import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import HomeSetting from './HomeSetting'
import HomeStudy from './HomeStudy'
import HomeTabBar from './HomeTabBar'
import Account from './Account'

const Home = ( props ) => {
    useEffect(() => {
        return () => {
        }
    }, [props])
    return (
        <View style={{ flex: 1 }}>
            <ScrollableTabView
                tabBarPosition='bottom'
                tabBarTextStyle={{ fontSize: 20 }}
                initialPage={1}
                renderTabBar={() => <HomeTabBar />}
            >
                <Account />
                <HomeStudy />
                <HomeSetting />
            </ScrollableTabView>
        </View>
    );
}

export default Home;