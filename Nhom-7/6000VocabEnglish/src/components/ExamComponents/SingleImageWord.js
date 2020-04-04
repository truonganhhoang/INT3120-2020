import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class SingleImageWord extends Component {
  render() {
    return (
      <View style={{ width: "100%", height: undefined, aspectRatio: 1 }}>
        <Image
          source={{ uri: this.props.imageSource }}
          resizeMode="cover"
          style={{
            flex: 1
          }}
        />
      </View>
    );
  }
}
