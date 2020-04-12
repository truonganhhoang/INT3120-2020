import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import starOutline from "../assets/icon/star-outline.png";
import starFillColor from "../assets/icon/star-fill-color.png";
import imageList from "../assets/imageList";
import GLOBAL from "../utils/Globals";
export class DetailTopicItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { word, spelling, meaning, image } = this.props.item;
    return (
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <View style={styles.iconStar}>
            <TouchableOpacity onPress={this.handlePressFavorite}>
              <Image
                source={!this.state.favorite ? starOutline : starFillColor}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Image style={styles.mainImage} source={{ uri: image }} />
          </View>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.word}>{word}</Text>
          <Text style={styles.spelling}>{spelling}</Text>
          <TouchableOpacity
            style={styles.iconSpeaker}
            onPress={this.props.playSound}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/icon/speaker.png")}
            />
          </TouchableOpacity>
          <Text style={styles.meaning}>{meaning}</Text>
        </View>
      </View>
    );
  }
}

export default DetailTopicItem;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    height: 170,
    borderRadius: 8,
  },
  iconStar: {
    position: "absolute",
    top: 5,
    left: 5,
    width: 25,
    height: 25,
  },
  mainImage: {
    borderWidth: 0,
    width: 150,
    height: 150,
    backgroundColor: "#fff",
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-around",
    alignItems: "center",
  },
  iconSpeaker: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: 24,
    height: 24,
    borderRadius: 12,
    marginTop: 5,
  },
  word: {
    textTransform: "lowercase",
    fontSize: 24,
    color: "#F57F17",
    fontWeight: "bold",
    textAlign: "center",
  },
  spelling: {
    textTransform: "lowercase",
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  meaning: {
    textTransform: "lowercase",
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
    // alignContent: "space-between"
  },
});
