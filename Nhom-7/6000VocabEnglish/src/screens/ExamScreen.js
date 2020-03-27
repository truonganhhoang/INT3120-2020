import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Button,
  Alert
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import StyleCommon from "../themes/StyleCommon";

import ProgressBarAnimated from "react-native-progress-bar-animated";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";

const widthScreen = Dimensions.get("screen").width;
const statusBarHeight = 16;

class ImageHeart extends Component {
  //   iconHeart = this.state.turn
  //     ? require("../assets/icon/heart-active.png")
  //     : require("../assets/icon/heart-inactive.png");
  //   heart = (<Image source={require("../assets/icon/heart-active.png")} />);

  render() {
    return (
      <View style={{ margin: 2 }}>
        <Image
          style={{ width: 16, height: 16 }}
          source={require("../assets/icon/heart-active.png")}
        />
      </View>
    );
  }
}

class CountDown extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: this.props.seconds
    }
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.state.seconds === 0
        ? this.setState({ seconds: this.state.seconds })
        : this.setState({ seconds: this.state.seconds - 1 });
    }, 1000);
  }

  render(){
    return(
      <View>
            <Text style={styles.timeText}>
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
    // this.updateState = updateState.bind(this);
    // this.updateState1 = updateState1.bind(this);
  }

  updateState = (answerCorrect) => {
    this.setState({
      answered: true,
      answerCorrect: answerCorrect
    });
  };

  render() {
    console.log(`answered: ${this.state.answered} answerCorrect:  ${this.state.answerCorrect}`)
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

export default class ExamScreen extends Component {
  constructor(props) {
    super(props);
    //ref
    this.imgWord = React.createRef();
    this.state = {
      seconds: 100,
      progress: 0,
      turn: 3,
      dataSource: [
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
      // dataSource: [{}, {}, {}, {}]
      // dataSource: [{}, {},{}, {},{}, {},{}, {},{}]
    };
  }

  reset() {
    this.setState({
      seconds: 100,
      progress: 0,
      turn: 3
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.state.seconds === 0
        ? this.setState({ seconds: this.state.seconds })
        : this.setState({ seconds: this.state.seconds - 1 });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value
    });
  };

  static navigationOptions = ({ route }) => {
    return {
      // title: route.params.categoryTitle,
      headerTitleStyle: StyleCommon.StyleHeaderCommon.headerTitle,
      headerTitleAlign: "center"
    };
  };

  checkAnswer = correct => {
    //If user choose a incorrect image
    if (!correct) {
      this.handlePressImageWord({ answerCorrect: false });
    }
    //If user choose a correct image
    if (correct) {
      this.handlePressImageWord({ answerCorrect: true });
    }
  };

  render() {
    console.log(`bla bla`)
    const barWidth = widthScreen * 0.6;

    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          {/* <View>
            <Text style={styles.timeText}>
              {Math.floor(this.state.seconds / 60)}:
              {Math.floor(this.state.seconds % 60)}
            </Text>
          </View> */}
            <CountDown seconds="100"/>
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
          <View style={styles.heartsContainer}>
            <ImageHeart />
            <ImageHeart />
            <ImageHeart />
          </View>
        </View>

        <View style={styles.question}>
          <Text style={styles.questionText}>Chọn hình ảnh đúng</Text>
        </View>
        <View style={styles.word}>
          <Text style={styles.wordText}>{this.state.dataSource[0].word}</Text>
        </View>

        <View style={styles.imagesContainer}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => {
                  this.imgWord.current.updateState(true);
                }}
              >
                <ImageWord ref={this.imgWord} imageSource={item.image} />
              </TouchableHighlight>
            )}
            //Setting the number of column
            numColumns={Math.floor(Math.sqrt(this.state.dataSource.length))}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={
              this.state.dataSource.length < 4
                ? { width: "60%", alignSelf: "center" }
                : {}
            }
          />
        </View>
        {/* <View style={styles.buttonContainer}>
          <View style={styles.buttonInner}>
            <Button
              title="Increase 20%"
              onPress={this.increase.bind(this, "progress", 20)}
            />
          </View>
        </View> */}
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
  imagesContainer: {
    flex: 1,
    margin: 30
    // backgroundColor: "lightblue"
  },
  buttonContainer: {
    marginTop: 15
  }
});
