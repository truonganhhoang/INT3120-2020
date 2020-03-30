import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
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
  handleOnPress = () => {
    this.setState({ isFlipped: !this.state.isFlipped });
  };
  render() {
    return (
      <View>
        <FlipComponent
          isFlipped={this.state.isFlipped}
          scale={1}
          rotateDuration={600}
          frontView={
            <TouchableOpacity onPress={this.handleOnPress} activeOpacity={1}>
              <View style={styles.container}>
                <Image source={require("../assets/image/face.jpg")} />
              </View>
            </TouchableOpacity>
          }
          backView={
            <TouchableOpacity onPress={this.handleOnPress} activeOpacity={1}>
              <View style={styles.container}>
                <Text>Face</Text>
                <Text>/fai/</Text>
                <TouchableOpacity
                  style={styles.iconSpeaker}
                  onPress={this.props.playSound}
                >
                  <Image
                    style={{ width: 64, height: 64 }}
                    source={require("../assets/icon/speaker.png")}
                  />
                </TouchableOpacity>
                <Text>mặt</Text>
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
  container: {
    width: 300,
    height: 420,
    padding: 12,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
