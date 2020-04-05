import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Alert, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import SingleImageWord from "./SingleImageWord";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import { Ionicons } from "@expo/vector-icons";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
                  elevation: 3
                }}
              >
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => {
                    item.correct
                      ? this.props.answerIsTrue()
                      : this.props.answerIsFalse();
                  }}
                >
                  <SingleImageWord imageSource={item.image} />
                </TouchableHighlight>
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
                  {!this.props.myExam.answered ? (
                    <View></View>
                  ) : this.props.myExam.correct ? (
                    <Ionicons name="md-checkmark" size={75} color="green" />
                  ) : (
                    <Ionicons name="md-close" size={75} color="red" />
                  )}
                </View>
              </View>
            )}
            //Setting the number of column
            numColumns={Math.floor(Math.sqrt(questionData.options.length))}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={
              questionData.options.length < 4
                ? {
                    width: "50%",
                    alignSelf: "center"
                  }
                : {
                    width: "90%",
                    height: undefined,
                    aspectRatio: 1,
                    alignSelf: "center",
                    margin: 30
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

const mapDispatchToProps = dispatch => {
  return {
    onNextQuestion: () => dispatch(actionCreators.nextQuestion()),
    answerIsTrue: () => dispatch(actionCreators.answerIsFalse()),
    answerIsFalse: () => dispatch(actionCreators.answerIsFalse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);

const styles = StyleSheet.create({
  word: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  wordText: {
    fontSize: 30
  }
});
