import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "./sharedComponents/Text";
import HomeScreen from "./screens/homeScreen/homeScreen";
import appColors from "./constants/colors";
import TrafficLaws from "./screens/trafficlawscreen/TrafficLaws";
// import Accordian from "./component/Accordian";
// import ListAccordians from "../99/component/ListAccordians";
// import Colors from "../99/component/Colors";
// import {Component} from 'react';
import tipScreen from "../99/screens/tipScreen/TipScreen"

const Stack = createStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: appColors.appGreen,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "normal",
          },
        }}
      >
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            title: "Ôn thi giấy phép lái xe",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="lawScreen"
          component={TrafficLaws}
          options={{ title: "Luật giao thông", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="tipScreen"
          component={tipScreen}
          options={{ title: "Mẹo thi kết quả cao", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;

// function App (){
//   return (
//     <ListAccordians/>
//   );
// };
// export default App