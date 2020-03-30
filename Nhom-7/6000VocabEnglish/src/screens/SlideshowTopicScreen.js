import React, { Component } from "react";
import { Text, View } from "react-native";
import GLOBAL from "../utils/Globals";
import SlideshowTopicItem from "../components/SlideshowTopicItem";
export class SlideshowTopicScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({ route }) => {
    return {
      title: route.params.titleTopic,
      headerTitleStyle: {
        color: GLOBAL.COLOR.ORANGE,
        fontWeight: "bold",
        textTransform: "capitalize"
      },
      headerTitleAlign: "center",
      headerTintColor: GLOBAL.COLOR.ORANGE

      //title: navigation.getParam("categoryTitle", "A Nested Details Screen")
    };
  };
  render() {
    return (
      <View>
        <SlideshowTopicItem></SlideshowTopicItem>
      </View>
    );
  }
}

export default SlideshowTopicScreen;
