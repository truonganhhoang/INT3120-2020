import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import GLOBAL from "../utils/Globals";
import SlideshowTopicItem from "../components/SlideshowTopicItem";
import db from "../../config/configFirebase";
import Spinner from "react-native-loading-spinner-overlay";
import Carousel from "react-native-snap-carousel";
import sounds from "../assets/sounds";
import { Audio } from "expo-av";

export class SlideshowTopicScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      listWord: [],
      currentPage: 0,
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

      //title: navigation.getParam("categoryTitle", "A Nested Details Screen")
    };
  };
  _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <SlideshowTopicItem
          item={item}
          playSound={this.playAudioSpelling(item.word)}
        ></SlideshowTopicItem>
      </View>
    );
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const { titleTopic } = this.props.route.params;
    console.log(titleTopic);
    let data = [];

    if (titleTopic !== undefined) {
      db.collection("/topic/")
        .doc("people")
        .collection("people")
        .doc(titleTopic)
        .collection(titleTopic)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            // console.log(doc.id, "=>", doc.data());
            data.push(doc.data());
            // console.log("Slidedhow" + data);
          });

          this.setState({ listWord: data, isLoading: !this.state.isLoading });
        })
        .catch((err) => {
          console.log("Error getting documents", err);
        });
    } else {
      this.setState({ isLoading: false });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.isLoading}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          layout={"default"}
          data={this.state.listWord}
          renderItem={this._renderItem}
          sliderWidth={1000}
          itemWidth={300}
        ></Carousel>
      </View>
    );
  }
  playAudioSpelling(word) {
    // console.log("Slide show:" + word);
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
}

export default SlideshowTopicScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GLOBAL.COLOR.LIGHTGRAY,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 50,
  },
});
