import React from "react";
import { Text, Image, View, StyleSheet, Dimensions } from "react-native";

import TreeImages from "../TreeImages";
import planet from "../assets/planet.png";
import thunder from "../assets/thunder.png";
import wateringCan from "../assets/watering-can.png";

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth/100;
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
    paddingTop: screen(5),
    paddingLeft: screen(7),
    paddingBottom: screen(4.5)
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
    width: screen(25),
    height: screen(25),
    backgroundColor: "green",
    borderWidth: 0.5,
    borderRadius: 80,
    marginRight: screen(7)
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
    fontSize: screen(10),
    paddingTop: screen(3)
  },
  Mean: {
    textTransform: "lowercase",
    fontWeight: "500",
    color: "#030",
    fontSize: screen(9),
  },
});
