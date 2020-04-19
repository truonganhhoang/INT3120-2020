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

import sample from "../Data";

import tree0 from "../assets/tree/tree0.png";
import tree1 from "../assets/tree/tree1.png";
import tree2 from "../assets/tree/tree2.png";
import tree3 from "../assets/tree/tree3.png";
import tree4 from "../assets/tree/tree4.png";
import tree5 from "../assets/tree/tree5.png";
import thunder from "../assets/thunder.png";
import water from "../assets/watering-can.png";
const treeArr = [tree0, tree1, tree2, tree3, tree4, tree5];

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function Review({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.DetailsBox}>
        <View style={styles.WordContainer}>
          <Text style={styles.Word}>登録</Text>
          <Text style={styles.Title}>Means : </Text>
          <Text style={styles.Mean}>Đăng ký</Text>
        </View>

        <View>
          <Image style={styles.WordImage} source={tree4} />

          <View styles={styles.ThunderWater}>
            <Image style={styles.ThunderImage} source={thunder} />
            {/* <Image  style={styles.WaterImage}  source ={water}/> */}
          </View>
        </View>
      </View>

      <View style={styles.WordBox}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  DetailsBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    marginBottom: 30,
  },
  WordContainer: {
    flexGrow: 1,
  },
  ThunderWater: {
    flexDirection: "row",
  },
  WordImage: {
    width: 65,
    height: 65,
    backgroundColor: "green",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderRadius: 80,
  },
  ThunderImage: {
    marginTop: 20,
    width: 35,
    height: 35,
    opacity: 0.4,
  },
  WaterImage: {
    marginTop: 20,
    width: 35,
    height: 35,
    marginLeft: "auto",
  },
  Mem: {
    padding: 30,
  },
  MemText: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    borderStyle: "solid",
  },
  Word: {
    textTransform: "lowercase",
    fontWeight: "700",
    fontSize: 30,
  },
  Mean: {
    textTransform: "lowercase",
    fontWeight: "500",
    fontSize: 15,
  },
  Title: {
    paddingTop: 30,
    paddingBottom: 5,
    color: "red",
    fontWeight: "500",
    fontSize: 15,
  },
  WordBox: {
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
});
