import React, { Component } from "react";
import { Text, View } from "react-native";
const GLOBAL = require("../utils/Globals");

export default class CategoryScreen extends Component {
  static navigationOptions = ({ route }) => {
    return {
      title: route.params.categoryTitle,
      headerTitleStyle: {
        color: GLOBAL.COLOR.ORANGE,
        fontWeight: "bold"
      },
      headerTitleAlign: "center",
    };
  };

  render() {
    const {categoryId} = this.props.route.params;
    return (
      <View>
        <Text>Category ID: {categoryId}</Text>
      </View>
    );
  }
}
