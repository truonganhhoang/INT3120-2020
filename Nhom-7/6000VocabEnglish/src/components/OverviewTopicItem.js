import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import StyleHomeScreen from "../themes/StyleHomeScreen";
import SecondMenu from "../components/SecondMenu";
export class OverviewTopicItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false
    };
  }

  handlePressFavorite = () => {
    console.log(this.state.favorite);
    this.setState({ favorite: !this.state.favorite });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <View style={{ flexDirection: "row", position: "relative" }}>
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
          <View style={StyleHomeScreen.StyleCategoryItem.horizontalLine} />
          <Text>{this.props.description}</Text>
        </View>
        <SecondMenu style={styles.secondMenu}></SecondMenu>
      </View>
    );
  }
}

export default OverviewTopicItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30
  },
  childContainer: {
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
    height: 300
  },
  mainImage: {
    borderRadius: 50,
    borderColor: "#4d4d4d",
    width: 200,
    height: 200,
    marginRight: 20
  },
  secondMenu: {
    alignSelf: "center",
    alignContent: "center"
  }
});
