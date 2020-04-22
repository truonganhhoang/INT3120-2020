import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import icons from "../assets/iconList";
import { TouchableOpacity } from "react-native-gesture-handler";
const GLOBAL = require("../utils/Globals");

export default function SettingItem(props){
  const { setting, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{setting.title}</Text>
        <Text style={styles.text}>{setting.text}</Text>
        <Image source={icons[setting.icon]} style={styles.settingImage}/>
      </View> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderStyle: "solid",
    backgroundColor: '#FFF',
    marginTop: 8,
  },

  title: {
    color: GLOBAL.COLOR.ORANGE,
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 17,
    maxWidth: 260,
  },

  settingImage:{
    display: "flex",
    position: "absolute",
    right: 16,
    marginLeft: 16,
    width: 32,
    height: 32,
    borderRadius: 16 
  },

  text:{
    fontSize: 13,
  }
});