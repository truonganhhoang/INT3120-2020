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
  FlatList,
} from "react-native";
import Word from "../components/Word";
import WordContainer from "../components/WordContainer";

import sample from "../Data";
import thunder from "../assets/thunder.png";
import water from "../assets/watering-can.png";
import TreeImages from "../TreeImages";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const testData = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 },
  { key: 6 },
];

const _renderItem = ({ item, index }) => {
  return (
    <View style={styles.WordBox}>
      <Text>{item.key}</Text>
    </View>
  );
};

export default function Review({ navigation, route }) {
  return (
    <View style={styles.container}>
      
      <WordContainer/>

      <FlatList
        data={testData}
        renderItem={_renderItem}
        keyExtractor={(item) => `${item.key}`}
        numColumns={2}
      />
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
  WordBox: {
    width: screenWidth / 2,
    height: screenWidth / 2,
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
});
