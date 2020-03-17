import React from "react";
import FavoriteWordsScreen from "../screens/FavoriteWordsScreen";
import FavoriteLessonsScreen from "../screens/FavoriteLessonsScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const GLOBAL = require("../utils/Globals");

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // indicatorStyle: {backgroundColor: 'red'},
        activeTintColor: GLOBAL.COLOR.ORANGE,
        inactiveTintColor: "gray",
        labelStyle: { fontSize: 14 },
        indicatorStyle: { color: GLOBAL.COLOR.ORANGE },
        style: { backgroundColor: "white" },
        labelStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Tab.Screen name="FavoriteVocabScreen" component={FavoriteWordsScreen} />
      <Tab.Screen
        name="FavoriteLessonScreen"
        component={FavoriteLessonsScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
