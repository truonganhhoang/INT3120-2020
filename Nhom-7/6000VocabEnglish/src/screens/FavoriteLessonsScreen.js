import React from "react";
import { View, Text } from "react-native";

export default class FavoriteLessonsScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    navigation.setOptions({
        title: "Bài học"
    });

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Bai hoc yeu thich!</Text>
      </View>
    );
  }
}
