import React from 'react'; 
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { NavigationContainer } from '@react-navigation/native';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { SettingScreen } from '../screens/SettingScreen'; 
import { StartScreen } from '../screens/StartScreen'; 
import { WordGroupScreen } from '../screens/WordGroupScreen'; 
import { DetailWordGroupScreen } from '../screens/DetailWordGroupScreen'; 

const Drawer = createDrawerNavigator(); 
function MyApp() {
  return (
    <NavigationContainer >
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 0,
        }}
      >
        <Drawer.Screen name="StartScreen" component={StartScreen}/>
        <Drawer.Screen name="SettingScreen" component={SettingScreen}/>
        <Drawer.Screen 
          name="FavoriteScreen" 
          component={FavoriteScreen} 
      
        />
        <Drawer.Screen name="WordGroupScreen" component={WordGroupScreen} />
        <Drawer.Screen name="DetailWordGroupScreen" component={DetailWordGroupScreen} /> 
      </Drawer.Navigator>  
    </NavigationContainer>
  )
}

export default MyApp; 