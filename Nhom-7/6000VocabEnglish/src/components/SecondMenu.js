import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Image } from "react-native";
import { StyleSheet } from "react-native";
const GLOBAL = require("../utils/Globals");
export class SecondMenu extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity style={styles.containIcon}>
          <Image
            source={require("../assets/icon/slideshow.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#fff",
            borderBottomWidth: 1
          }}
        />
        <TouchableOpacity style={styles.containIcon}>
          <Image
            source={require("../assets/icon/edit.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#fff",
            borderBottomWidth: 1
          }}
        />
        <TouchableOpacity style={styles.containIcon}>
          <Image
            source={require("../assets/icon/medal.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default SecondMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GLOBAL.COLOR.ORANGE,
    borderRadius: 10,
    justifyContent: "center",
    height: 130,
    width: 40
  },
  icon: {
    width: 25,
    height: 25
  },
  containIcon: {
    padding: 8
  }
});
