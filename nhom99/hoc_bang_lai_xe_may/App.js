import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "./sharedComponents/Text";
import HomeScreen from "./screens/homeScreen/homeScreen";
import appColors from "./constants/colors";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: appColors.appGreen
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "normal"
          }
        }}
      >
        <Stack.Screen name="Ôn thi giấy phép lái xe" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
