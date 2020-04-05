import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TabNavigator from 'react-native-tab-navigator';

//Tab Views
import HomeScreen from './Views/HomeScreen'
import FavoriteScreen from './Views/FavoriteScreen'
import LookUpScreen from './Views/LookUpScreen'
import LearnScreen from './Views/LearnScreen'
import SettingsScreen from './Views/SettingsScreen'

export default class TabBar extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab: 'home'
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {<HomeScreen />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'favorite'}
                    title="Favorite"
                    onPress={() => this.setState({ selectedTab: 'favorite' })}>
                    {<View><Text>favorite</Text></View>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'look_up'}
                    title="Look up"
                    onPress={() => this.setState({ selectedTab: 'look_up' })}>
                    <View style={{flex: 1, backgroundColor: "pink"}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'learn'}
                    title="Learn"
                    onPress={() => this.setState({ selectedTab: 'learn' })}>
                    <View style={{flex: 1, backgroundColor: "white"}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'settings'}
                    title="Settings"
                    onPress={() => this.setState({ selectedTab: 'settings' })}>
                    <View style={{flex: 1, backgroundColor: "black"}}></View>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

var styles = StyleSheet.create({

})