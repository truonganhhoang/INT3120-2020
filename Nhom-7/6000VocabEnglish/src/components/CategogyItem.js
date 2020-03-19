import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableHighlight
} from "react-native";

//Style
import StyleHomeScreen from "../themes/StyleHomeScreen";

export default class CategoryListItem extends Component {
  render() {
    const images = this.props.item.images;
    const iconCategory = images[0].icon;
    const backgroundCategory = images[0].background;

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
              <Image source={iconCategory} style={StyleHomeScreen.StyleCategoryItem.icon} />
              <View style={StyleHomeScreen.StyleCategoryItem.textRight}>
                <Text style={[StyleHomeScreen.StyleCategoryItem.title, StyleHomeScreen.StyleCategoryItem.textRightStyle]}>
                  {this.props.item.title}
                </Text>
                <Text style={[StyleHomeScreen.StyleCategoryItem.description, StyleHomeScreen.StyleCategoryItem.textRightStyle]}>
                  {this.props.item.description}
                </Text>
                <View style={StyleHomeScreen.StyleCategoryItem.horizontalLine} />
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}