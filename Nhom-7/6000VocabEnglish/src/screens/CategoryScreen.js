import React, { Component } from "react";
const GLOBAL = require("../utils/Globals");
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import OverviewTopicItem from "../components/OverviewTopicItem";
import Carousel from "react-native-snap-carousel";
import itemTopicPeople from "../../data/CategoryItemByTopic";
export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({ route }) => {
    return {
      title: route.params.categoryTitle,
      headerTitleStyle: {
        color: GLOBAL.COLOR.ORANGE,
        fontWeight: "bold"
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
        <OverviewTopicItem
          topicName={item.topicName}
          topicNameVi={item.topicNameVi}
          description={item.description}
        ></OverviewTopicItem>
      </View>
    );
  };

  render() {
    const { categoryId } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          layout={"default"}
          data={itemTopicPeople}
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
