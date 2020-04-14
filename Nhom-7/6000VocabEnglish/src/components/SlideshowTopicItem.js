import React, { Component } from "react";
import { Text, View, Image, StyleSheet, AsyncStorage } from "react-native";
import FlipComponent from "react-native-flip-component";
import { TouchableOpacity } from "react-native-gesture-handler";
import starOutline from "../assets/icon/star-outline.png";
import starFillColor from "../assets/icon/star-fill-color.png";
import imageList from "../assets/imageList";

export class SlideshowTopicItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      favorite: false,
    };
  }
  handleOnPress = () => {
    this.setState({ isFlipped: !this.state.isFlipped });
  };

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
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <FlipComponent
          isFlipped={this.state.isFlipped}
          scale={1}
          rotateDuration={600}
          frontView={
            <View>
              <TouchableOpacity onPress={this.handleOnPress} activeOpacity={1}>
                <View style={styles.container}>
                  <Image style={styles.image} source={imageList[word]} />
                  {/* <Text style={styles.hint}>Lật mặt sau</Text> */}
                </View>
              </TouchableOpacity>
              <View style={styles.iconStar}>
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
              </View>
            </View>
          }
          backView={
            <View>
              <TouchableOpacity onPress={this.handleOnPress} activeOpacity={1}>
                <View style={[styles.container, styles.containerBack]}>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.word}>{word}</Text>
                    <Text style={styles.spelling}>{spelling}</Text>
                  </View>

                  <Text style={styles.meaning}>{meaning}</Text>
                  {/* <Text style={styles.hint}>Lật mặt trước</Text> */}
                </View>
              </TouchableOpacity>
              <View style={styles.iconSpeaker}>
                <TouchableOpacity onPress={this.props.playSound}>
                  <Image
                    style={{ width: 64, height: 64 }}
                    source={require("../assets/icon/speaker.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          }
        />
      </View>
    );
  }
}

export default SlideshowTopicItem;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 400,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBack: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    paddingBottom: 40,
    paddingTop: 50,
  },
  iconStar: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  iconSpeaker: {
    position: "absolute",
    bottom: 80,
    left: 118,
  },
  hint: {
    color: "grey",
    fontFamily: "Roboto",
    fontSize: 14,
    position: "absolute",
    bottom: 20,
    left: 110,
  },
  image: {
    width: "100%",
    height: 250,
  },
  word: {
    textTransform: "lowercase",
    fontSize: 30,
    color: "#F57F17",
    fontWeight: "bold",
    textAlign: "center",
  },
  spelling: {
    textTransform: "lowercase",
    fontSize: 20,
    color: "#4d4d4d",
    fontWeight: "bold",
  },
  meaning: {
    textTransform: "lowercase",
    fontSize: 26,
    marginTop: 50,
    color: "#345eeb",
    fontWeight: "bold",
    // alignContent: "space-between"
  },
});
