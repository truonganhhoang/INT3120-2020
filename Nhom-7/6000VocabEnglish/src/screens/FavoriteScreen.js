import React from "react";
import MyTabs from "../navigators/FavoriteTabNavigator";
import StyleCommon from "../themes/StyleCommon";

const GLOBAL = require('../utils/Globals')

export default class FavoriteScreen extends React.Component {
  static navigationOptions = {
    title: "Yêu thích",
    headerTitleStyle: StyleCommon.StyleHeaderCommon.headerTitle,
    headerTitleAlign: "center",
  };

  render() {
    return (
      <MyTabs/>
    );
  }
}
