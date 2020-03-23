import React, { Component } from "react";
const GLOBAL = require("../utils/Globals");
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import OverviewTopicItem from "../components/OverviewTopicItem";

export default class CategoryScreen extends Component {
  static navigationOptions = ({ route }) => {
    return {
      title: route.params.categoryTitle,
      headerTitleStyle: {
        color: GLOBAL.COLOR.ORANGE,
        fontWeight: "bold"
      },
      headerTitleAlign: "center",
      //title: navigation.getParam("categoryTitle", "A Nested Details Screen")
    };
  };

  render() {

    const { categoryId } = this.props.route.params;

    return (    
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        <OverviewTopicItem

          topicName="Body Haaaaaaaa"
          topicNameVi="Thân thể"
          description="Giúp bạn nắm vững 28 từ liên quan đến Cơ thể trong tiếng Anh"
        ></OverviewTopicItem>
        <OverviewTopicItem description="Body"></OverviewTopicItem>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    justifyContent: "center"
  }
});
