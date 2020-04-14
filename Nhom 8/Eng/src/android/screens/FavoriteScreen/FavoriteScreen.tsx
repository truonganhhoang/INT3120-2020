import React from 'react'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import { Vocabularys } from '../FavoriteVocabularys'; 
import { Lessons } from '../FavoriteLessons'; 


const Tab = createMaterialTopTabNavigator(); 

function FavoriteTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Vocabularys"
    >
      <Tab.Screen 
        name="Vocabularys"
        component={Vocabularys}
        options={{ tabBarLabel: 'Vocabularys' }}
      />
      <Tab.Screen 
        name="Lessons"
        component={Lessons}
        options={{ tabBarLabel: 'Lessons' }}
      />
    </Tab.Navigator>
  )
}

const FavoriteScreen = () => {
  return (
    <FavoriteTabs />
  )
}

export default FavoriteScreen; 