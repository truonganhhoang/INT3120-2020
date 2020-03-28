import React, { Component } from "react";
const GLOBAL = require("../utils/Globals");
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import OverviewTopicItem from "../components/OverviewTopicItem";
import Carousel from "react-native-snap-carousel";
import itemTopicPeople from "../../data/CategoryItemByTopic";
import db from "../../config/configFirebase";
import Spinner from "react-native-loading-spinner-overlay";

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      topicItems: []
    };
  }

  static navigationOptions = ({ route }) => {
    return {
      title: route.params.categoryTitle,
      headerTitleStyle: {
        color: GLOBAL.COLOR.ORANGE,
        fontWeight: "bold",
        textTransform: "capitalize"
      },
      headerTitleAlign: "center"
      //title: navigation.getParam("categoryTitle", "A Nested Details Screen")
    };
  };

  _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <OverviewTopicItem item={item}></OverviewTopicItem>
      </View>
    );
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { categoryId } = this.props.route.params;
    console.log(categoryId);

    let data = [];
    db.collection("/topic/")
      .doc(categoryId)
      .collection(categoryId)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          // console.log(doc.id, "=>", doc.data());
          data.push(doc.data());
          // console.log(data);
        });

        this.setState({ topicItems: data, isLoading: !this.state.isLoading });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }
  render() {
    const { categoryId } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.isLoading}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          layout={"default"}
          data={this.state.topicItems}
          renderItem={this._renderItem}
          sliderWidth={1000}
          itemWidth={350}
        ></Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center"
  }
});
