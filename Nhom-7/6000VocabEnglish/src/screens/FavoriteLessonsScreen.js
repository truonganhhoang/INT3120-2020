import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import OverviewTopicItem from "../components/OverviewTopicItem";
import Carousel from "react-native-snap-carousel";
import Spinner from "react-native-loading-spinner-overlay";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class FavoriteLessonsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      topicItems: [],
    };
  }

  _getFavoriteTopics = async () => {
    try {
      const value = await AsyncStorage.getItem("@FAVORITE_TOPIC:key");
      return JSON.parse(value);
    } catch (error) {
      console.log("Error GETT");
    }
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
        <OverviewTopicItem
          item={item}
          handleGotoDetail={this.handleGotoDetail(item.topicName)}
          gotoSlide={this.gotoSlide(item.topicName)}
          gotoPractice={this.gotoPractice(item.topicName)}
          gotoExam={this.gotoExam(item.topicName)}
        ></OverviewTopicItem>
      </View>
    );
  };

  gotoSlide(topicName) {
    return () => {
      this.props.navigation.navigate("SlideshowByTopic", {
        titleTopic: topicName,
      });
    };
  }

  gotoPractice(topicName) {
    return () => {
      this.props.navigation.navigate("Practice", {
        titleTopic: topicName,
      });
    };
  }

  gotoExam(topicName) {
    return () => {
      this.props.navigation.navigate("Exam", {
        titleTopic: topicName,
      });
    };
  }

  handleGotoDetail(topicName) {
    return () => {
      this.props.navigation.navigate("DetailTopic", { titleTopic: topicName });
    };
  }

  async componentDidMount() {
    let topics = await this._getFavoriteTopics();
    // console.log(topics);
    this.setState({ topicItems: topics, isLoading: !this.state.isLoading });
  }

  render() {
    const { navigation } = this.props;
    navigation.setOptions({
      title: "Bài học",
    });

    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.isLoading}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />

        {this.state.topicItems ? (
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            layout={"default"}
            data={this.state.topicItems}
            renderItem={this._renderItem}
            sliderWidth={1000}
            itemWidth={350}
          />
        ) : (
          <Text style={{ fontSize: 16 }}>Bạn chưa có bài học nào!</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
