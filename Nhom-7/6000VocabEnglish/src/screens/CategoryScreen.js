import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryTitle', 'A Nested Details Screen'),
    };
  };

  render() {
    return (
      <View>
        <Text>Noi dung</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
