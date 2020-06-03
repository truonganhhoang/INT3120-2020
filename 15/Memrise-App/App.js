import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Courses from "./screens/Courses";
import ListWord from "./screens/ListWords";
import WordDetail from "./screens/WordDetail";
import AddMem from "./screens/AddMem";
import Review from "./screens/Review";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Courses">
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{
            title: "Course",
            headerStyle: {
              backgroundColor: "#0ab",
            },
          }}
          // initialParams={{ itemId: 42 }}ß
        />

        <Stack.Screen
          name="ListWord"
          component={ListWord}
          options={{
            title: "List Words",
          }}
        />
        <Stack.Screen name="WordDetail" component={WordDetail}  options={{
            title: "Word Details",
          }} />
        <Stack.Screen name="AddMem" component={AddMem} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
