import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import icons from "../assets/iconList";

//Style
import StyleHomeScreen from "../themes/StyleHomeScreen";

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listChildTopic: []
    };
  }

  render() {
    const iconCategory = this.props.item.icon;
    const backgroundCategory = this.props.item.background;

    return (
      <TouchableHighlight
        // activeOpacity={0.6}
        style={StyleHomeScreen.StyleCategoryItem.touchable}
        underlayColor="black"
        onPress={this.props.pressed}
      >
        <View>
          <View style={StyleHomeScreen.StyleCategoryItem.container}>
            <ImageBackground
              source={{ uri: backgroundCategory }}
              imageStyle={StyleHomeScreen.StyleCategoryItem.backgroundImage}
              style={StyleHomeScreen.StyleCategoryItem.image}
            >
              <Image
                source={icons[iconCategory]}
                style={StyleHomeScreen.StyleCategoryItem.icon}
              />
              <View style={StyleHomeScreen.StyleCategoryItem.textRight}>
                <Text
                  style={[
                    StyleHomeScreen.StyleCategoryItem.title,
                    StyleHomeScreen.StyleCategoryItem.textRightStyle
                  ]}
                >
                  {this.props.item.title}
                </Text>
                <Text
                  style={[
                    StyleHomeScreen.StyleCategoryItem.description,
                    StyleHomeScreen.StyleCategoryItem.textRightStyle
                  ]}
                >
                  {this.props.item.description}
                </Text>
                <View
                  style={StyleHomeScreen.StyleCategoryItem.horizontalLine}
                />
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
