import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ListComponent from './screens/ListComponent';
import ListTrafficSigns from './screens/ListTrafficSigns';
import ListTopicExam from './screens/ListTopicExam';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name={"Home"} component={Home}
                />
                <Stack.Screen name={"ListComponent"} component={ListComponent}
                />
                <Stack.Screen name= {"ListTrafficSigns"} component={ListTrafficSigns} />
                <Stack.Screen name= {"ListTopicExam"} component={ListTopicExam} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};

export default AuthNavigator;