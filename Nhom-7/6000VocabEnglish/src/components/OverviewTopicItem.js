import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, Button, AsyncStorage } from "react-native";
import { StyleSheet } from "react-native";
import SecondMenu from "./SecondMenu";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import starOutline from "../assets/icon/star-outline.png";
import starFillColor from "../assets/icon/star-fill-color.png";
import imageList from "../assets/imageList";
export class OverviewTopicItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
    };
  }

  async handlePressFavorite(item) {
    if (!this.state.favorite) {
      //add to storage
      await this._storeData(item);
    } else {
      await this._removeData(item);
    }

    this.setState({ favorite: !this.state.favorite });
  }

  _removeData = async (item) => {
    try {
      const data = await AsyncStorage.getItem("@FAVORITE_TOPIC:key");
      let topics = JSON.parse(data);
      topics = topics.filter((e) => {
        return e.topicName !== JSON.parse(JSON.stringify(item)).topicName;
      });
      // console.log(topics);
      await AsyncStorage.setItem("@FAVORITE_TOPIC:key", JSON.stringify(topics));
    } catch (e) {
      console.log("Error remove data");
    }
  };

  _storeData = async (item) => {
    try {
      const data = await AsyncStorage.getItem(
        "@FAVORITE_TOPIC:key",
        async (err, result) => {
          err ? await AsyncStorage.setItem("@FAVORITE_TOPIC:key", null) : null;
        }
      );
      let topics = null;
      if (data === null) {
        topics = [];
      } else {
        topics = JSON.parse(data);
        // console.log("Parsed: " + topics);
      }
      let parsed = JSON.parse(JSON.stringify(item));
      topics.push(parsed);
      // console.log(JSON.stringify(topics));

      await AsyncStorage.setItem("@FAVORITE_TOPIC:key", JSON.stringify(topics));
    } catch (error) {
      // Error saving data
      console.log("ERROR: " + error);
    }
  };

  async checkFavorite() {
    let list;
    try {
      const value = await AsyncStorage.getItem("@FAVORITE_TOPIC:key");
      list = value;
    } catch (error) {
      // console.log("ERROR GET");
    }
    if (list !== null) {
      list = JSON.parse(list);
      list = list.filter((e) => {
        return e.topicName === this.props.item.topicName;
      });
    }
    if (list !== null && list.length > 0) {
      this.setState({ favorite: true });
    }
  }

  componentDidMount() {
    this.checkFavorite();
  }

  render() {
    let { image, topicName, topicNameVi, description } = this.props.item;
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                this.handlePressFavorite(this.props.item);
              }}
            >
              <Image
                source={!this.state.favorite ? starOutline : starFillColor}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
            <Image source={imageList[image]} style={styles.mainImage} />
          </View>
          <ProgressBarAnimated
            style={styles.progressBar}
            width={100}
            height={8}
            backgroundColor="orange"
            value={this.state.progressComplete}
          ></ProgressBarAnimated>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.topicName}>{topicName}</Text>
            <Text style={styles.topicNameVi}>{topicNameVi}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
        <SecondMenu
          style={styles.secondMenu}
          gotoSlide={this.props.gotoSlide}
          gotoPractice={this.props.gotoPractice}
          gotoExam={this.props.gotoExam}
        ></SecondMenu>
        <View style={styles.viewBtnDeail}>
          <TouchableOpacity
            style={styles.btnDetail}
            activeOpacity={0.9}
            onPress={this.props.handleGotoDetail}
          >
            <Text style={styles.textBtnDetail}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default OverviewTopicItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 0,
    padding: 10,
  },
  childContainer: {
    borderRadius: 20,
    backgroundColor: "#fff",
    height: 420,
    justifyContent: "space-around",
    margin: 20,
    padding: 12,
    alignItems: "center",
    elevation: 3,
  },
  secondMenu: {
    position: "absolute",
    right: 10,
    top: 110,
    elevation: 4,
  },
  btnDetail: {
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#1f7ac4",
    borderWidth: 0,
    alignItems: "center",
    height: 40,
    width: 150,
  },
  viewBtnDeail: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 430,
    left: 15,
    width: "100%",
    elevation: 4,
  },
  textBtnDetail: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
  },
  mainImage: {
    borderRadius: 100,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    marginRight: 20,
    backgroundColor: "#fff",
  },
  progressBar: {
    margin: 5,
  },
  topicName: {
    textTransform: "capitalize",
    fontSize: 25,
    color: "gray",
    fontWeight: "bold",
  },
  topicNameVi: {
    textTransform: "capitalize",
    fontSize: 20,
    color: "#F57F17",
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#8E8E8E",
  },
});
