import React from 'react'; 
import { View, Text, BackHandler } from 'react-native'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import { Vocabularys } from '../FavoriteVocabularys'; 
import { Lessons } from '../FavoriteLessons'; 


const Tab = createMaterialTopTabNavigator(); 

function FavoriteTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {backgroundColor: "#ff5e00" } ,
        activeTintColor: "#ff5e00",
        inactiveTintColor: "gray",
        labelStyle: { fontSize: 14, fontWeight: "bold" },
        style: { backgroundColor: "white" },
      }} 
    >
      <Tab.Screen 
        name="Từ vựng"
        component={Vocabularys}
      />
      <Tab.Screen 
        name="Bài học"
        component={Lessons}
      />
    </Tab.Navigator>
  )
}

export default class FavoriteScreen extends React.Component {
  static navigationOptions = {
    title: "Yêu thích",
    headerTitleStyle: {
      color: '#ff5e00',
      fontWeight: "bold",
      textTransform: "capitalize"
    },
    headerTitleAlign: "center",
    headerTintColor: '#ff5e00',
  };

  render() {
    return <FavoriteTabs />;
  }
}