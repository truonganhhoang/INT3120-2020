import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { SettingScreen } from '../screens/SettingScreen';
import { StartScreen } from '../screens/StartScreen';
import { WordGroupScreen } from '../screens/WordGroupScreen';
import { DetailWordGroupScreen } from '../screens/DetailWordGroupScreen';
import { FlipCardWord } from '../screens/FlipCardWord';
import { PracticeTestScreen } from '../screens/PracticeTestScreen';  
import { GameChallengeScreen } from '../screens/GameChallengeScreen';  

// const Drawer = createStackNavigator();
const Drawer = createStackNavigator()

function MyApp() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="StartScreen">
        <Drawer.Screen 
          name="StartScreen" 
          component={StartScreen} 
        />
        <Drawer.Screen 
          name="SettingScreen" 
          component={SettingScreen} 
          options={
            {
              title: "Cài đặt", 
              headerTitleStyle: {
                color: "#ff5e00",
                fontWeight: "bold",
                textTransform: "capitalize"
              },
              headerTitleAlign: "center",
              headerTintColor: "#ff5e00",
            }
          }
        />
        <Drawer.Screen 
          name="FavoriteScreen" 
          component={FavoriteScreen} 
          options={
            {
              title: "Yêu Thích",
              headerTitleStyle: {
                color: "#ff5e00",
                fontWeight: "bold",
                textTransform: "capitalize"
              },
              headerTitleAlign: "center",
              headerTintColor: "#ff5e00",
            }
          }
        />
        <Drawer.Screen name="WordGroupScreen" 
          component={WordGroupScreen}
          options={{ title: "", headerTintColor: "#ff5e00" }}
        />
        <Drawer.Screen name="DetailWordGroupScreen" 
          component={DetailWordGroupScreen} 
          options={{ title: "", headerTintColor: "#ff5e00" }}
        />
        <Drawer.Screen name="FlipCardWord" 
          component={FlipCardWord} 
          options={{ headerTransparent: true}}
        />
        <Drawer.Screen name="PracticeTestScreen" 
          component={PracticeTestScreen} 
          options={{ title: "", headerTintColor: "#ff5e00" }}
        />
        <Drawer.Screen name="GameChallengeScreen" 
          component={GameChallengeScreen} 
          options={{ title: "", headerTintColor: "#ff5e00" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MyApp; 