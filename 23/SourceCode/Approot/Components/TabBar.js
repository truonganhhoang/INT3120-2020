import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import TabNavigator from 'react-native-tab-navigator';

//Tab Views
import HomeScreen from './Views/HomeScreen'
import FavoriteScreen from './Views/FavoriteScreen'
import LookUpScreen from './Views/LookUpScreen'
import LearnScreen from './Views/LearnScreen'
import SettingsScreen from './Views/SettingsScreen'



export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image style={styles.icon} source={require('../assets/Image/book-inactive.png')} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/Image/book-active.png')} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {<HomeScreen />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'favorite'}
                    title="Favorite"
                    renderIcon={() => <Image style={styles.icon} source={require('../assets/Image/heart-inactive.png')} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/Image/heart-active.png')} />}
                    onPress={() => this.setState({ selectedTab: 'favorite' })}>
                    {<FavoriteScreen />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'look_up'}
                    title="Look up"
                    renderIcon={() => <Image style={styles.icon} source={require('../assets/Image/look-up-inactive.png')} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/Image/look-up-active.png')} />}
                    onPress={() => this.setState({ selectedTab: 'look_up' })}>
                    {<LookUpScreen />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'learn'}
                    title="Learn"
                    renderIcon={() => <Image style={styles.icon} source={require('../assets/Image/learn-inactive.png')} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/Image/learn-active.png')} />}
                    onPress={() => this.setState({ selectedTab: 'learn' })}>
                    {<LearnScreen />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'settings'}
                    title="Settings"
                    renderIcon={() => <Image style={styles.icon} source={require('../assets/Image/settings-inactive.png')} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/Image/settings-active.png')} />}
                    onPress={() => this.setState({ selectedTab: 'settings' })}>
                    {<SettingsScreen />}
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

var styles = StyleSheet.create({
    icon:{
        width: 24,
        height: 24
    }
})