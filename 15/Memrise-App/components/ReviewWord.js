import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth/100;

const boxBackGroundColor = {
  correct: "#1a3",
  incorrect: "#e13",
  waiting: "#eee",
};

export default function ReviewWord(props) {
  const { wordObj, onPress , check ,index } = props;
  const [color , setColor ]= useState( boxBackGroundColor[check].toString() );
  
  useEffect(()=>{
    setColor(boxBackGroundColor[check].toString())
   
  })
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(wordObj,index)}>
      <View
        style={[
          styles.WordBox,
          { backgroundColor: color},
 
        ]}
      >
        <Text  style={{fontSize:20}}>{wordObj.mean } </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  WordBox: {
    flex: 1,
    height: screen(30),
    width: screen(40),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: "black",
    shadowColor: "black",
    shadowOpacity: 0.3,
    marginLeft: screen(5),
    marginBottom: screen(4)
  },

});
