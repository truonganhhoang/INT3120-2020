import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import StyleCommon from "../themes/StyleCommon";
import LanguageItem from "../components/LanguageItem";
import Spinner from "react-native-loading-spinner-overlay";

const GLOBAL = require("../utils/Globals");

export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: "Ngôn ngữ",
    headerTitleStyle: StyleCommon.StyleHeaderCommon.headerTitle,
    headerTitleAlign: "center",
    headerTintColor: GLOBAL.COLOR.ORANGE
  };

  constructor(props) {
    super(props);

    me = this;
    this.state = {
      languageList: [
        {id: 1, title: "Tiếng Việt", icon: "vietnam" },
        {id: 2, title: "Italy", icon: "italy" },
        {id: 3, title: "Germany", icon: "germany" },
        {id: 4, title: "Poland", icon: "poland" }
      ]
    };
  }

  render() {
    const { navigation } = this.props;
    const { languageList } = this.state;
    return (
      <View>
        <Spinner
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
        <FlatList
          data={languageList}
          renderItem={({ item }) => <LanguageItem language={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
        ></FlatList>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    paddingLeft: 16,
    paddingRight: 16
  }
});