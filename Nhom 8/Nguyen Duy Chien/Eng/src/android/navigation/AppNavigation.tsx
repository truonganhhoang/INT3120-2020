import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';

import { FavoriteScreen } from '../screens/FavoriteScreen';
import { SettingScreen } from '../screens/SettingScreen'; 
import { StartScreen } from '../screens/StartScreen'; 
import { WordGroupScreen } from '../screens/WordGroupScreen'; 

const Stack = createStackNavigator(); 

function MyApp() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="StartScreen" component={StartScreen}/>
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
        <Stack.Screen name="WordGroupScreen" component={WordGroupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyApp; 