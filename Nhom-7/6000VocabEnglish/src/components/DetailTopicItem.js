import React, { Component } from "react";
import { Text, View, Image, AsyncStorage } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import starOutline from "../assets/icon/star-outline.png";
import starFillColor from "../assets/icon/star-fill-color.png";
import imageList from "../assets/imageList";
import GLOBAL from "../utils/Globals";
export class DetailTopicItem extends Component {
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
      const data = await AsyncStorage.getItem("@FAVORITE_WORD:key");
      let words = JSON.parse(data);
      words = words.filter((e) => {
        return e.word !== JSON.parse(JSON.stringify(item)).word;
      });
      // console.log(words);
      await AsyncStorage.setItem("@FAVORITE_WORD:key", JSON.stringify(words));
    } catch (e) {
      console.log("Error remove data");
    }
  };

  _storeData = async (item) => {
    try {
      const data = await AsyncStorage.getItem(
        "@FAVORITE_WORD:key",
        async (err, result) => {
          err ? await AsyncStorage.setItem("@FAVORITE_WORD:key", null) : null;
        }
      );
      let words = null;
      if (data === null) {
        words = [];
      } else {
        words = JSON.parse(data);
      }
      let parsed = JSON.parse(JSON.stringify(item));
      words.push(parsed);

      await AsyncStorage.setItem("@FAVORITE_WORD:key", JSON.stringify(words));
    } catch (error) {
      // Error saving data
      console.log("ERROR _storeData:  " + error);
    }
  };

  async checkFavorite() {
    let list;
    try {
      const value = await AsyncStorage.getItem("@FAVORITE_WORD:key");
      list = value;
    } catch (error) {
      console.log("ERROR checkFavorite");
    }
    if (list !== null) {
      list = JSON.parse(list);
      list = list.filter((e) => {
        return e.word === this.props.item.word;
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
    const { word, spelling, meaning } = this.props.item;
    return (
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <View style={styles.iconStar}>
            <TouchableOpacity
              onPress={() => this.handlePressFavorite(this.props.item)}
            >
              <Image
                source={!this.state.favorite ? starOutline : starFillColor}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Image style={styles.mainImage} source={imageList[word]} />
          </View>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.word}>{word}</Text>
          <Text style={styles.spelling}>{spelling}</Text>
          <TouchableOpacity
            style={styles.iconSpeaker}
            onPress={this.props.playSound}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/icon/speaker.png")}
            />
          </TouchableOpacity>
          <Text style={styles.meaning}>{meaning}</Text>
        </View>
      </View>
    );
  }
}

export default DetailTopicItem;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    height: 170,
    borderRadius: 8,
  },
  iconStar: {
    zIndex: 1,
    position: "absolute",
    top: -5,
    left: -5,
    width: 25,
    height: 25,
  },
  mainImage: {
    borderWidth: 0,
    width: 150,
    height: 150,
    backgroundColor: "#fff",
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-around",
    alignItems: "center",
  },
  iconSpeaker: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: 24,
    height: 24,
    borderRadius: 12,
    marginTop: 5,
  },
  word: {
    textTransform: "lowercase",
    fontSize: 24,
    color: "#F57F17",
    fontWeight: "bold",
    textAlign: "center",
  },
  spelling: {
    textTransform: "lowercase",
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  meaning: {
    textTransform: "lowercase",
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
    // alignContent: "space-between"
  },
});
