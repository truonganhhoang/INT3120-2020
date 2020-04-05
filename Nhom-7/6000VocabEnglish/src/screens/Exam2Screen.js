import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import StyleCommon from "../themes/StyleCommon";
import GLOBAL from "../utils/Globals";
import { connect } from "react-redux";
import CountDown from "../components/ExamComponents/CountDown";
import Turns from "../components/ExamComponents/Turns";
import Question from "../components/ExamComponents/Question";
import * as actionCreators from "../actions";

const SCREEN_DEVICE = Dimensions.get("screen");

class Exam2Screen extends Component {
  constructor(props) {
    super(props);
    this.dataSource = [
      {
        id: 1,
        word: "abdomen",
        options: [
          {
            word: "ankle",
            image: "https://www.pedifix.com/images/Foottopsprain.JPG"
          },
          {
            word: "abdomen",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Belly_button.jpg/1200px-Belly_button.jpg",
            correct: true
          }
        ]
      },
      {
        id: 2,
        word: "ankle",
        options: [
          {
            word: "ankle",
            image: "https://www.pedifix.com/images/Foottopsprain.JPG"
          },
          {
            word: "abdomen",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Belly_button.jpg/1200px-Belly_button.jpg"
          },
          {
            word: "ankle",
            image: "https://www.pedifix.com/images/Foottopsprain.JPG",
            correct: true
          },
          {
            word: "abdomen",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Belly_button.jpg/1200px-Belly_button.jpg"
          }
        ]
      },
      {
        id: 3,
        word: "arm",
        options: [
          {
            word: "abdomen",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Belly_button.jpg/1200px-Belly_button.jpg"
          },
          {
            word: "arm",
            image:
              "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg",
            correct: true
          }
        ]
      },
      {
        id: 4,
        word: "chest",
        options: [
          {
            word: "chest",
            image:
              "https://i1.wp.com/drankitgupta.com/wp-content/uploads/2018/11/male-chest-e1541271854984.jpg"
          },
          {
            word: "arm",
            image:
              "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg"
          },
          {
            word: "chest",
            image:
              "https://i1.wp.com/drankitgupta.com/wp-content/uploads/2018/11/male-chest-e1541271854984.jpg",
            correct: true
          },
          {
            word: "arm",
            image:
              "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg"
          },
          {
            word: "chest",
            image:
              "https://i1.wp.com/drankitgupta.com/wp-content/uploads/2018/11/male-chest-e1541271854984.jpg"
          },
          {
            word: "arm",
            image:
              "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg"
          },
          {
            word: "chest",
            image:
              "https://i1.wp.com/drankitgupta.com/wp-content/uploads/2018/11/male-chest-e1541271854984.jpg"
          },
          {
            word: "arm",
            image:
              "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg"
          },
          {
            word: "arm",
            image:
              "https://dictionary.cambridge.org/images/thumb/arm_noun_002_01564.jpg"
          }
        ]
      }
    ];
  }
  static navigationOptions = ({ route }) => {
    return {
      title: route.params.titleTopic,
      headerTitleStyle: StyleCommon.StyleHeaderCommon.headerTitle,
      headerTitleAlign: "center",
      headerTintColor: GLOBAL.COLOR.ORANGE
    };
  };

  componentDidMount() {
    this.props.onStartExam;
  }

  render() {
    {
      this.props.myExam.passExam ? alert("Xong") : null;
    }
    const barWidth = SCREEN_DEVICE.width * 0.6;
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <CountDown />
          <View>
            <ProgressBarAnimated
              backgroundColor="orange"
              underlyingColor="#148cF0"
              borderColor="orange"
              borderRadius={10}
              width={barWidth}
              height={16}
              value={this.props.myExam.progress}
              backgroundColorOnComplete="orange"
              onComplete={() => {
                // Alert.alert("Hey!", "onComplete event fired!");
              }}
            />
          </View>
          <View>
            <Turns />
          </View>
        </View>

        <View style={styles.question}>
          <Text style={styles.questionText}>Chọn hình ảnh đúng</Text>
        </View>
        <Question data={this.dataSource[this.props.myExam.currentQuestion]} />
        {/* {console.log(`${JSON.stringify(this.dataSource[1])}`)} */}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    myExam: state.exams
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onNextQuestion: () => dispatch(actionCreators.nextQuestion()),
    onStartExam: () => dispatch(actionCreators.startExam())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam2Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    marginTop: 0,
    paddingVertical: 25
  },
  statusBar: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  timeText: {
    fontWeight: "bold",
    color: "orange",
    fontSize: 16
  },
  dangerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red"
  },
  heartsContainer: {
    flexDirection: "row"
  },
  question: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  questionText: {
    fontWeight: "bold"
  },
  word: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  wordText: {
    fontSize: 30
  },
  buttonContainer: {
    marginTop: 15
  }
});
