import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { TouchableOpacity } from "react-native-gesture-handler";
import starOutline from "../assets/icon/star-outline.png";
import starFillColor from "../assets/icon/star-fill-color.png";
import GLOBAL from "../utils/Globals";

export class DetailTopicItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  playAudioSpelling = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("../assets/sounds/background.mp3"));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };
  render() {
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
            <Image
              style={styles.mainImage}
              source={require("../assets/image/body.png")}
            />
          </View>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.word}>abdomen</Text>
          <Text style={styles.spelling}>neck</Text>
          <TouchableOpacity
            style={styles.iconSpeaker}
            onPress={this.playAudioSpelling}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/icon/speaker.png")}
            />
          </TouchableOpacity>
          <Text style={styles.meaning}>bụng</Text>
        </View>
      </View>
    );
  }
}

export default DetailTopicItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 0,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    height: 170,
    borderRadius: 8
  },
  iconStar: {
    position: "absolute",
    top: 5,
    left: 5,
    width: 25,
    height: 25
  },
  mainImage: {
    borderWidth: 0,
    width: 150,
    height: 150
  },
  leftColumn: {
    flex: 1
  },
  rightColumn: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-around",
    alignItems: "center"
  },
  iconSpeaker: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: 24,
    height: 24,
    borderRadius: 12,
    marginTop: 5
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
