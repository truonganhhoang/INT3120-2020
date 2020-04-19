import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Audio } from "expo-av";

const GLOBAL = require("../../utils/Globals");
export class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 0,
    };
  }

  componentDidMount() {
    this.setState({ status: 0 });
  }
  onChooseAnswer = () => {
    const { correct } = this.props.data;

    if (correct) {
      this.setState({ status: 1 });
    } else {
      this.setState({ status: 2 });
    }

    this.playSound(correct);
    setTimeout(() => {
      this.props.onNextQuestion(correct);
      this.setState({ status: 0 });
    }, 1500);
  };

  playSound = async (correct) => {
    if (correct) {
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(
          require("../../assets/sounds/correctEffect.mp3")
        );
        await soundObject.playAsync();
        // Your sound is playing!
      } catch (error) {
        // An error occurred!
      }
    } else {
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(
          require("../../assets/sounds/wrongEffect.wav")
        );
        await soundObject.playAsync();
        // Your sound is playing!
      } catch (error) {
        // An error occurred!
      }
    }
  };
  render() {
    const { word, correct } = this.props.data;
    const { status } = this.state;
    return (
      <TouchableOpacity onPress={this.onChooseAnswer}>
        <View
          style={[
            status === 0
              ? styles.default
              : status === 1
              ? styles.selectedTrue
              : styles.selectedFalse,
            styles.container,
          ]}
        >
          <Text style={styles.content}>{word}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Answer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    justifyContent: "center",
    textAlign: "center",
    width: 300,
    height: 60,
    borderRadius: 4,
    marginBottom: 10,
  },
  default: { backgroundColor: "#e8e6e6" },

  selectedTrue: {
    backgroundColor: GLOBAL.COLOR.GREEN,
  },
  selectedFalse: {
    backgroundColor: GLOBAL.COLOR.RED,
  },
  content: { textAlign: "center", fontSize: 26 },
});
