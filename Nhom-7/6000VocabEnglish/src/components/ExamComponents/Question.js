import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Alert, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import SingleImageWord from "./SingleImageWord";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import { Audio } from "expo-av";
class Question extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loading: false,
    // };
  }

  playSound = async (effectType) => {
    if (effectType === "correct") {
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
    } else if (effectType === "wrong") {
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

  handleOnPressed(indexChoice, idQuestion, item) {
    this.props.onPickOneAnswer(indexChoice, idQuestion);
    if (item.correct) {
      this.handleAnswerTrue();
      this.playSound("correct");
    } else {
      this.props.answerIsFalse();
      this.playSound("wrong");
    }
  }

  handleAnswerTrue() {
    setTimeout(() => {
      this.props.answerIsTrue();
    }, 200);
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ loading: !this.state.loading });
  //   }, 100);
  // }

  render() {
    const questionData = this.props.data;
    return (
      <View>
        <View style={styles.word}>
          <Text style={styles.wordText}>{questionData.word}</Text>
        </View>
        <View>
          <FlatList
            key={questionData.options.length}
            data={questionData.options}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flex: 1,
                  aspectRatio: 1,
                  margin: 2,
                  borderColor: "white",
                  borderRadius: 10,
                  borderWidth: 10,
                  elevation: 3,
                }}
              >
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => {
                    this.handleOnPressed(index, questionData.id, item);
                  }}
                >
                  <SingleImageWord
                    idQuestion={questionData.id}
                    isCorrectAnswer={item.correct}
                    indexChoice={index}
                    imageSource={item.image}
                  />
                </TouchableHighlight>
              </View>
            )}
            //Setting the number of column
            numColumns={Math.floor(Math.sqrt(questionData.options.length))}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={
              questionData.options.length < 4
                ? {
                    width: "50%",
                    alignSelf: "center",
                  }
                : {
                    width: "90%",
                    height: undefined,
                    aspectRatio: 1,
                    alignSelf: "center",
                    margin: 30,
                  }
            }
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { myExam: state.exams };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextQuestion: () => dispatch(actionCreators.nextQuestion()),
    answerIsTrue: () => dispatch(actionCreators.answerIsTrue()),
    answerIsFalse: () => dispatch(actionCreators.answerIsFalse()),
    onPickOneAnswer: (index, id) =>
      dispatch(actionCreators.pickOneChoice(index, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);

const styles = StyleSheet.create({
  word: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  wordText: {
    fontSize: 30,
  },
});
