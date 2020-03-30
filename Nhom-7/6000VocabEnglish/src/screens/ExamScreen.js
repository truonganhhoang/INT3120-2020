import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Button,
  Modal,
  Alert
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import StyleCommon from "../themes/StyleCommon";

import ProgressBarAnimated from "react-native-progress-bar-animated";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";

const widthScreen = Dimensions.get("screen").width;
const statusBarHeight = 16;

class ImageHeart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
    this.changeStatusActive = this.changeStatusActive.bind(this);
    // this.status = this.props.status;
  }

  changeStatusActive = () => {
    this.setState(prevState => {
      return {
        active: !prevState.active
      };
    });
  };

  render() {
    let iconHeart =
      this.state.active === true
        ? require("../assets/icon/heart-active.png")
        : require("../assets/icon/heart-inactive.png");
    // heart = <Image source={require("../assets/icon/heart-active.png")} />;
    return (
      <View style={{ margin: 2 }}>
        <Image style={{ width: 16, height: 16 }} source={iconHeart} />
      </View>
    );
  }
}

function showModal(){}
class TurnCounter extends Component {
  constructor(props) {
    super(props);
    this.heartRefs = {};
    this.state = {
      turn: 3
    };
  }

  decreaseTurn = () => {
    this.setState(prevState => {
      return { turn: prevState.turn - 1 };
    });

    this.heartRefs[this.state.turn].changeStatusActive();
  };

  render() {
    // if(this.state.turn === 0){

    // }
    return (
      <View style={styles.heartsContainer}>
        <ImageHeart
          ref={ImageHeart => {
            this.heartRefs[1] = ImageHeart;
          }}
        />
        <ImageHeart
          ref={ImageHeart => {
            this.heartRefs[2] = ImageHeart;
          }}
        />
        <ImageHeart
          ref={ImageHeart => {
            this.heartRefs[3] = ImageHeart;
          }}
        />
      </View>
    );
  }
}

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.seconds
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.state.seconds === 0
        ? this.setState({ seconds: this.state.seconds })
        : this.setState({ seconds: this.state.seconds - 1 });
    }, 1000);
  }

  render() {
    const timeTextStyle =
      this.state.seconds <= 10 ? styles.dangerText : styles.timeText;
    return (
      <View>
        <Text style={timeTextStyle}>
          {Math.floor(this.state.seconds / 60)}:
          {Math.floor(this.state.seconds % 60)}
        </Text>
      </View>
    );
  }
}

class ImageWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURI: this.props.imageSource,
      answered: false,
      answerCorrect: false
    };
  }

  updateState = answerCorrect => {
    this.setState({
      answered: true,
      answerCorrect: answerCorrect
    });
  };

  render() {
    // console.log(`answered: ${this.state.answered} answerCorrect:  ${this.state.answerCorrect}`)
    const imageSource = {
      uri: this.state.imageURI
    };

    return (
      <View
        style={{
          flex: 1,
          aspectRatio: 1,
          margin: 1,
          borderColor: "white",
          borderRadius: 10,
          borderWidth: 10,
          elevation: 3
        }}
      >
        <Image
          source={imageSource}
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
          {!this.state.answered ? (
            <Text></Text>
          ) : this.state.answerCorrect ? (
            <Ionicons name="md-checkmark" size={75} color="green" />
          ) : (
            <Ionicons name="md-close" size={75} color="red" />
          )}
        </View>
      </View>
    );
  }
}

class Question extends Component {
  constructor(props) {
    super(props);
    //ref
    this.imgWordRefs = {};
    this.questionData = this.props.data;
  }

