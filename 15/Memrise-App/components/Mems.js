import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MemContent = ( props ) =>(
  <View style={styles.MemText}>
    <Text>{ props.text } </Text>
  </View>
);

function Mems(props) {
  const {mems} = props.word;
  console.log(mems)
  // Alisa ! No mem created for this ...
  return (
    <View style={styles.Mem}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "50",
          color: "blue",
          marginBottom: 30,
        }}
      >
        Your Mems
      </Text>

        <MemContent  text ={'asdasd'}/>
    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  Mem: {
    padding: 30,
  },
  MemText: {
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 0.2,

    // borderStyle:'solid',
  },
});

export default Mems;
