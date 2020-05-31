import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import appImages from "./constants/appImages";
import appColors from "./constants/colors";
import appIcons from "./constants/appIcons";
import HomeStack from "./HomeStack";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function Hdsd({ navigation }) {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>Hướng dẫn sử dụng screen</Text>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Trang chủ"
        drawerStyle={{}}
        drawerContentOptions={{
          activeBackgroundColor: "#D8D8D8",
          activeTintColor: appColors.appGreen,
          inactiveTintColor: "black",
        }}
      >
        <Drawer.Screen name="Trang chủ" component={HomeStack} />
        <Drawer.Screen name="Hướng dẫn sử dụng" component={Hdsd} />
        <Drawer.Screen name="Email hỗ trợ" component={Hdsd} />
        <Drawer.Screen name="Cài đặt" component={Hdsd} />
        <Drawer.Screen name="Các ứng dụng khác" component={Hdsd} />
        <Drawer.Screen name="Chia sẻ ứng dụng" component={Hdsd} />
        <Drawer.Screen name="Đánh giá ứng dụng" component={Hdsd} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