  render() {
    return (
      <View>
        <View style={styles.word}>
          <Text style={styles.wordText}>{this.questionData.word}</Text>
        </View>
        <View>
          <FlatList
            data={this.questionData.options}
            renderItem={({ item, index }) => (
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => {
                  this.imgWordRefs[index].updateState(item.correct);
                  item.correct
                    ? this.props.markAsCorrect()
                    : this.props.answerIncorrect();
                }}
              >
                <ImageWord
                  ref={ImageWord => {
                    this.imgWordRefs[index] = ImageWord;
                  }}
                  imageSource={item.image}
                />
              </TouchableHighlight>
            )}
            //Setting the number of column
            numColumns={Math.floor(Math.sqrt(this.questionData.options.length))}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={
              this.questionData.options.length < 4
                ? { width: "50%", alignSelf: "center" }
                : null
            }
          />
        </View>
      </View>
    );
  }
}

export default class ExamScreen extends Component {
  constructor(props) {
    super(props);
    this.turnsRef = React.createRef();
    this.state = {
      seconds: 100, //time
      progress: 0, //progress
      turn: 3, //number of turns
      current: 0, //current question
      correct: false
    };
    this.dataSource = [
      {
        id: 1,
        word: "dog",
        options: [
          {
            word: "dog",
            image:
              "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_960_720.jpg",
            correct: true
          },
          {
            word: "cat",
            image:
              "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg"
          }
        ]
      },
      {
        id: 2,
        word: "cat",
        options: [
          {
            word: "cat",
            image:
              "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg",
            correct: true
          },
          {
            word: "dog",
            image:
              "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_960_720.jpg"
          }
        ]
      }
    ];
    // dataSource: [{}, {}, {}, {}]
    // dataSource: [{}, {},{}, {},{}, {},{}, {},{}]

    this.markAsCorrect = this.markAsCorrect.bind(this);
    this.answerIncorrect = this.answerIncorrect.bind(this);
  }

  answerIncorrect() {
    this.turnsRef.current.decreaseTurn();
  }

  markAsCorrect() {
    this.setState({
      correct: true
    });
  }

  reset() {
    this.setState({
      seconds: 100,
      progress: 0,
      turn: 3
    });
  }

  componentDidMount() {
    //load questions data from api here
  }

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value
    });
  };

  static navigationOptions = ({ route }) => {
    return {
      title: route.params.titleTopic,
      headerTitleStyle: StyleCommon.StyleHeaderCommon.headerTitle,
      headerTitleAlign: "center"
    };
  };

  handleWhenPressCorrectAnswer = () => {
    this.increase("progress", Math.ceil(100 / this.dataSource.length));
    this.state.current + 1 === this.dataSource.length
      ? this.showModal("PASS")
      : this.setState(prevState => {
          return { current: prevState.current + 1 };
        });

    this.setState(prevState => {
      return { correct: !prevState.correct };
    });
  };

  showModal = status => {
    if (status === "PASS") {
      Alert.alert("Hoan thanh", "Xin chuc mung");
    } else if (status === "FAIL") {
      Alert.alert("Khong dat", "Vui long Thu lai");
    }
  };

  render() {
    const barWidth = widthScreen * 0.6;
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <CountDown seconds="100" />
          <View>
            <ProgressBarAnimated
              backgroundColor="orange"
              underlyingColor="#148cF0"
              borderColor="orange"
              borderRadius={10}
              width={barWidth}
              height={statusBarHeight}
              value={this.state.progress}
              backgroundColorOnComplete="orange"
              onComplete={() => {
                Alert.alert("Hey!", "onComplete event fired!");
              }}
            />
          </View>
          <View>
            <TurnCounter ref={this.turnsRef} />
          </View>
        </View>

        <View style={styles.question}>
          <Text style={styles.questionText}>Chọn hình ảnh đúng</Text>
        </View>

        {this.state.correct ? (
          this.handleWhenPressCorrectAnswer()
        ) : (
          <Question
            data={this.dataSource[this.state.current]}
            markAsCorrect={this.markAsCorrect}
            answerIncorrect={this.answerIncorrect}
          />
        )}
      </View>
    );
  }
}

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
