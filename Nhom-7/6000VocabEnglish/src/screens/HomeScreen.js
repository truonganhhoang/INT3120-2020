import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, FlatList, Text, Image, Alert } from "react-native";

//Import Components
import CategoryItem from "../components/CategogyItem";
import LogoTitle from "../components/LogoTitle";

//Import Style
import StyleHomeScreen from "../themes/StyleHomeScreen";

//Import Data local
import categoryList from "../../data/CategoryName";

const GLOBAL = require("../utils/Globals");

export default class CategoriesScreen extends React.Component {
  _onPressButtonSetting = () => {
    Alert.alert("setting")
  };

  _onPressButtonFavorite = () => {
    Alert.alert("favor")
  };

  //Space between 2 CategoryItem
  renderSeparator = () => {
    return <View style={StyleHomeScreen.StyleMain.separator} />;
  };

  render() {
    const { navigation } = this.props;

    //Set options for header
    navigation.setOptions({
      //Logo & text below
      headerTitleAlign: "center",
      headerTransparent: true,
      headerTitleContainerStyle: { marginHorizontal: 20, marginTop: 20 },
      headerTitle: props => (
        <View style={StyleHomeScreen.StyleHeader.headerTitle}>
          <LogoTitle {...props} />
          <Text style={StyleHomeScreen.StyleHeader.textAds}>No Ads. Enjoy it!</Text>
        </View>
      ),

      //Left Header
      headerLeftContainerStyle: { margin: 16, padding: 5 },
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={this._onPressButtonSetting}>
            <Image
              source={require("../assets/icon/settings-icon.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        );
      },

      //Right Header
      headerRightContainerStyle: { margin: 16, padding: 5 },
      headerRight: () => {
        return (
          <TouchableOpacity onPress={this._onPressButtonFavorite}>
            <Image
              source={require("../assets/icon/star-icon.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        );
      }
    });

    return (
      <View style={StyleHomeScreen.StyleMain.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this.renderSeparator}
          contentContainerStyle={StyleHomeScreen.StyleMain.listItems}
          data={categoryList}
          renderItem={({ item, index }) => {
            return (
              <CategoryItem
                item={item}
                pressed={() =>
                  navigation.navigate("Category", {
                    categoryTitle: item.title
                  })
                }
              ></CategoryItem>
            );
          }}
        ></FlatList>
      </View>
    );
  }
}
