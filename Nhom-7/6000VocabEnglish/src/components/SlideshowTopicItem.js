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
    const { word, spelling, meaning } = this.props.item;
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30
        }}
      >
        <FlipComponent
          isFlipped={this.state.isFlipped}
          scale={1}
          rotateDuration={600}
          frontView={
            <TouchableOpacity onPress={this.handleOnPress} activeOpacity={1}>
              <View style={styles.container}>
                <Image style={styles.iconStar} source={starOutline} />

                <Image style={styles.image} source={imageList[word]} />
                {/* <Text style={styles.hint}>Lật mặt sau</Text> */}
              </View>
            </TouchableOpacity>
          }
          backView={
            <TouchableOpacity onPress={this.handleOnPress} activeOpacity={1}>
              <View style={[styles.container, styles.containerBack]}>
                <Image style={styles.iconStar} source={starOutline} />

                <View style={{ alignItems: "center" }}>
                  <Text style={styles.word}>{word}</Text>
                  <Text style={styles.spelling}>{spelling}</Text>
                </View>

                <TouchableOpacity
                  style={styles.iconSpeaker}
                  onPress={this.props.playSound}
                >
                  <Image
                    style={{ width: 64, height: 64 }}
                    source={require("../assets/icon/speaker.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.meaning}>{meaning}</Text>
                {/* <Text style={styles.hint}>Lật mặt trước</Text> */}
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
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  containerBack: {
    justifyContent: "space-around"
  },
  iconStar: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 24,
    height: 24
  },
  hint: {
    color: "grey",
    fontFamily: "Roboto",
    fontSize: 14,
    position: "absolute",
    bottom: 20,
    left: 110
  },
  image: {
    width: "100%",
    height: 250
  },
  word: {
    textTransform: "lowercase",
    fontSize: 24,
    color: "#F57F17",
    fontWeight: "bold",
    textAlign: "center"
  },
  spelling: {
    textTransform: "lowercase",
    fontSize: 14,
    color: "black",
    fontWeight: "bold"
  },
  meaning: {
    textTransform: "lowercase",
    fontSize: 20,
    color: "blue",
    fontWeight: "bold"
    // alignContent: "space-between"
  }
});
