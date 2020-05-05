import { Text, View, Button, Image, Alert, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { Profile } from './components/Profile';
import { Man } from './components/Man';
import { Home } from './components/Home';
import { Menu } from './components/Drawer';
import { test } from './components/test';
import { ProgressBar } from './components/ProgressBar';
import { Thi_sat_hach } from './components/Thi_sat_hach';
import { Hoc_li_thuyet } from './components/Hoc_li_thuyet';
import { Form } from './components/State';
import { Tra_cuu_luat } from './components/Tra_cuu_luat';
import { Meo_thi } from './components/Meo_thi';
import { Bien_bao } from './components/Bien_bao'
import { Anima } from './components/Anima'
import { FlatListTest } from './components/FlatListTest';
// import { Panel } from './components/Collapse'

const Stack = createStackNavigator();

export default function App({ navigation }) {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#66BB6A"
          },
        }}>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Ôn thi giấy phép lái xe",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => Alert.alert("Chien", Dimensions.get("window").height.toString() + "\n" + Dimensions.get("window").width.toString())}>
                <Image
                  source={require("./images/menu.jpg")}
                  style={{ width: 55, height: 55 }}
                />
              </TouchableOpacity>
            ),
          }}

        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Ôn thi giấy phép lái xe",
          }}
        />

        <Stack.Screen
          name="Man"
          component={Man}
        />

        <Stack.Screen
          name="Drawer"
          component={Menu}
        />

        {/* <Stack.Screen
          name="Test"
          component={test}
        /> */}

        <Stack.Screen
          name="Progress"
          component={ProgressBar}
        />

        <Stack.Screen
          name="Thi_sat_hach"
          component={Thi_sat_hach}
          options={{
            title: "Thi sát hạch",
          }}
        />

        <Stack.Screen
          name="Hoc_li_thuyet"
          component={Hoc_li_thuyet}
          options={{
            title: "Học lí thuyết",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => Alert.alert("Chien", "Reset thành công")}>
                <Image
                  source={require("./images/reset.jpg")}
                  style={{ width: 30, height: 30, marginRight: 15 }}
                />
              </TouchableOpacity>
            )
          }}
        />

        <Stack.Screen
          name="Bien_bao"
          component={Bien_bao}
        />

        <Stack.Screen
          name="State"
          component={Form}
        />

        <Stack.Screen
          name="Tra_cuu_luat"
          component={Tra_cuu_luat}
          options={{
            title: "Tra cứu luật",
          }}
        />

        <Stack.Screen
          name="Meo_thi"
          component={Meo_thi}
          options={{
            title: "Mẹo thi kết quả cao",
          }}
        />

        <Stack.Screen
          name="Animated"
          component={Anima}
        />

        <Stack.Screen
          name="FlatListTest"
          component={FlatListTest}
        />

        {/* <Stack.Screen
          name="Collapse"
          component={Panel}
        /> */}



      </Stack.Navigator>
    </NavigationContainer>
  );

}
