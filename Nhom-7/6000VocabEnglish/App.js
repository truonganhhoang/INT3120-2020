import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';

const GLOBAL = require('./src/utils/Globals');

//create Stack
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Category" 
          component={CategoryScreen} 
          options={
            ({ route }) => ({ 
              title: route.params.categoryTitle,
              headerTitleStyle: {color: GLOBAL.COLOR.ORANGE, fontWeight: 'bold'},
              headerTitleAlign: 'center',
              // headerStyleInterpolator: {color: GLOBAL.COLOR.LIGHTBLUE}
            })
          }
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;