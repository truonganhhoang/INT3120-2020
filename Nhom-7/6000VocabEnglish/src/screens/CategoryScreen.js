import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import OverviewTopicItem from "../components/OverviewTopicItem";

export default class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("categoryTitle", "A Nested Details Screen")
    };
  };

  render() {
    return (
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        <OverviewTopicItem
          topicName="Body"
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
