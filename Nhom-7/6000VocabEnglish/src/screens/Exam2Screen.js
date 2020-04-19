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
import Spinner from "react-native-loading-spinner-overlay";

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
      headerTintColor: GLOBAL.COLOR.ORANGE,
    };
  };

  async componentDidMount() {
    const titleTopic = this.props.route.params.titleTopic;
    const categoryName = this.props.route.params.categoryName;
    await this.props.onFetchData(categoryName, titleTopic);
    this.setState({ loading: true });
    this.props.onStartExam(
      this.props.myData.length, //total question
      this.props.myData.length * 5 //time: 5 second each question
    );
  }

  render() {
    const { myData, myExam } = this.props;

    {
      myExam.passExam
        ? Alert.alert(
            "Hoàn thành",
            "Chúc mừng bạn đã hoàn thành bài luyện tập",
            [
              {
                text: "OK",
                onPress: () => {
                  this.props.onStartExam(
                    this.props.myData.length,
                    this.props.myData.length * 5
                  );
                  this.props.navigation.goBack(null);
                },
              },
            ],
            { cancelable: false }
          )
        : null;
      myExam.failed
        ? Alert.alert(
            "Chưa hoàn thành",
            "Tiếc quá bạn hoàn thành bài luyện tập, thử lại nào!",
            [
              // {
              //   text: "Thử lại",
              //   onPress: async () => {
              //     const titleTopic = this.props.route.params.titleTopic;
              //     const categoryName = this.props.route.params.categoryName;
              //     this.props.onStartExam(0, 0);
              //     await this.props.onFetchData(categoryName, titleTopic);
              //     this.props.onStartExam(
              //       this.props.myData.length,
              //       this.props.myData.length * 5
              //     );
              //   },
              // },
              {
                text: "Đóng",
                onPress: () => {
                  this.props.onStartExam(
                    this.props.myData.length,
                    this.props.myData.length * 5
                  );
                  this.props.navigation.goBack(null);
                },
              },
            ],
            { cancelable: false }
          )
        : null;
    }

    const barWidth = SCREEN_DEVICE.width * 0.6;
    if (Array.isArray(myData) && myData.length === 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Spinner
            visible={myExam.loading}
            textContent={"Loading..."}
            textStyle={{ color: "#fff" }}
          />
        </View>
      );
    } else
      return (
        <View style={styles.container}>
          <Spinner
            visible={myExam.loading}
            textContent={"Loading..."}
            textStyle={{ color: "#fff" }}
          />
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
                value={myExam.progress}
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
          <Question data={myData[myExam.currentQuestion]} />
        </View>
      );
  }
}

function mapStateToProps(state) {
  return {
    myExam: state.exams,
    myData: state.dataExam,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFinishExam: () => dispatch(actionCreators.refresh()),
    onStartExam: (numberQuestions, second) =>
      dispatch(actionCreators.startExam(numberQuestions, second)),
    onFetchData: (categoryName, topicName) =>
      dispatch(actionCreators.fetchData(categoryName, topicName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam2Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLOBAL.COLOR.LIGHTGRAY,
    marginTop: 0,
    paddingVertical: 25,
  },
  statusBar: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  question: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    fontWeight: "bold",
  },
});
