import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import ExamScreen from "./src/screens/ExamScreen";

const GLOBAL = require("./src/utils/Globals");

//create Stack
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Exam">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen}
          options={CategoryScreen.navigationOptions}
        />
        <Stack.Screen name="Favorite" component={FavoriteScreen} options={FavoriteScreen.navigationOptions}/>
        <Stack.Screen name="Exam" component={ExamScreen} options={ExamScreen.navigationOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
