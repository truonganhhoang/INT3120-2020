import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import DetailTopicItem from "../components/DetailTopicItem";
import { FlatList } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
import sounds from "../assets/sounds";
import { Audio } from "expo-av";
export default class FavoriteWordsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      listWord: [],
    };
  }

  _getFavoriteWords = async () => {
    try {
      const value = await AsyncStorage.getItem("@FAVORITE_WORD:key");
      return JSON.parse(value);
    } catch (error) {
      console.log("Error _getFavoriteWords");
    }
  };

  async componentDidMount() {
    let words = await this._getFavoriteWords();
    this.setState({ listWord: words, isLoading: !this.state.isLoading });
  }

  playAudioSpelling(word) {
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

  render() {
    const { navigation } = this.props;
    navigation.setOptions({
      title: "Từ vựng",
    });

    return (
      <View>
        <Spinner
          visible={this.state.isLoading}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
        {this.state.listWord ? (
          <FlatList
            showsVerticalScrollIndicator={true}
            contentContainerStyle={styles.list}
            data={this.state.listWord}
            renderItem={({ item, index }) => {
              return (
                <DetailTopicItem
                  item={item}
                  playSound={this.playAudioSpelling(item.word)}
                ></DetailTopicItem>
              );
            }}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Bạn chưa có từ vựng nào!</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
});
