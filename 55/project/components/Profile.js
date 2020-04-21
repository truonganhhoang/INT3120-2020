import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Chiến Hà Nội!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function AcountScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function Acount1Screen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export function Profile(route, navigation) {
    return (
        <Tab.Navigator 
            initialRouteName="Settings"
            tabBarOptions={{
                showIcon: "true",
                scrollEnabled: true,
                pressColor: "green",
                activeTintColor: "white",
                inactiveTintColor: "gray",
                tabStyle: {
                    backgroundColor: "#66BB6A",
                },
                style: { },              
            }}

        >
            
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Acount" component={AcountScreen} />
            <Tab.Screen name="Acountmot" component={Acount1Screen} />
        </Tab.Navigator>
    );
}