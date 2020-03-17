import React from "react";
import { View, Text } from "react-native";

export default class FavoriteWordsScreen extends React.Component {

  render() {
    const {navigation} = this.props;
    navigation.setOptions({
        title: "Từ vựng",
        // tabBarLabel: "Từ vựng"
    });

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Tu vung yeu thich!</Text>
      </View>
    );
  }
}
