import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import icons from "../assets/iconList";
import { TouchableOpacity } from "react-native-gesture-handler";
const GLOBAL = require("../utils/Globals");

export default function LanguageItem(props){
  const { language, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={icons[language.icon]} style={styles.languageImage}/>
        <Text style={styles.title}>{language.title}</Text>
      </View> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 12,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderStyle: "solid",
    backgroundColor: '#FFF',
    marginTop: 4,
  },

  title: {
    color: GLOBAL.COLOR.ORANGE,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
  },

  languageImage:{
    display: "flex",
    position: "absolute",
    left: -4,
    marginLeft: 16,
    width: 32,
    height: 32,
    borderRadius: 16 
  }

});