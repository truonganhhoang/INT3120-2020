import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import TreeImages from "../TreeImages";
import planet from "../assets/planet.png";
import thunder from "../assets/thunder.png";
import wateringCan from "../assets/watering-can.png";

export default function WordContainer(props) {
 
  return (
    <View style={styles.WordContainer}>
      <View style={styles.WordInfor}>
        <Text style={styles.Word}>登録</Text>

        <Text style={styles.Mean}>Đăng ký</Text>
      </View>

      <View>
        <Image style={styles.WordImage} source={TreeImages[4]} />

        <View styles={styles.ThunderWater}>
          <Image style={styles.ThunderImage} source={thunder} />
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
        fontSize: 55,
        marginBottom :20,
      },
      Mean: {
        textTransform: "lowercase",
        fontWeight: "500",
        fontSize: 20,
      },
     
});
