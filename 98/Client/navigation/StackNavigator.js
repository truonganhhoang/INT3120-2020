import * as React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Home/HomeScreen';
import LinksScreen from '../screens/Profile/LinksScreen';
import TFSScreen from '../screens/TFS/TFSScreen';
import DetailScreen from '../screens/TFS/DetailScreen';
import QuestionScreen from '../screens/Question/QuestionScreen';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function StackNavigator() {

  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <Stack.Screen
        name="Link"
        component={LinksScreen}
        options={{
          title: 'This link',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <Stack.Screen
        name="TFS"
        component={TFSScreen}
        options={{
          title: 'Biển báo giao thông',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
       <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Danh sách',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <Stack.Screen
        name="Question"
        component={QuestionScreen}
        options={{
          title: 'This link',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
           

    

    </Stack.Navigator>
  );
}

