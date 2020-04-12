import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class FavoriteWordsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    navigation.setOptions({
      title: "Từ vựng",
      // tabBarLabel: "Từ vựng"
    });

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
        }}
      >
        <Text style={{ fontSize: 16 }}>Bạn chưa có từ vựng nào!</Text>
      </View>
    );
  }
}
