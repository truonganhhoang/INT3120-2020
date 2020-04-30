import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import { NavigationContainer } from '@react-navigation/native';
import Details1 from '../screens/Details1';
import Search from '../screens/Search';
import MyCourses from '../screens/MyCourses';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} 
                options={{
                header: ()=> null
                }}/>
                <Stack.Screen name="Details1" component={Details1} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="MyCourses" component={MyCourses} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
