import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import { NavigationContainer } from '@react-navigation/native';
import Search from '../screens/Search';
import MyCourses from '../screens/MyCourses';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import Screen1 from '../screens/Screen1';
import Login from '../rnfirebase/Login';
import Signup from '../rnfirebase/Signup';
import FilterCourses from '../screens/FilterCourses';
import Course from '../components/Course';
import EachCourses from '../screens/EachCourses';
import Author from '../screens/Author';
import OutLog from '../components/OutLog';
import User from '../components/User';
import OldUi from '../screens/OldUi';
import FooterScreen from '../components/Footer';

const Stack = createStackNavigator();
export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: ()=> null
                  }}
            >
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="Screen3" component={Screen3} />
                <Stack.Screen name="Screen4" component={Screen4} />
                <Stack.Screen name="Screen5" component={Screen5} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="MyCourses" component={MyCourses} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="FilterCourses" component={FilterCourses} />
                <Stack.Screen name="Course" component={Course} />
                <Stack.Screen name="Author" component={Author} />
                <Stack.Screen name="EachCourses" component={EachCourses} />
                <Stack.Screen name="OutLog" component={OutLog} />
                <Stack.Screen name="User" component={User} />
                <Stack.Screen name="OldUi" component={OldUi} />
                <Stack.Screen name="FooterScreen" component={FooterScreen} />
                {/* <Stack.Screen name="Router" component={Router} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
