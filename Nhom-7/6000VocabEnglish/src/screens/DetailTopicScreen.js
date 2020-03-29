import React, { Component } from "react";
import { Text, View } from "react-native";
import DetailTopicItem from "../components/DetailTopicItem";
import { FlatList } from "react-native-gesture-handler";
export class DetailTopicScreen extends Component {
  render() {
    return (
      <View>
        <DetailTopicItem></DetailTopicItem>
        <DetailTopicItem></DetailTopicItem>
        <DetailTopicItem></DetailTopicItem>
        <DetailTopicItem></DetailTopicItem>
        <DetailTopicItem></DetailTopicItem>
      </View>
    );
  }
}

export default DetailTopicScreen;
