import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
class SingleImageWord extends Component {
  render() {
    const { isCorrectAnswer, idQuestion, indexChoice } = this.props;
    const question = this.props.myData.find(
      question => question.id === idQuestion
    );
    return (
      <View style={{ width: "100%", height: undefined, aspectRatio: 1 }}>
        <Image
          source={{ uri: this.props.imageSource }}
          resizeMode="cover"
          style={{
            flex: 1
          }}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {!question.options[indexChoice].isPressed ? null : isCorrectAnswer ? (
            <Ionicons name="md-checkmark" size={75} color="green" />
          ) : (
            <Ionicons name="md-close" size={75} color="red" />
          )}
        </View>
      </View>
    );
  }
}

function mapToProps(state) {
  return {
    myData: state.dataExam
  };
}

export default connect(mapToProps)(SingleImageWord);
