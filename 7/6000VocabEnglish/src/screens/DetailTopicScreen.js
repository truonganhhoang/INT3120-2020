import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import DetailTopicItem from "../components/DetailTopicItem";
import { FlatList } from "react-native-gesture-handler";
import GLOBAL from "../utils/Globals";
import Spinner from "react-native-loading-spinner-overlay";
import StyleHomeScreen from "../themes/StyleHomeScreen";
import db from "../../config/configFirebase";
import sounds from "../assets/sounds";
import { Audio } from "expo-av";
import storage from "../../config/configFirebaseStorage";

export class DetailTopicScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      listWord: [],
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
    };
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const { titleTopic, parentTopic } = this.props.route.params;
    console.log(titleTopic);
    let data = [];

    if (titleTopic !== undefined) {
      db.collection("/topic/")
        .doc(parentTopic)
        .collection(parentTopic)
        .doc(titleTopic)
        .collection(titleTopic)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            // console.log(doc.id, "=>", doc.data());
            data.push(doc.data());
            // console.log(data);
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

  playAudioSpelling(word) {
    return async () => {
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(sounds[word]);

        // await soundObject.loadAsync({
        //   uri:
        //     "https://drive.google.com/drive/folders/1LFGBZluj3_IymU8YZlNoVopLvxA3zE1N",
        // });

        await soundObject.playAsync();
        // Your sound is playing!
      } catch (error) {
        // An error occurred!
      }
    };
  }

  readFileFromStorage(word) {
    return async () => {
      let path = "/Audio-Vocab/" + word + ".mp3";
      console.log(path);
      // console.log(storage);
      storage
        .ref(path)
        // .child(path)
        .getDownloadURL()
        .then(async function (url) {
          // playAudioSpelling(url);
          const soundObject = new Audio.Sound();
          try {
            await soundObject.loadAsync({ uri: url });
            console.log("URLLLLL:" + url);

            await soundObject.playAsync();
            // Your sound is playing!
          } catch (error) {
            // An error occurred!
          }
        })
        .catch(function (error) {
          console.log("Error" + error);
        });
    };
  }

  render() {
    return (
      <View>
        <Spinner
          visible={this.state.isLoading}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
        <FlatList
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.list}
          data={this.state.listWord}
          renderItem={({ item, index }) => {
            return (
              <DetailTopicItem
                item={item}
                playSound={this.readFileFromStorage(item.word)}
              ></DetailTopicItem>
            );
          }}
        ></FlatList>
      </View>
    );
  }
}

export default DetailTopicScreen;

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
});
