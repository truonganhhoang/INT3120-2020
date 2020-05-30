import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "./sharedComponents/Text";
import HomeScreen from "./screens/homeScreen/homeScreen";
import appColors from "./constants/colors";
import TrafficLaws from "./screens/trafficlawscreen/TrafficLaws";
import LawDetail from "./screens/trafficlawscreen/lawDetail";
import TipScreen from "./screens/tipScreen/TipScreen";
import chooseLesson from "./screens/hoclythuyet/chooseLesson";
import studying from "./screens/hoclythuyet/studying";

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="homeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: appColors.appGreen,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "normal",
        },
        headerBackTitleVisible: false,
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
        options={{
          title: "Luật giao thông",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="tipScreen"
        component={TipScreen}
        options={{ title: "Mẹo thi kết quả cao", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="LawDetail"
        component={LawDetail}
        options={{ title: "Tra cứu luật xe máy", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="hoclythuyet"
        component={chooseLesson}
        options={{ title: "Học lý thuyết", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="studying"
        component={studying}
        options={{
          title: "Học khái niệm và quy tắc",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
