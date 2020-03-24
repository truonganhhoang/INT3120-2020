import React, { Component } from 'react';
import {View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import HomeSetting from './HomeSetting'
import HomeStudy from './HomeStudy'
import HomeTabBar from './HomeTabBar'
import Account from './Account'

class Home extends Component {

    render() {
        return (
            <View style = {{flex:1}}>
                <ScrollableTabView
                    tabBarPosition = 'bottom'
                    tabBarTextStyle = {{fontSize: 20}}
                    initialPage={1}
                    renderTabBar={() => <HomeTabBar />}
                >
                    <Account/>
                    <HomeStudy/>
                    <HomeSetting/>
                </ScrollableTabView>
            </View>
        );
    }
}

export default Home;