import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const mem = ( text ) =>(
  <View style={styles.MemText}>
    <Text>tu nay nen nghe nhu nay </Text>
  </View>
);

function Mems(props) {
  const word = props.word;

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

      <View style={styles.MemText}>
        <Text>tu nay nen nghe nhu nay </Text>
      </View>
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
