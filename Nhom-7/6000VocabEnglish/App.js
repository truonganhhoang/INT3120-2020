import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import ExamScreen from "./src/screens/ExamScreen";
import DetailTopicScreen from "./src/screens/DetailTopicScreen";
import SlideshowTopicScreen from "./src/screens/SlideshowTopicScreen";

//create Stack
const HomeStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen
          name="Category"
          component={CategoryScreen}
          options={CategoryScreen.navigationOptions}
        />
        <HomeStack.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={FavoriteScreen.navigationOptions}
        />
        <HomeStack.Screen
          name="DetailTopic"
          component={DetailTopicScreen}
          options={DetailTopicScreen.navigationOptions}
        ></HomeStack.Screen>
        <HomeStack.Screen
          name="SlideshowByTopic"
          component={SlideshowTopicScreen}
          options={SlideshowTopicScreen.navigationOptions}
        ></HomeStack.Screen>
        <HomeStack.Screen name = "Exam" component={ExamScreen} options={ExamScreen.navigationOptions}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
