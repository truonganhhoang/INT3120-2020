import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, Button } from "react-native";
import { StyleSheet } from "react-native";
import SecondMenu from "../components/SecondMenu";
import ProgressBarAnimated from "react-native-progress-bar-animated";
export class OverviewTopicItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
      progressComplete: 40
    };
  }

  handlePressFavorite = () => {
    this.setState({ favorite: !this.state.favorite });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={this.handlePressFavorite}>
              <Image
                source={
                  !this.state.favorite
                    ? require("../assets/icon/star-outline.png")
                    : require("../assets/icon/star-fill-color.png")
                }
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
            <Image
              source={require("../assets/uet-logo.png")}
              style={styles.mainImage}
            />
          </View>
          <ProgressBarAnimated
            style={styles.progressBar}
            width={100}
            height={8}
            backgroundColor="orange"
            value={this.state.progressComplete}
          ></ProgressBarAnimated>
          <Text>{this.props.topicName}</Text>
          <Text>{this.props.topicNameVi}</Text>
          <Text>{this.props.description}</Text>
        </View>
        <SecondMenu style={styles.secondMenu}></SecondMenu>
        <TouchableOpacity color="red">
          <Button color="lightblue" title="CHI TIẾT"></Button>
        </TouchableOpacity>
      </View>
    );
  }
}

export default OverviewTopicItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingLeft: 30,
    width: 300,
    borderColor: "red",
    borderWidth: 1
  },
  childContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 20,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  mainImage: {
    borderRadius: 50,
    borderColor: "#4d4d4d",
    width: 200,
    height: 200,
    marginRight: 20
  },
  buttonDetail: {
    backgroundColor: "black"
  }
});
