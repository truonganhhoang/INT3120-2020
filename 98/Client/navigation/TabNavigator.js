import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';

import Question from './navigator/Question';
import Home from './navigator/Home';
import TFS from './navigator/TFS';
import VideoHD from './navigator/VideoHD';
import Map from './navigator/Map';

const Tab = createBottomTabNavigator();


export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Trang chủ',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
                }}
            />
            <Tab.Screen
                name="Question"
                component={Question}
                options={{
                    title: 'Câu hỏi',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
                }}
            />
            <Tab.Screen name="TFS" component={TFS}
                options={{
                    title: 'Biển báo ',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-warning" />,
                }}
            />
            <Tab.Screen name="VideoHD" component={VideoHD}
                options={{
                    title: 'Video',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-film" />,
                }}
            />
            <Tab.Screen name="MapScreen" component={Map}
                options={{
                    title: 'Map',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-globe" />,
                }}
            />
        </Tab.Navigator>
    );
}