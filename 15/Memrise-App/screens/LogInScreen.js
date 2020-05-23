import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  ViewComponent,
} from "react-native";
import Word from "../components/Word";
import Learning from "../components/Learning";
import sample from "../Data";

import tree0 from "../assets/tree/tree0.png";
import tree1 from "../assets/tree/tree1.png";
import tree2 from "../assets/tree/tree2.png";
import tree3 from "../assets/tree/tree3.png";
import tree4 from "../assets/tree/tree4.png";
import tree5 from "../assets/tree/tree5.png";
import thunder from "../assets/thunder.png";
import water from "../assets/watering-can.png";
import { FlatList } from "react-native-gesture-handler";
const treeArr = [tree0, tree1, tree2, tree3, tree4, tree5];

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default class LogInScreen extends React.Component {


 render() {
    return (
        <View style={styles.container}>
          <Text>Đăng nhập</Text>
          <textarea></textarea>
        </View>
      );
 }
  
}

const styles = StyleSheet.create({

});
