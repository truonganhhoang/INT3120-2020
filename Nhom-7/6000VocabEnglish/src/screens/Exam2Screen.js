import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, Alert } from "react-native";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import StyleCommon from "../themes/StyleCommon";
import GLOBAL from "../utils/Globals";
import { connect } from "react-redux";
import CountDown from "../components/ExamComponents/CountDown";
import Turns from "../components/ExamComponents/Turns";
import Question from "../components/ExamComponents/Question";
import * as actionCreators from "../actions";
import db from "../../config/configFirebase";

const SCREEN_DEVICE = Dimensions.get("screen");

class Exam2Screen extends Component {
  constructor(props) {
    super(props);
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
    this.props.onStartExam();
    // let mydt = this.fetchData();
  }

  // fetchData() {
  //   const { titleTopic } = this.props.route.params;
  //   console.log(titleTopic);
  //   let data = [];

  //   if (titleTopic !== undefined) {
  //     db.collection("/topic/")
  //       .doc("people")
  //       .collection("people")
  //       .doc(titleTopic)
  //       .collection(titleTopic)
  //       .get()
  //       .then(docs => {
  //         docs.forEach(doc => {
  //           // console.log(doc.id, "=>", doc.data());
  //           data.push(doc.data());
  //           // console.log("Slidedhow" + data);
  //         });
  //       })
  //       .catch(err => {
  //         console.log("Error getting documents", err);
  //       });
  //   }
  //   return data;
  // }

  render() {
    const { myData } = this.props;
    {
      this.props.myExam.passExam
        ? Alert.alert(
            "Hoàn thành",
            "Chúc mừng bạn đã hoàn thành bài luyện tập",
            [
              {
                text: "OK",
                onPress: () => {
                  this.props.onStartExam();
                  this.props.navigation.goBack(null);
                }
              }
            ],
            { cancelable: false }
          )
        : null;
      this.props.myExam.failed
        ? Alert.alert(
            "Chưa hoàn thành",
            "Tiếc quá bạn hoàn thành bài luyện tập, thử lại nào!",
            [
              {
                text: "Thử lại",
                onPress: () => {
                  this.props.onStartExam();
                }
              },
              {
                text: "Đóng",
                onPress: () => {
                  this.props.onStartExam();
                  this.props.navigation.goBack(null);
                }
              }
            ],
            { cancelable: false }
          )
        : null;
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
        <Question data={myData[this.props.myExam.currentQuestion]} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    myExam: state.exams,
    myData: state.dataExam
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
  question: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  questionText: {
    fontWeight: "bold"
  }
});
