import React from "react";
import { View, Text } from "react-native";
import MyTabs from "../navigators/FavoriteTabNavigator";

const GLOBAL = require("../utils/Globals");

export default class FavoriteScreen extends React.Component {
  static navigationOptions = {
    title: "Yêu thích",
    headerTitleStyle: {
      color: GLOBAL.COLOR.ORANGE,
      fontWeight: "bold"
    },
    headerTitleAlign: "center",
    headerTintColor: GLOBAL.COLOR.ORANGE
  };

  render() {
    return <MyTabs />;
  }
}
