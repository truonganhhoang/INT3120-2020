import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//
import TFSScreen from '../../screens/TFS/TFSScreen';
import TrafficSignList from '../../screens/TFS/TFSListScreen';
import DetailScreen from '../../screens/TFS/DetailScreen';

//
const Stack = createStackNavigator();

export default function TFS() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TFS"
                component={TFSScreen}
                options={{
                    title: 'Biển báo giao thông',
                }}
            />

            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    title: '',
                }}
            />

            <Stack.Screen
                name="TFSL"
                component={TrafficSignList}
                options={{
                    title: 'Danh sách',
                }}
            />

        </Stack.Navigator>
    );
}

