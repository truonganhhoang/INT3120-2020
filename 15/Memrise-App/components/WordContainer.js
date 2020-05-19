import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

import TreeImages from "../TreeImages";
import planet from "../assets/planet.png";
import thunder from "../assets/thunder.png";
import wateringCan from "../assets/watering-can.png";

export default function WordContainer(props) {
  const { word, mean,level } = props.objWord;
  const hideMean =props.hideMean;
  return (
    <View style={styles.WordContainer}>
      <View style={styles.WordInfor}>
        <Text style={styles.Word}>{word}</Text>

        {hideMean||<Text style={styles.Mean}>{mean}</Text>}

      </View>

      <View>
        <Image style={styles.WordImage} source={TreeImages[level]} />

        <View styles={styles.ThunderWater}>
          {/* <Image style={styles.ThunderImage} source={thunder} /> */}
          {/* <Image  style={styles.WaterImage}  source ={water}/> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  WordContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 30,
    marginBottom: 30,
  },
  WordInfor: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-start",
  },
  ThunderWater: {
    flexDirection: "row",
  },
  WordImage: {
    width: 65,
    height: 65,
    backgroundColor: "green",
    // borderStyle: "solid",
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
    fontSize: 50,
    marginBottom: 20,
  },
  Mean: {
    textTransform: "lowercase",
    fontWeight: "500",
    color: "#030",
    fontSize: 30,
  },
});
