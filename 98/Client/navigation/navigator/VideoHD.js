import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import DetailVideo from '../../screens/VideoHD/DetailVideo';
import VideoListScreen from '../../screens/VideoHD/VListScreen';


const Stack = createStackNavigator();


export default function VideoHD() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="VideoHD"
                component={VideoListScreen}
                options={{
                    title: 'Video hướng dẫn',
                }}
            />
            <Stack.Screen
                name="DetailVideo"
                component={DetailVideo}
                options={{
                    title: 'Video',
                }}
            />

        </Stack.Navigator>
    );
}

