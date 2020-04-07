import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import GLOBAL from "../utils/Globals";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import data from "../utils/questionPractice.json";
import { Audio } from "expo-av";
import sounds from "../assets/sounds";
import { FlatList } from "react-native-gesture-handler";
import Answer from "../components/PracticeComponents/Answer";

export class PracticeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      questions: [],
      totalQuestion: 0,
      progress: 0,
      correctAnswer: 0,
    };
  }

  static navigationOptions = ({ route }) => {
    return {
      title: route.params.titleTopic,
      headerTitleStyle: {
        color: GLOBAL.COLOR.ORANGE,
        fontWeight: "bold",
        textTransform: "capitalize",
      },
      headerTitleAlign: "center",
      headerTintColor: GLOBAL.COLOR.ORANGE,
    };
  };

  nextQuestion = (correct) => {
    if (correct) {
      this.setState({
        ...this.state,
        correctAnswer: this.state.correctAnswer + 1,
      });
    }
    if (this.state.currentQuestion < this.state.totalQuestion - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        progress:
          ((this.state.currentQuestion + 2) / this.state.totalQuestion) * 100,
      });
    } else {
      Alert.alert(
        "Kết thúc",
        "Kết quả của bạn:" +
          this.state.correctAnswer +
          "/" +
          this.state.totalQuestion,
        [
          {
            text: "OK",
            onPress: () => {
              this.props.navigation.navigate("Category");
            },
          },
        ],
        { cancelable: false }
      );
    }
  };
  // onChooseAnswer(correct) {
  //   return () => {
  //     if (correct) {
  //       console.log("Dung");
  //       this.setState({
  //         correctAnswer: this.state.correctAnswer + 1,
  //       });
  //     } else {
  //       console.log("Sai");
  //     }
  //     this.nextQuestion();
  //   };
  // }
  componentDidMount() {
    const titleTopic = this.props.route.params.titleTopic;
    data.map((item) => {
      // console.log(item.topic === titleTopic);
      if (item.topic === titleTopic) {
        this.setState({
          questions: item.questions,
          totalQuestion: item.questions.length,
          progress:
            ((this.state.currentQuestion + 1) / item.questions.length) * 100,
        });
        // console.log(item);
        this.playSound(item.sound);
      }
    });
  }
  playSound(word) {
    return async () => {
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(sounds[word]);
        await soundObject.playAsync();
        // Your sound is playing!
      } catch (error) {
        // An error occurred!
      }
    };
  }
  render() {
    const { questions, currentQuestion, totalQuestion } = this.state;
    if (questions[currentQuestion] !== undefined) {
      return (
        <View style={styles.container}>
          <View style={styles.speaker}>
            <Text style={styles.progress}>
              {currentQuestion + 1}/{totalQuestion}
            </Text>
            <ProgressBarAnimated
              backgroundColor="orange"
              underlyingColor="#148cF0"
              borderColor="orange"
              borderRadius={10}
              width={300}
              height={8}
              value={this.state.progress}
              backgroundColorOnComplete="orange"
              onComplete={() => {
                // Alert.alert("Hey!", "onComplete event fired!");
              }}
            />
          </View>

          <Text style={styles.question}>
            {questions[currentQuestion].question}
          </Text>
          <View style={styles.speaker}>
            <TouchableOpacity
              onPress={this.playSound(questions[currentQuestion].sound)}
            >
              <Image
                style={{ width: 64, height: 64 }}
                source={require("../assets/icon/speaker.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.answers}>
            <FlatList
              data={questions[currentQuestion].options}
              renderItem={({ item }) => {
                return (
                  <Answer
                    data={item}
                    onNextQuestion={this.nextQuestion}
                  ></Answer>
                );
              }}
            ></FlatList>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text>
            Ứng dụng đang trong quá trình phát triển nên bộ dữ liệu còn chưa đầy
            đủ.
          </Text>
          <Text>
            Vui lòng lựa chọn chủ đề People/Body để trải nghiệm. Xin cảm ơn!
          </Text>
        </View>
      );
    }
  }
}

export default PracticeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignContent: "center",
    height: "100%",
    paddingTop: 10,
  },
  progress: {
    color: "orange",
    fontSize: 16,
    textAlign: "center",
  },
  question: {
    fontSize: 26,
    textAlign: "center",
  },
  answers: {
    justifyContent: "center",
    alignItems: "center",
  },
  speaker: {
    alignItems: "center",
  },
});
