import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "./sharedComponents/Text";
import HomeScreen from "./screens/homeScreen/homeScreen";
import appColors from "./constants/colors";
import TrafficLaws from "./screens/trafficlawscreen/TrafficLaws";

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
          options={{ title: "Ôn thi giấy phép lái xe" }}
        />
        <Stack.Screen
          name="lawScreen"
          component={TrafficLaws}
          options={{ title: "Luật giao thông" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
