import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, FlatList, Text, Image, Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

//Import Components
import CategoryItem from "../components/CategogyItem";
import LogoTitle from "../components/LogoTitle";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
//Import Style
import StyleHomeScreen from "../themes/StyleHomeScreen";
//Import Data local
// import categoryList from "../../data/CategoryName";

import db from "../../config/configFirebase";

const GLOBAL = require("../utils/Globals");

export default class CategoriesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      categoryList: []
    };
  }

  _onPressButtonSetting = () => {
    Alert.alert("setting");
  };

  _onPressButtonFavorite = () => {
    this.props.navigation.navigate("Favorite");
  };

  //Space between 2 CategoryItem
  renderSeparator = () => {
    return <View style={StyleHomeScreen.StyleMain.separator} />;
  };

  componentDidMount() {
    let categoryRef = db.collection("/topic/");
    let data = [];
    let allCities = categoryRef
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.id, "=>", doc.data());
          data.push(doc.data());
          // console.log(data);
        });

        this.setState({ categoryList: data, isLoading: !this.state.isLoading });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }
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
          <Text style={StyleHomeScreen.StyleHeader.textAds}>
            No Ads. Enjoy it!
          </Text>
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
        <Spinner
          visible={this.state.isLoading}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this.renderSeparator}
          contentContainerStyle={StyleHomeScreen.StyleMain.listItems}
          data={this.state.categoryList}
          renderItem={({ item, index }) => {
            return (
              <CategoryItem
                item={item}
                pressed={() =>
                  navigation.push("Category", {
                    categoryTitle: item.title,
                    categoryId: item.title
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
