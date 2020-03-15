import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const GLOBAL = require('../utils/Globals')

const Tab = createMaterialTopTabNavigator();

function FavoriteVocabScreen({navigation}) {
    
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tu vung yeu thich!</Text>
    </View>
  );
}

function FavoriteLessonScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bai hoc yeu thich!</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 14},
        tabStyle: { width: 200 },
        // style: {backgroundColor: 'red'},
        indicatorStyle: {color: GLOBAL.COLOR.ORANGE},
        style: { backgroundColor: "white" },
        labelStyle: {
            color: GLOBAL.COLOR.ORANGE,
            fontWeight: 'bold'
        } 
      }}
    >
      <Tab.Screen name="FavoriteVocabScreen" component={FavoriteVocabScreen} />
      <Tab.Screen name="FavoriteLessonScreen" component={FavoriteLessonScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
