import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import FlipComponent from "react-native-flip-component";
import { TouchableOpacity } from "react-native-gesture-handler";
import starOutline from "../assets/icon/star-outline.png";
import starFillColor from "../assets/icon/star-fill-color.png";
import imageList from "../assets/imageList";

export class SlideshowTopicItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
  }
  render() {
    return (
      <View>
        <FlipComponent
          isFlipped={this.state.isFlipped}
          frontView={
            <TouchableOpacity
              onPress={() => {
                this.setState({ isFlipped: !this.state.isFlipped });
              }}
            >
              <View>
                <Text style={{ textAlign: "center" }}>Front Side</Text>
              </View>
            </TouchableOpacity>
          }
          backView={
            <TouchableOpacity
              onPress={() => {
                this.setState({ isFlipped: !this.state.isFlipped });
              }}
            >
              <View>
                <Text style={{ textAlign: "center" }}>Front Side</Text>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

export default SlideshowTopicItem;

const styles = StyleSheet.create({
  container: {}
});
