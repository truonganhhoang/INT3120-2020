import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    setTimeout(() => {
      this.props.onNextQuestion();
      this.setState({ status: 0 });
    }, 1000);
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
    backgroundColor: "#00B300",
  },
  selectedFalse: {
    backgroundColor: "#D90000",
  },
  content: { textAlign: "center", fontSize: 26 },
});
