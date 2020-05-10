import 'react-native-gesture-handler';
import React, {Suspense} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Spinner, } from 'native-base';

const Home = React.lazy(() => import('./screens/Home'));

const ListComponent= React.lazy(() => import('./screens/ListComponent'));
const ListTrafficSigns= React.lazy(() => import('./screens/ListTrafficSigns'));
const ListTopicExam= React.lazy(() => import('./screens/ListTopicExam'));
const initExam = React.lazy(()=> import('./screens/initExam'));
const TipRemember = React.lazy(()=> import('./screens/TipRemember'));

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Suspense fallback={<Spinner style={{flex: 1}}/>}>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name={"Home"} component={Home}/>
                <Stack.Screen name={"ListComponent"} component={ListComponent}/>
                <Stack.Screen name= {"ListTrafficSigns"} component={ListTrafficSigns} />
                <Stack.Screen name= {"ListTopicExam"} component={ListTopicExam} />
                <Stack.Screen name={"initExam"} component={initExam} />
                <Stack.Screen name={"TipRemember"} component={TipRemember} />
            </Stack.Navigator>
            </Suspense>
        </NavigationContainer>
        
    );
};

export default AuthNavigator;