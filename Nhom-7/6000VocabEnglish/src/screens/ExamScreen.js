import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  Alert
} from "react-native";
import StyleCommon from "../themes/StyleCommon";

import ProgressBarAnimated from "react-native-progress-bar-animated";

const widthScreen = Dimensions.get("screen").width;
const statusBarHeight = 16;

class ImageHeart extends Component {
    //   iconHeart = this.state.turn
//     ? require("../assets/icon/heart-active.png")
//     : require("../assets/icon/heart-inactive.png");
//   heart = (<Image source={require("../assets/icon/heart-active.png")} />);

  render(){
      return(
          <View style={{margin: 2}}><Image style={{width: 16, height: 16}} source={require("../assets/icon/heart-active.png")} /></View>
      )
  }
}

export default class ExamScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 100,
      progress: 0,
      turn: 3
    };

  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({seconds: this.state.seconds - 1})
    }, 1000);
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

  render() {
    const barWidth = Dimensions.get("screen").width*0.6;

    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{Math.floor(this.state.seconds/60)}:{Math.floor(this.state.seconds%60)}</Text>
          </View>
          <View style={styles.progressContainer}>
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
            <ImageHeart/>
            <ImageHeart/>
            <ImageHeart/>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonInner}>
            <Button
              title="Increase 20%"
              onPress={this.increase.bind(this, "progress", 20)}
            />
          </View>
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  timeContainer: {
  },
  timeText: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 16
  },
  progressContainer: {
  },
  heartsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    marginTop: 15
  }
});
